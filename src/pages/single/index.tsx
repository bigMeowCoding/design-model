import React, { createElement } from "react";
import { FC } from "react";
import { Button } from "antd";

interface Props {}

function getSingle(fn: any) {
  let ret: any;
  return function (this: any, ...args: any[]) {
    return ret || (ret = fn.apply(this, args));
  };
}

const SingleMain: FC<Props> = () => {
  const creatSingleModal = getSingle(() => {
    const div = document.createElement("div");
    div.innerText = "modal";
    div.style.display = "none";
    document.body.appendChild(div);
    return div;
  });
  return (
    <>
      <h1>单例模式</h1>
      <div>
        <Button
          type="primary"
          onClick={() => {
            creatSingleModal().style.display = "block";
          }}
        >
          登录
        </Button>
      </div>
    </>
  );
};

export default SingleMain;
