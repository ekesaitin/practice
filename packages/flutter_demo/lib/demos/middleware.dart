import 'package:flutter/material.dart';
import 'package:flutter_demo/router/router.dart';
import 'package:get/get.dart';

class MdDemo extends StatelessWidget {
  const MdDemo({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: TextButton(
          child: Text('md1'),
          onPressed: () {
            Get.toNamed('${Routes.md1}/123?aa=111&bb=222');
          },
        ),
      ),
    );
  }
}

class MdDemo1 extends StatelessWidget {
  MdDemo1({Key? key}) : super(key: key) {
    print(Get.parameters);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(child: Text('111')),
    );
  }
}

class MdDemo2 extends StatelessWidget {
  const MdDemo2({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(child: Text('222')),
    );
  }
}

class Md1 extends GetMiddleware {
  @override
  // TODO: implement priority
  int? get priority => 2;

  @override
  RouteSettings? redirect(String? route) {
    print(111);
    // TODO: implement redirect
    // return RouteSettings(name: Routes.md2);
  }
}

class Md2 extends GetMiddleware {
  @override
  // TODO: implement priority
  int? get priority => 1;

  @override
  RouteSettings? redirect(String? route) {
    print(222);
    // TODO: implement redirect
    return super.redirect(route);
  }

  @override
  GetPageBuilder? onPageBuildStart(GetPageBuilder? page) {
    print('bbb');
    // TODO: implement onPageBuildStart
    return super.onPageBuildStart(page);
  }
}
