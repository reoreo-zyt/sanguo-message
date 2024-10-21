import React from "react";
import MTitle from "@components/MTitle";
import MPaper from "@components/MPaper";
import "@src/scss/Home.scss";

export default function Home() {
  const MTitleList = [
    { title: "游戏下载", desc: "三国志霸王的大陆" },
    { title: "三国人物", desc: "从184黄巾起义到280东吴灭亡" },
  ];

  return (
    <div className="about">
      <div className="container">
        <MTitle title={MTitleList[0].title} desc={MTitleList[0].desc}></MTitle>
        <div style={{ display: "flex", flex: 1 }}>
          <div className="flip-card-container">
            <div className="flip-card">
              <div className="card-front">
                <figure>
                  <div className="img-bg"></div>
                  <img src="images/jz.jpg" alt="Brohm Lake"></img>
                  <figcaption>三国志霸王的大陆</figcaption>
                </figure>

                <ul>
                  <li>版本：v1.5.6</li>
                </ul>
              </div>

              <div className="card-back">
                <figure>
                  <div className="img-bg"></div>
                  <img src="images/jz.jpg" alt="Brohm Lake"></img>
                </figure>

                <button>
                  <a href={"bwdl156.jar"} style={{ color: "#fff" }}>
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
          <div className="flip-card-container">
            <div className="flip-card">
              <div className="card-front">
                <figure>
                  <div className="img-bg"></div>
                  <img src="images/END.jpg" alt="Brohm Lake"></img>
                  <figcaption>三国志霸王的大陆</figcaption>
                </figure>

                <ul>
                  <li>版本：v2.0.5</li>
                </ul>
              </div>

              <div className="card-back">
                <figure>
                  <div className="img-bg"></div>
                  <img src="images/END.jpg" alt="Brohm Lake"></img>
                </figure>

                <button>
                  <a href={"bwdl2.0.5.jar"} style={{ color: "#fff" }}>
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
          <div className="flip-card-container">
            <div className="flip-card">
              <div className="card-front">
                <figure>
                  <div className="img-bg"></div>
                  <img src="images/lt.jpg" alt="Brohm Lake"></img>
                  <figcaption>霸王的大陆战国策</figcaption>
                </figure>

                <ul>
                  <li>版本：暂无</li>
                </ul>
              </div>

              <div className="card-back">
                <figure>
                  <div className="img-bg"></div>
                  <img src="images/lt.jpg" alt="Brohm Lake"></img>
                </figure>

                <button>
                  <a href={"bwdl-zgc.jar"} style={{ color: "#fff" }}>
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
        </div>
        <MTitle title={MTitleList[1].title} desc={MTitleList[1].desc}></MTitle>
        <div className="paper-container">
          <MPaper></MPaper>
        </div>
      </div>
    </div>
  );
}
