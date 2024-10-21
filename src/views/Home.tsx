import React from "react";
import MTitle from "@components/MTitle";
import MPaper from "@components/MPaper";
import "@src/scss/Home.scss";

export default function Home() {
  const MTitleList = [
    { title: "三国人物", desc: "从184黄巾起义到280东吴灭亡" },
    { title: "游戏下载", desc: "三国志霸王的大陆" },
    // { title: "新闻资讯", desc: "Information News" },
    { title: "优势介绍", desc: "Advantage Point" },
  ];

  const maxWidth = 1200;
  const MCardList = {
    maxWidth,
    imgUrl: "/images/Card.png",
    imgTitle: "超净间",
    title: "芸辉光电科技有限公司",
    body: [
      {
        text: "深圳市芸辉光电科技有限公司成立于2020年9月，主要为科研院所、高校、军工单位提供定制产品服务。成立到现在一年，合作的客户有河北清华发展研究院、电子科技大学、中科院光电所、洛阳613、北京航空航天大学、山东大学。",
      },
      {
        text: "我们擅长于根据用户单位明确提出定制化产品需求或者是描述性的需求，进行项目分析，提出具体技术指标，设计项目方案、产品设计、交付满足用户单位要求的产品。",
      },
      {
        text: "我们主要优势在于为用户单位提供非标光机系统整体设计、制造、装调，对于电路、软件开发我们有长期合作伙伴，可成套交付产品，亦可配合用户单位协同设计。",
      },
    ],
  };

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
        <MTitle title={MTitleList[0].title} desc={MTitleList[0].desc}></MTitle>
        <div className="paper-container">
          <MPaper></MPaper>
        </div>
        <MTitle title={MTitleList[1].title} desc={MTitleList[1].desc}></MTitle>
        {/* <MTitle title={MTitleList[2].title} desc={MTitleList[2].desc}></MTitle>
        <div className="card-container2">
          <div className="card-list">
            {MCardList2.map((item, index) => (
              <div key={index} className="card-item">
                <MCard {...item}></MCard>
              </div>
            ))}
          </div>
        </div> */}
        {/* <MTitle title={MTitleList[3].title} desc={MTitleList[3].desc}></MTitle> */}
      </div>
    </div>
  );
}
