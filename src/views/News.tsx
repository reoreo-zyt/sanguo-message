import React from "react";
import MTitle from "@components/MTitle";
import MCard from "@components/MCard";
import "@src/scss/News.scss";

export default function News() {
  const MTitleList = [
    { title: "新闻资讯", desc: "Information News" },
    { title: "行业动态", desc: "Industry News" },
  ];

  const maxWidth2 = 320;

  const MCardList2 = [
    {
      maxWidth: maxWidth2,
      imgUrl: "/images/message1.jpg",
      imgTitle: "200kw发电机组的防雷保护措施方法",
      title: "200kw发电机组的防雷保护措施方法",
      body: [
        {
          text: "单机容量为300～1500kw的直配电机，采用9的保护接线进行过电压保护。",
        },
      ],
      isShowButton: false,
      isCardMedia: true,
    },
    {
      maxWidth: maxWidth2,
      imgUrl: "/images/message2.jpg",
      imgTitle: "我国研制出世界最大容量组装式变压器",
      title: "我国研制出世界最大容量组装式变压器",
      body: [
        {
          text: "特高压现场组装式变研制领域再获大突破。我国研制出世界最大容量现场组装式变压器",
        },
      ],
      isShowButton: false,
      isCardMedia: true,
    },
    {
      maxWidth: maxWidth2,
      imgUrl: "/images/message3.jpg",
      imgTitle: "低压电器行业对接新能源转型机遇",
      title: "低压电器行业对接新能源转型机遇",
      body: [
        {
          text: "去年末发布的《可再生能源发展“十三五”规划》，为新能源发展勾画诱人蓝图。",
        },
      ],
      isShowButton: false,
      isCardMedia: true,
    },
    {
      maxWidth: maxWidth2,
      imgUrl: "/images/message4.jpg",
      imgTitle: "2017年我国低压电器市场发展趋势分析",
      title: "2017年我国低压电器市场发展趋势分析",
      body: [
        {
          text: "2015年我国GDP增速第一次跌破7%，2016年以来我国经济开始逐步企稳。",
        },
      ],
      isShowButton: false,
      isCardMedia: true,
    },
  ];

  return (
    <div className="about">
      <div className="container">
        {/* <MTitle {...MTitleList[0]}></MTitle> */}
        <MTitle {...MTitleList[1]}></MTitle>
        <div className="card-container2">
          <div className="card-list">
            {MCardList2.map((item, index) => (
              <div key={index} className="card-item">
                <MCard {...item}></MCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
