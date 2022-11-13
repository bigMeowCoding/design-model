import { FC } from "react";
import * as React from "react";
import "./index.scss";
import { Button } from "antd";
interface Props {}

const Main: FC<Props> = () => {
  return (
    <div>
      <Button type="link" block href="/bridge">
        桥接模式
      </Button>
      <Button type="link" block href="/builder">
        建造者模式
      </Button>
      <Button type="link" block href="/single">
        单例模式
      </Button>
      <Button type="link" block href="/composition">
        组合模式
      </Button>
    </div>
  );
};

export default Main;
