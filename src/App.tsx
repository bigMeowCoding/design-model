import { FC } from "react";
import * as React from "react";
import { Button } from "antd";
import './App.scss'
interface Props {}

const Tree: FC<Props> = () => {
  return (
    <div>
      <Button type="primary">Primary Button</Button>
    </div>
  );
};

export default Tree;
