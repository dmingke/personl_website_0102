import React from "react";
import { ButtonWrapper } from "../../components/ButtonWrapper";
import { NavigationBar } from "../../components/NavigationBar";
import "./style.css";

export const FrontPage = () => {
  return (
    <div className="front-page">
      <div className="div-3">
        <div className="overlap-2">
          <div className="rectangle-4" />
          <div className="div-wrapper">
            <div className="overlap-group-3">
              <img className="img" alt="Rectangle" src="/img/rectangle-6.png" />
              <img className="rectangle-7" alt="Rectangle" src="/img/rectangle-7.png" />
              <img className="group-5" alt="Group" src="/img/group-6.png" />
            </div>
          </div>
          <div className="overlap-wrapper">
            <div className="overlap-3">
              <img className="screen-shot" alt="Screen shot" src="/img/screen-shot-2023-05-27-at-7-27-1.png" />
              <img className="screen-shot-2" alt="Screen shot" src="/img/screen-shot-2023-05-27-at-7-27-2.png" />
              <img className="group-6" alt="Group" src="/img/group-3.png" />
            </div>
          </div>
          <div className="group-7">
            <div className="overlap-4">
              <img className="rectangle-9" alt="Rectangle" src="/img/rectangle-2.png" />
              <div className="group-8">
                <div className="overlap-group-4">
                  <p className="about-lines">
                    about 10000 lines coding experience, CSS3, HTML5, JavaScript, <br />
                    React, SQL, Python, Shell Scripting, C++... <br />
                    <strong>Main work</strong>: Search Engine
                  </p>
                  <div className="text-wrapper-39">Programming</div>
                  <ButtonWrapper
                    style={{
                      left: "120px",
                      position: "absolute",
                      top: "267px",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="group-9">
            <div className="flex-container-6">
              <div className="text-28">
                <span className="text-wrapper-40">
                  Welcome to my website,
                  <br />
                </span>
              </div>
              <div className="text-29">
                <span className="text-wrapper-41">I’m </span>
                <span className="text-wrapper-42">Catherine Lee </span>
                <span className="text-wrapper-43">*Mingke Dai is my official Chinese name</span>
              </div>
            </div>
            <p className="a-senior-student-at">
              A senior student at the University of Michigan, specializing in Psychology and Cognitive Science. My
              passion for understanding human cognition and behavior is matched only by my love for technology. With my
              minors in Computer Science and UX Design, I&#39;ve been able to merge these fascinating fields, creating a
              unique perspective that blends human understanding with technical prowess.
            </p>
            <img className="ellipses" alt="Ellipse" src="/img/ellipse-1.png" />
          </div>
          <ButtonWrapper
            style={{
              height: "52px",
              left: "544px",
              position: "absolute",
              top: "594px",
              width: "175px",
            }}
            text="View My Resume"
            to="/resumezhong"
            viewMoreStyle={{
              marginBottom: "unset",
              marginLeft: "unset",
              marginRight: "unset",
              marginTop: "unset",
            }}
          />
          <NavigationBar
            style={{
              left: "0",
              position: "absolute",
              top: "0",
            }}
            to="/front-page"
            to1="/resumezhong"
            to2="/programming-original"
            to3="/design"
            to4="/research"
          />
        </div>
        <div className="overlap-5">
          <div className="frame-5">
            <div className="group-10">
              <div className="text-wrapper-44">Passion is everything!😍😍</div>
              <p className="p">
                I am deeply passionate about understanding human behavior and applying this knowledge to create
                meaningful user experiences. My goal is to pursue a career that combines my expertise in psychology,
                computer science, and design to develop innovative solutions.
              </p>
            </div>
            <div className="group-11">
              <div className="text-wrapper-45">Always be learning.📚💗</div>
              <div className="flex-container-7">
                <div className="text-30">
                  <span className="text-wrapper-46">
                    Interdisciplinary Approach: Combining psychological understanding with a strong foundation in
                    Computer Science and UX Design.
                    <br />
                  </span>
                </div>
                <div className="text-31">
                  <span className="text-wrapper-47">
                    Technical Skills: Proficient in programming languages, with a particular interest in Python and
                    Java.
                    <br />
                  </span>
                </div>
                <div className="text-32">
                  <span className="text-wrapper-48">Design Expertise</span>
                  <span className="text-wrapper-49">:</span>
                  <span className="text-wrapper-50">
                    {" "}
                    Skilled in UX/UI design principles and software such as Adobe XD and Sketch.
                    <br />
                  </span>
                </div>
                <div className="text-33">
                  <span className="text-wrapper-51">
                    Research Experience: Have led and participated in numerous research projects, applying both
                    quantitative and qualitative methods.
                  </span>
                </div>
              </div>
            </div>
            <div className="group-12">
              <div className="flex-container-8">
                <div className="text-34">
                  <span className="text-wrapper-52">
                    Problem-Solving Ability: Able to tackle complex problems, devising innovative and effective
                    solutions.
                    <br />
                  </span>
                </div>
                <div className="text-35">
                  <span className="text-wrapper-53">
                    Team Player: Experienced working in diverse teams and contributing positively to achieve shared
                    goals.
                  </span>
                </div>
              </div>
              <p className="text-wrapper-54">Collaboration is always the solution.🤝👊</p>
            </div>
          </div>
          <h1 className="text-wrapper-55">About me</h1>
        </div>
      </div>
    </div>
  );
};
