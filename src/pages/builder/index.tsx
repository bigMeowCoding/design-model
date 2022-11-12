import React, { useEffect } from "react";
import { FC } from "react";

interface Props {}

const BuilderMain: FC<Props> = () => {
  class Product {
    private parts: string[] = [];

    public add(part: string) {
      this.parts.push(part);
    }

    public show() {
      for (const part of this.parts) {
        console.log(part);
      }
    }
  }

  abstract class Builder {
    public abstract buildPartA(): void;
    public abstract buildPartB(): void;
    public abstract getResult(): Product;
  }

  class ConcreteBuilderA extends Builder {
    private product = new Product();
    getResult(): Product {
      return this.product;
    }

    buildPartA(): void {
      this.product.add("部件A");
    }

    buildPartB(): void {
      this.product.add("部件B");
    }
  }

  class ConcreteBuilderB extends Builder {
    private product = new Product();
    getResult(): Product {
      return this.product;
    }

    buildPartA(): void {
      this.product.add("部件X");
    }

    buildPartB(): void {
      this.product.add("部件Y");
    }
  }
  class Director {
    public Construct(br: Builder) {
      br.buildPartA();
      br.buildPartB();
    }
  }
  useEffect(() => {
    const director = new Director();
    console.log("builderA---------");
    const builderA = new ConcreteBuilderA();
    director.Construct(builderA);
    builderA.getResult().show();

    console.log("builderB--------");
    const builderB = new ConcreteBuilderB();
    director.Construct(builderB);
    builderB.getResult().show();
  }, []);
  return <div>建造者模式</div>;
};

export default BuilderMain;
