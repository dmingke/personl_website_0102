import React from "react";
import { ButtonWrapper } from "../../components/ButtonWrapper";
import { NavigationBar } from "../../components/NavigationBar";
import "./style.css";

export const FrontPage = () => {
  return (
    <div className="front-page">
      <div className="overlap-wrapper">
        <div className="overlap-5">
          <div className="rectangle-7" />
          <div className="group-32">
            <div className="flex-container-4">
              <div className="text-15">
                <span className="text-wrapper-40">Welcome to my website</span>
                <span className="text-wrapper-41">
                  ,<br />
                </span>
              </div>
              <div className="text-16">
                <span className="text-wrapper-42">I’m Mingke Dai</span>
                <span className="text-wrapper-43">&nbsp;</span>
                <span className="text-wrapper-44">*Cynthia Lee is my preferred name</span>
              </div>
            </div>
            <p className="a-senior-student-at">
              A senior student at the University of Michigan, specializing in Psychology and Cognitive Science. My
              passion for understanding human cognition and behavior is matched only by my love for technology. With my
              minors in Computer Science and UX Design, I&#39;ve been able to merge these fascinating fields, creating a
              unique perspective that blends human understanding with technical prowess.
            </p>
            <img className="ellipse-16" alt="Ellipse" src="/img/ellipse-1.png" />
          </div>
          <ButtonWrapper
            style={{
              height: "52px",
              left: "48%",
              position: "absolute",
              top: "594px",
              width: "175px",
            }}
            text="See My Resume"
            to="/resumezhong"
            viewMoreStyle={{
              marginBottom: "unset",
              marginLeft: "unset",
              marginRight: "unset",
              marginTop: "unset",
            }}
          />
          <div className="frame-9">
            <div className="group-33">
              <ButtonWrapper
                style={{
                  height: "52px",
                  left: "989px",
                  position: "absolute",
                  top: "886px",
                  width: "247px",
                }}
                text="See My UX/UI Projects"
                to="/1cademy-overview"
                viewMoreStyle={{
                  marginBottom: "unset",
                  marginLeft: "unset",
                  marginRight: "unset",
                  marginTop: "unset",
                }}
              />
              <ButtonWrapper
                style={{
                  height: "52px",
                  left: "973px",
                  position: "absolute",
                  top: "976px",
                  width: "290px",
                }}
                text="See My Development Projects"
                to="/programming-original"
                viewMoreStyle={{
                  marginBottom: "unset",
                  marginLeft: "-5.50px",
                  marginRight: "-5.50px",
                  marginTop: "unset",
                }}
              />
              <img className="rectangle-8" alt="Rectangle" src="/img/rectangle-50.png" />
              <div className="group-34">
                <img className="screen-shot-4" alt="Screen shot" src="/img/screen-shot-2023-06-10-at-12-13-1.png" />
                <img className="screen-shot-5" alt="Screen shot" src="/img/screen-shot-2023-06-10-at-12-07-1.png" />
              </div>
              <h1 className="h-1">My Work</h1>
              <div className="flex-container-5">
                <div className="text-17">
                  <span className="text-wrapper-45">
                    Completed 10+ projects in various fields.
                    <br />
                  </span>
                </div>
                <div className="text-18">
                  <span className="text-wrapper-46">
                    Experience with multiple front-end and back-end languages from low-fi sketch and wireframe to fully
                    developed websites or mobile applications.
                    <br />
                  </span>
                </div>
                <div className="text-19">
                  <span className="text-wrapper-47">
                    My expertise in Figma, Adobe Illustrator for Design, Python, C++, JavaScript for software
                    development, React, HTML5, and CSS for front-end development.
                  </span>
                </div>
              </div>
            </div>
            <div className="group-35">
              <div className="overlap-6">
                <img className="rectangle-9" alt="Rectangle" src="/img/rectangle-2.png" />
                <div className="group-36">
                  <div className="overlap-group-5">
                    <p className="about-lines-of">
                      about 10000 lines of coding experience, CSS3, HTML5, JavaScript, <br />
                      React, SQL, Python, Shell Scripting, C++...
                    </p>
                    <div className="text-wrapper-48">Programming</div>
                    <ButtonWrapper
                      style={{
                        left: "120px",
                        position: "absolute",
                        top: "250px",
                      }}
                      text="View More"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="group-37">
              <div className="overlap-7">
                <img className="screen-shot-6" alt="Screen shot" src="/img/screen-shot-2023-05-27-at-7-27-1.png" />
                <img className="screen-shot-7" alt="Screen shot" src="/img/screen-shot-2023-05-27-at-7-27-2.png" />
                <img className="group-38" alt="Group" src="/img/group-3.png" />
              </div>
            </div>
            <div className="group-39">
              <div className="overlap-8">
                <img className="rectangle-10" alt="Rectangle" src="/img/rectangle-6.png" />
                <img className="rectangle-11" alt="Rectangle" src="/img/rectangle-7.png" />
                <img className="group-40" alt="Group" src="/img/group-6.png" />
              </div>
            </div>
            <div className="group-41">
              <div className="frame-10">
                <div className="group-42">
                  <div className="text-wrapper-49">Passion is everything!😍😍</div>
                  <p className="text-wrapper-50">
                    I am deeply passionate about understanding human behavior and applying this knowledge to create
                    meaningful user experiences. My goal is to pursue a career that combines my expertise in psychology,
                    computer science, and design to develop innovative solutions.
                  </p>
                </div>
                <div className="group-43">
                  <div className="text-wrapper-51">Always be learning.📚💗</div>
                  <div className="flex-container-6">
                    <div className="text-20">
                      <span className="text-wrapper-52">
                        Interdisciplinary Approach: Combining psychological understanding with a strong foundation in
                        Computer Science and UX Design.
                        <br />
                      </span>
                    </div>
                    <div className="text-21">
                      <span className="text-wrapper-53">
                        Technical Skills: Proficient in programming languages, with a particular interest in Python and
                        Java.
                        <br />
                      </span>
                    </div>
                    <div className="text-22">
                      <span className="text-wrapper-54">Design Expertise</span>
                      <span className="text-wrapper-55">:</span>
                      <span className="text-wrapper-56">
                        {" "}
                        Skilled in UX/UI design principles and software such as Adobe XD and Sketch.
                        <br />
                      </span>
                    </div>
                    <div className="text-23">
                      <span className="text-wrapper-57">
                        Research Experience: Have led and participated in numerous research projects, applying both
                        quantitative and qualitative methods.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="group-44">
                  <div className="flex-container-7">
                    <div className="text-24">
                      <span className="text-wrapper-58">
                        Problem-Solving Ability: Able to tackle complex problems, devising innovative and effective
                        solutions.
                        <br />
                      </span>
                    </div>
                    <div className="text-25">
                      <span className="text-wrapper-59">
                        Team Player: Experienced working in diverse teams and contributing positively to achieve shared
                        goals.
                      </span>
                    </div>
                  </div>
                  <p className="text-wrapper-60">Collaboration is always the solution.🤝👊</p>
                </div>
              </div>
              <div className="text-wrapper-61">About me</div>
            </div>
          </div>
        </div>
      </div>
      <NavigationBar
        style={{
          left: "0",
          position: "absolute",
          top: "0",
        }}
        to="/front-page"
        to1="/resume"
        to2="/programming-original"
        to3="/design"
        to4="/research"
      />
    </div>
  );
};
