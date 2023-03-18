import { isString } from './utils'

interface RendererNode {
  [k: string]: any
}

interface RendererElement extends RendererNode {}

export interface RenderOptions<N = RendererNode, E = RendererElement> {
  // 创建元素
  createElement(tag: string): E
  // 设置元素的文本节点
  setElement(el: E, text: string): void
  // 在给定的parent下添加指定元素
  inster(el: N, parent: E, anchor?: N | null): void
  // 设置相关属性
  patchProps(el: E, key: string, prevValue: any, nextValue: any): void
}

type VNodeType = string | VNode

export interface VNode {
  type: VNodeType
  children?: string | VNode | VNode[] | null
  props?: { [K: string]: any } | null
  el?: RendererNode
}

// 不直接依赖于浏览器特有的API，只要传入不同的配置项，就能够完成非浏览器环境下的渲染工作
export function createRenderer(options: RenderOptions) {
  const { createElement, setElement, inster, patchProps } = options

  function mountedElement(vnode: VNode, container: RendererElement) {
    const el = (vnode.el = createElement(vnode.type as string))

    const { children, props } = vnode

    if (isString(children)) {
      setElement(el, children)
    } else if (Array.isArray(children)) {
      children.forEach((child) => {
        patch(null, child, el)
      })
    }

    if (props) {
      Object.entries(props).forEach(([key, val]) => {
        patchProps(el, key, null, val)
      })
    }

    inster(el, container)
  }

  /**
   * @param n1 旧vnode
   * @param n2 新vnode
   */
  function patch(n1: VNode | null, n2: VNode, container: RendererElement) {
    if (n1 && n1.type !== n2.type) {
      // 类型不同，就直接将旧vnode卸载
      unmount(n1)
      // 将n1重置为null，保证后续挂载操作能正确执行
      n1 = null
    }

    const { type } = n2

    // 如果是字符串类型，则它描述的是普通标签元素
    if (isString(type)) {
      if (!n1) {
        // n1不存在，意味着挂载，直接调用mountedElement完成
        mountedElement(n2, container)
      } else {
        // n1存在，意味着打补丁
        patchElement(n1, n2)
      }
    } else if (isObject(type)) {
      // 如果type是对象，则它描述的是组件
    } else if (type === 'xxx') {
      // 处理其它类型的vnode
    }
  }

  function patchElement(n1: VNode, n2: VNode) {}

  function unmount(vnode: VNode) {
    const { el } = vnode
    const parent = el?.parentNode

    if (parent) {
      parent.removeChild(el)
    }
  }

  function render(vnode: VNode | null, container: RendererElement) {
    if (vnode) {
      patch(container._vnode, vnode, container)
    } else {
      /**
       * 旧vnode存在，新vnode不存在，说明时卸载（unmount）操作，
       * 只需要将container内的DOM清空即可
       */
      if (container._vnode) {
        unmount(container._vnode)
      }
    }

    container._vnode = vnode
  }

  return { render }
}
