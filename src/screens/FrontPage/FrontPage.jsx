import React from "react";
import { Link } from "react-router-dom";
import { ButtonWrapper } from "../../components/ButtonWrapper";
import { DivWrapper } from "../../components/DivWrapper";
import { Group } from "../../components/Group";
import { GroupWrapper } from "../../components/GroupWrapper";
import "./style.css";

export const FrontPage = () => {
  return (
    <div className="front-page">
      <div className="div-3">
        <div className="overlap-3">
          <div className="rectangle-5" />
          <div className="rectangle-6" />
          <div className="rectangle-7" />
          <div className="text-28" />
          <div className="flex-container-6">
            <div className="text-29">
              <span className="text-wrapper-40">
                Welcome to my website,
                <br />
              </span>
            </div>
            <div className="text-30">
              <span className="text-wrapper-41">I’m </span>
              <span className="text-wrapper-42">Catherine Lee </span>
              <span className="text-wrapper-43">
                *Mingke Dai is my official Chinese name
                <br />
              </span>
            </div>
            <div className="text-31">
              <span className="text-wrapper-44">
                a senior Psychology and Cognitive Science student at the University of Michigan. I specialize in
                Psychology and Cognitive Science and have developed a strong foundation in Computer Science and UX
                Design through my minors. <br />
              </span>
            </div>
            <div className="text-32">
              <span className="text-wrapper-45">
                I am deeply passionate about understanding human behavior and applying this knowledge to create
                meaningful user experiences. My goal is to pursue a career that combines my expertise in psychology,
                computer science, and design to develop innovative solutions.
              </span>
            </div>
          </div>
          <img className="ellipse" alt={"Ellipse"} src={"/img/ellipse-1.svg"} />
          <div className="overlap-wrapper">
            <div className="overlap-4">
              <img className="rectangle-8" alt={"Rectangle"} src={"/img/rectangle-2.png"} />
              <div className="group-6">
                <div className="overlap-group-6">
                  <p className="about-lines-coding-experience-javascript-react-SQL-python-shell-scripting-distributed-systems-like-mapreduce-c-flask-git-AWS">
                    about 10000 lines coding experience, CSS3, HTML5, JavaScript, <br />
                    React, SQL, Python, Shell Scripting, Distributed systems like MapReduce, C++, Flask, Git, AWS
                  </p>
                  <h1 className="text-wrapper-46">Programming</h1>
                  <ButtonWrapper
                    style={{
                      left: "125px",
                      position: "absolute",
                      top: "267px",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="group-7">
            <div className="overlap-5">
              <div className="rectangle-9" />
              <div className="group-8">
                <div className="overlap-group-7">
                  <img className="rectangle-10" alt={"Rectangle"} src={"/img/rectangle-6.png"} />
                  <img className="rectangle-11" alt={"Rectangle"} src={"/img/rectangle-7.png"} />
                  <img className="group-9" alt={"Group"} src={"/img/group-6.png"} />
                </div>
              </div>
            </div>
          </div>
          <ButtonWrapper
            style={{
              height: "52px",
              left: "555px",
              position: "absolute",
              top: "493px",
              width: "175px",
            }}
            text="View My Resume"
            to="/resumezhong"
            viewMoreStyle={{
              marginTop: "unset",
            }}
          />
          <div className="group-10">
            <div className="overlap-6">
              <img
                className="screen-shot-at"
                alt={"Screen shot at"}
                src={"/img/screen-shot-2023-05-27-at-7-27-1.png"}
              />
              <img
                className="screen-shot-at-2"
                alt={"Screen shot at"}
                src={"/img/screen-shot-2023-05-27-at-7-27-2.png"}
              />
              <img className="group-11" alt={"Group"} src={"/img/group-3.png"} />
            </div>
          </div>
        </div>
        <div className="navigation-bar-2">
          <div className="overlap-7">
            <div className="rectangle-12" />
            <Link className="mingke-dai-2" to={"/front-page"}>
              MINGKE DAI
            </Link>
            <Link className="resume-2" to={"/resumezhong"}>
              RESUME
            </Link>
            <div className="group-45-wrapper">
              <Group
                polygonStyle={{
                  height: "17px",
                  left: "191px",
                  top: "6px",
                  width: "17px",
                }}
                style={{
                  left: "-2px",
                  position: "relative",
                  top: "-1px",
                }}
              />
            </div>
            <div className="group-43-wrapper">
              <GroupWrapper
                overlapGroupStyle={{
                  backgroundColor: "#e6d892",
                }}
                polygonStyle={{
                  height: "17px",
                  left: "93px",
                  top: "6px",
                  width: "17px",
                }}
                style={{
                  left: "-1px",
                  position: "relative",
                  top: "-1px",
                }}
              />
            </div>
            <div className="group-42-wrapper">
              <DivWrapper
                overlapGroupStyle={{
                  backgroundColor: "#e6d892",
                }}
                polygonStyle={{
                  height: "17px",
                  left: "147px",
                  top: "30px",
                  width: "17px",
                }}
                style={{
                  left: "-1px",
                  position: "relative",
                  top: "-1px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
