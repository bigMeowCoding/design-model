import { FC } from "react";
import * as React from "react";
import "./index.scss";
import { Button } from "antd";
interface Props {}

const Main: FC<Props> = () => {
  return (
    <div>
      <Button type="link" block href="/Bridge">
        桥接模式
      </Button>
      <Button type="link" block href="/Builder">
        建造者模式
      </Button>
    </div>
  );
};

export default Main;
