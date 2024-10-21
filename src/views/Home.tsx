import React from "react";
import MTitle from "@components/MTitle";
// import MPaper from "@components/MPaper";
import "@src/scss/Home.scss";

export default function Home() {
  const MTitleList = [
    { title: "游戏下载", desc: "三国志霸王的大陆" },
    { title: "三国人物", desc: "从184黄巾起义到280东吴灭亡" },
  ];
  const GameList = [
    {
      pic: "images/jz.jpg",
      url: "images/bwdl156.jar",
      name: "三国志霸王的大陆",
      version: "v1.5.6",
      author: "橘子",
    },
    {
      pic: "images/END.jpg",
      url: "images/bwdl2.0.5.jar",
      name: "三国志霸王的大陆",
      version: "v2.0.5",
      author: "END",
    },
    {
      pic: "images/END.jpg",
      url: "images/bwdl2.0.6.jar",
      name: "三国志霸王的大陆2.0.6完美版",
      version: "2.0.6",
      author: "END",
    },
    {
      pic: "images/lt.jpg",
      url: "images/bwdl-zgc.jar",
      name: "三国志霸王的大陆战国策",
      version: "未知",
      author: "蜀山剑圣",
    },
    {
      pic: "images/lt.jpg",
      url: "images/bwdl-yxzz.jar",
      name: "三国志霸王的大陆玉玺战争",
      version: "1.0.7",
      author: "蜀山剑圣",
    },
    {
      pic: "images/lt.jpg",
      url: "images/bwdl-mjh.jar",
      name: "三国志霸王的大陆满江红",
      version: "1.0.2",
      author: "蜀山剑圣",
    },
    {
      pic: "images/lt.jpg",
      url: "images/bwdl-wm.jar",
      name: "三国志霸王的大陆晚明",
      version: "2.0.0",
      author: "蜀山剑圣",
    },
    {
      pic: "images/yz.jpg",
      url: "images/bwdl-50.jar",
      name: "三国志霸王的大陆五十君主",
      version: "未知",
      author: "晏舟",
    },
    {
      pic: "images/yz.jpg",
      url: "images/bwdl-qxbq3.2.9.jar",
      name: "三国志霸王的大陆群雄并起完美版",
      version: "3.2.9",
      author: "晏舟",
    },
    {
      pic: "images/yz.jpg",
      url: "images/bwdl-jqxc.jar",
      name: "三国志霸王的大陆进取西川",
      version: "未知",
      author: "晏舟",
    },
  ];

  return (
    <div className="about">
      <div className="container">
        <MTitle title={MTitleList[0].title} desc={MTitleList[0].desc}></MTitle>
        <div style={{ display: "flex", flex: 1, flexWrap: "wrap" }}>
          {GameList.map((item, index) => (
            <div key={index} className="flip-card-container">
              <div className="flip-card">
                <div className="card-front">
                  <figure>
                    <div className="img-bg"></div>
                    <img src={item.pic} alt="Brohm Lake"></img>
                    <figcaption>{item.name}</figcaption>
                  </figure>

                  <ul>
                    <li>版本：{item.version}</li>
                    <li>修改作者：{item.author}</li>
                  </ul>
                </div>

                <div className="card-back">
                  <figure>
                    <div className="img-bg"></div>
                    <img src={item.pic} alt="Brohm Lake"></img>
                  </figure>

                  <button>
                    <a href={item.url} style={{ color: "#fff" }}>
                      下载
                    </a>
                  </button>

                  <div className="design-container">
                    <span className="design design--1"></span>
                    <span className="design design--2"></span>
                    <span className="design design--3"></span>
                    <span className="design design--4"></span>
                    <span className="design design--5"></span>
                    <span className="design design--6"></span>
                    <span className="design design--7"></span>
                    <span className="design design--8"></span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* <MTitle title={MTitleList[1].title} desc={MTitleList[1].desc}></MTitle>
        <div className="paper-container">
          <MPaper></MPaper>
        </div> */}
      </div>
    </div>
  );
}
