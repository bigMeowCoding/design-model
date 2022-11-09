import { FC } from "react";
import * as React from "react";
import "./index.scss";
interface Props {}

const Main: FC<Props> = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <a href="/Bridge">桥接模式</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Main;
