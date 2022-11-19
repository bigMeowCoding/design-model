import React from "react";
import { FC } from "react";
import { Button } from "antd";

interface Props {}

const DecoratorMain: FC<Props> = () => {
  function after(fn: Function, afterFn: Function) {
    return function (this: any, ...args: any[]) {
      fn.apply(this, args);
      afterFn.apply(this, args);
    };
  }
  function clickHandle() {
    console.log("click=====");
  }
  const wrapperClickHandler = after(clickHandle, function () {
    console.log("上报");
  });

  return (
    <>
      <div>装饰者模式</div>
      <Button onClick={wrapperClickHandler}>click</Button>
    </>
  );
};

export default DecoratorMain;
