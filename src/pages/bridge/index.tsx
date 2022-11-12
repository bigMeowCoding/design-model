import React from "react";
import { FC } from "react";

interface Props {}

abstract class MobileSoftWare {
  abstract run(): void;
}

class MobileGame extends MobileSoftWare {
  run(): void {
    console.log("运行游戏");
  }
}

class AddressList extends MobileSoftWare {
  run(): void {
    console.log("打开通讯录");
  }
}

abstract class Brand {
  protected softWare: MobileSoftWare | undefined;
  public setSoftWare(softWare: MobileSoftWare) {
    this.softWare = softWare;
  }
  abstract run(): void;
}

class BrandN extends Brand {
  public run() {
    console.log("品牌N启动软件");
    this.softWare?.run();
  }
}

class BrandM extends Brand {
  public run() {
    console.log("品牌m启动软件");
    this.softWare?.run();
  }
}

const BridgeMain: FC<Props> = () => {
  const n = new BrandN();
  n.setSoftWare(new MobileGame());
  n.run();
  n.setSoftWare(new AddressList());
  n.run();
  const m = new BrandM();
  m.setSoftWare(new MobileGame());
  m.run();
  m.setSoftWare(new AddressList());
  m.run();
  return <div>桥接模式</div>;
};

export default BridgeMain;
