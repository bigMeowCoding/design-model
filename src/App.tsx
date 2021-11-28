import { FC } from "react";
import * as React from "react";
import "./App.scss";
import FlyWeight from "./pages/flyweight";
interface Props {}

const Tree: FC<Props> = () => {
  return (
    <div>
      <FlyWeight />
    </div>
  );
};

export default Tree;
