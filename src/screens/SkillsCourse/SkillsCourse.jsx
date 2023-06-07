import React from "react";
import { Link } from "react-router-dom";
import { DivWrapper } from "../../components/DivWrapper";
import { Group } from "../../components/Group";
import { Group19 } from "../../components/Group19";
import { GroupWrapper } from "../../components/GroupWrapper";
import "./style.css";

export const SkillsCourse = () => {
  return (
    <div className="skills-course">
      <div className="div-5">
        <h1 className="skills">SKILLS</h1>
        <div className="relevant-selected-courses">RELEVANT SELECTED COURSES</div>
        <img className="line-4" alt={"Line"} src={"/img/line-3.svg"} />
        <div className="frame-5">
          <Group19
            cStyle={{
              left: "25px",
            }}
            style={{
              left: "0",
              position: "absolute",
              top: "0",
            }}
            text="Python"
          />
          <Group19
            style={{
              left: "0",
              position: "absolute",
              top: "105px",
            }}
            text="C++"
          />
          <Group19
            cStyle={{
              left: "22px",
            }}
            style={{
              left: "0",
              position: "absolute",
              top: "210px",
            }}
            text="HTML5"
          />
          <Group19
            cStyle={{
              left: "35px",
            }}
            style={{
              left: "0",
              position: "absolute",
              top: "315px",
            }}
            text="CSS3"
          />
          <div className="overlap-11">
            <Group19
              cStyle={{
                left: "11px",
              }}
              style={{
                left: "0",
                position: "absolute",
                top: "0",
              }}
              text="Javascript"
            />
            <div className="rectangle-16" />
          </div>
          <div className="overlap-12">
            <Group19
              cStyle={{
                left: "33px",
              }}
              style={{
                left: "0",
                position: "absolute",
                top: "0",
              }}
              text="React"
            />
            <div className="rectangle-17" />
          </div>
        </div>
        <div className="frame-6">
          <Group19
            cStyle={{
              left: "38px",
            }}
            style={{
              left: "0",
              position: "absolute",
              top: "0",
            }}
            text="Shell"
          />
          <Group19
            cStyle={{
              left: "36px",
            }}
            style={{
              left: "0",
              position: "absolute",
              top: "105px",
            }}
            text="Flask"
          />
          <div className="overlap-13">
            <Group19
              cStyle={{
                left: "9px",
              }}
              style={{
                left: "0",
                position: "absolute",
                top: "0",
              }}
              text="MongoDB"
            />
            <div className="rectangle-18" />
          </div>
          <Group19
            cStyle={{
              left: "25px",
            }}
            style={{
              left: "0",
              position: "absolute",
              top: "315px",
            }}
            text="Deploy"
          />
          <div className="overlap-14">
            <Group19
              cStyle={{
                left: "24px",
              }}
              style={{
                left: "0",
                position: "absolute",
                top: "0",
              }}
              text="NumPy"
            />
            <div className="rectangle-19" />
          </div>
          <div className="overlap-15">
            <Group19
              cStyle={{
                left: "23px",
              }}
              style={{
                left: "0",
                position: "absolute",
                top: "0",
              }}
              text="MatLab"
            />
            <div className="rectangle-20" />
          </div>
        </div>
        <div className="group-13">
          <img className="group-14" alt={"Group"} src={"/img/group-25.png"} />
          <img className="group-15" alt={"Group"} src={"/img/group-26.png"} />
          <img className="group-16" alt={"Group"} src={"/img/group-27.png"} />
          <div className="group-17">
            <div className="overlap-group-9">
              <div className="text-wrapper-93">EECS442: Computer Vision</div>
            </div>
          </div>
          <div className="group-18">
            <div className="p-wrapper">
              <p className="p">EECS 376: Foundations of Computer Science</p>
            </div>
          </div>
          <div className="group-20">
            <div className="overlap-16">
              <div className="text-wrapper-94">EECS 485: Web Systems</div>
            </div>
          </div>
          <div className="group-21">
            <div className="overlap-17">
              <p className="text-wrapper-95">EECS 370: Intro to Computer Organization</p>
            </div>
          </div>
          <div className="group-22">
            <div className="group-23">
              <div className="overlap-group-10">
                <p className="text-wrapper-96">EECS 201: Computer Science Pragmatics</p>
              </div>
            </div>
          </div>
          <div className="group-24">
            <div className="group-25">
              <div className="overlap-group-11">
                <p className="text-wrapper-97">EECS 492: Introduction to Artificial Intelligence</p>
              </div>
            </div>
          </div>
        </div>
        <div className="navigation-bar-5">
          <div className="overlap-18">
            <div className="rectangle-21" />
            <Link className="mingke-dai-5" to={"/front-page"}>
              MINGKE DAI
            </Link>
            <Link className="resume-6" to={"/resumezhong"}>
              RESUME
            </Link>
            <div className="programming-menu-3">
              <Group
                style={{
                  left: "-2px",
                  position: "relative",
                  top: "-1px",
                }}
              />
            </div>
            <div className="design-menu-4">
              <GroupWrapper
                overlapGroupStyle={{
                  backgroundColor: "#e6d892",
                }}
                style={{
                  left: "-1px",
                  position: "relative",
                  top: "-1px",
                }}
              />
            </div>
            <div className="research-menu-4">
              <DivWrapper
                overlapGroupStyle={{
                  backgroundColor: "#e6d892",
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
