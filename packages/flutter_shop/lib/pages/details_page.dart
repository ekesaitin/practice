import 'package:flutter/material.dart';

class DetailsPage extends StatelessWidget {
  final String goodsId;
  DetailsPage(this.goodsId);

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Container(child: Text('商品ID为：${goodsId}')),
    );
  }
}
