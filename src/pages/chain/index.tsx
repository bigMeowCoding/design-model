import React from "react";
import { FC } from "react";

interface Props {}
type OrderType = 1 | 2 | 3;
const successOrder = "next";
class Chain {
  private successor: Chain | null = null;
  constructor(private fn: Function) {}
  setSuccessor(chain: Chain) {
    this.successor = chain;
  }
  passRequest(...args: any[]) {
    const ret = this.fn.apply(this, args);

    if (ret === successOrder && this.successor) {
      this.successor.passRequest(...args);
    }
  }
}

const ChainMain: FC<Props> = () => {
  function order500(type: OrderType, hasPay: boolean, hasStock: boolean) {
    if (type === 1) {
      if (hasPay) {
        console.log("500订购获得100优惠卷");
      } else {
        return "next";
      }
    } else {
      return "next";
    }
  }

  function order200(type: OrderType, hasPay: boolean, hasStock: boolean) {
    if (type === 2 && hasPay) {
      console.log("200内购获得50元优惠卷");
    } else {
      return "next";
    }
  }

  function orderNormal(type: OrderType, hasPay: boolean, hasStock: boolean) {
    if (hasStock) {
      console.log("普通购买，无优惠卷");
    } else {
      console.log("无库存");
    }
  }
  const order500Chain = new Chain(order500);
  const order200Chain = new Chain(order200);
  const orderNormalChain = new Chain(orderNormal);

  order200Chain.setSuccessor(orderNormalChain);
  order500Chain.setSuccessor(order200Chain);

  order500Chain.passRequest(1, true, true);
  order500Chain.passRequest(1, false, true);
  order500Chain.passRequest(2, true, true);
  order500Chain.passRequest(2, false, true);
  order500Chain.passRequest(3, true, true);
  order500Chain.passRequest(3, true, false);
  return <div>职责链模式</div>;
};

export default ChainMain;
