const compose =
  (...fns: Function[]) =>
  (...args: any[]) =>
    fns.reduceRight((prevRes, fn) => [fn.apply(null, prevRes)], args)[0]

const createArr = (n: number) => [...Array(n).keys()]

const shuffle = ([...arr]: number[]) => {
  let m = arr.length
  while (m) {
    const i = Math.floor(Math.random() * m--)
    ;[arr[i], arr[m]] = [arr[m], arr[i]]
  }
  return arr
}

const createChaoticArr = compose(shuffle, createArr)

const exec = (arr: any[], i: number, j: number) => {
  ;[arr[i], arr[j]] = [arr[j], arr[i]]
}

export {}
