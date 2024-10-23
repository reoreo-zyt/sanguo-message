import React from "react";
import MTitle from "@components/MTitle";
import MPaper from "@components/MPaper";
import "@src/scss/Home.scss";

export default function Home() {
  const MTitleList = [
    { title: "游戏下载", desc: "三国志霸王的大陆JAVA版本下载" },
    { title: "三国人物", desc: "从184黄巾起义到280东吴灭亡" },
  ];

  return (
    <div className="about">
      <div className="container">
        <MTitle title={MTitleList[1].title} desc={MTitleList[1].desc}></MTitle>
        <div className="paper-container">
          <MPaper></MPaper>
        </div>
      </div>
    </div>
  );
}
