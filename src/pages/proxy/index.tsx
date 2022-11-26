import React from "react";
import { FC } from "react";

interface Props {}

const ProxyMain: FC<Props> = () => {
  const myImg = (function () {
    const imgNode = document.createElement("img");
    document.body.appendChild(imgNode);
    return {
      setSrc(src: string) {
        imgNode.src = src;
      },
    };
  })();
  const proxyImg = (function () {
    const img = new Image();
    img.onload = function () {
      myImg.setSrc(img.src)
    };
    return {
      setSrc(src: string) {
        myImg.setSrc(
          "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg-blog.csdnimg.cn%2F20210303230921265.png&refer=http%3A%2F%2Fimg-blog.csdnimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1672061095&t=1df0f6e7805b4c9d3814fd13271391f0"
        );
        img.src = src;
      },
    };
  })();
proxyImg.setSrc('https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp9.itc.cn%2Fq_70%2Fimages01%2F20211101%2F24e29503b30843ec84c416ed56b9a359.jpeg&refer=http%3A%2F%2Fp9.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1672061134&t=9f340475f1794265307412d986edbb12')
  return <h1>代理模式</h1>;
};

export default ProxyMain;
