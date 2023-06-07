import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { DivWrapper } from "../../components/DivWrapper";
import { Group } from "../../components/Group";
import { GroupWrapper } from "../../components/GroupWrapper";
import "./style.css";

export const Resume = () => {
  return (
    <div className="resume">
      <div className="div-2">
        <div className="navigation-bar-wrapper">
          <div className="navigation-bar">
            <div className="overlap-2">
              <div className="rectangle-4" />
              <Link className="mingke-dai" to={"/front-page"}>
                MINGKE DAI
              </Link>
              <Link className="text-wrapper-2" to={"/resumezhong"}>
                RESUME
              </Link>
              <div className="programming-menu">
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
              <div className="design-menu">
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
              <div className="research-menu">
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
        <Button
          style={{
            left: "1075px",
            position: "absolute",
            top: "110px",
          }}
        />
        <div className="frame-3">
          <div className="flex-container">
            <div className="text">
              <span className="span">
                MingkeDai
                <br />
              </span>
            </div>
            <div className="text-2">
              <a href={"mailto:daimingketina@gmail.com"} rel={"noopener noreferrer"} target={"_blank"}>
                <span className="text-wrapper-3">daimingketina@gmail.com</span>
              </a>
              <span className="text-wrapper-4"> | 7344964113</span>
            </div>
          </div>
          <div className="group-3">
            <h1 className="h-1">Education</h1>
            <div className="flex-container-2">
              <div className="span-wrapper">
                <span className="text-wrapper-5">
                  University of Michigan, Ann Arbor, Michigan                        &nbsp;&nbsp;&nbsp;&nbsp; 
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  Expected in 07/2023
                  <br />
                </span>
              </div>
              <div className="text-3">
                <span className="text-wrapper-6">
                  Bachelor of Science in Psychology &amp; Cognitive
                  Science                                                                               
                  <br />
                </span>
              </div>
              <div className="text-4">
                <span className="text-wrapper-7">
                  Minor in Computer Science
                  <br />
                </span>
              </div>
              <div className="text-5">
                <span className="text-wrapper-8">Major GPA: 3.87/4.0; Cumulative GPA: 3.6/4.0</span>
              </div>
            </div>
          </div>
          <div className="group-4">
            <div className="group-5">
              <div className="text-wrapper-9">Experience</div>
              <div className="flex-container-3">
                <div className="text-6">
                  <span className="text-wrapper-10">User Experience Specialist &amp; Team Leader </span>
                  <span className="text-wrapper-11">
                    {"                          "}&nbsp;&nbsp;
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                  </span>
                  <span className="text-wrapper-12">
                    Jan. 2020 – April 2023
                    <br />
                  </span>
                </div>
                <div className="text-7">
                  <a href={"http://1cademy.com"} rel={"noopener noreferrer"} target={"_blank"}>
                    <span className="text-wrapper-13">1Cademy</span>
                  </a>
                  <span className="text-wrapper-14">, School of Information, University of Michigan </span>
                  <span className="text-wrapper-15">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|Ann
                    Arbor, MI
                    <br />
                  </span>
                </div>
                <div className="text-8">
                  <span className="text-wrapper-16">
                    Led a 10-person team, conducted user needs analysis via card sorting, usability tests, Google Form
                    surveys, and interviews on over 500 Wolverine Access users, a UM student webpage.
                    <br />
                  </span>
                </div>
                <div className="text-9">
                  <span className="text-wrapper-17">
                    Acquired user feedback from 100+ participants on self-developed 1cademy.com through surveys and
                    contextual inquiry, and other UX methods.
                    <br />
                  </span>
                </div>
                <div className="text-10">
                  <span className="text-wrapper-18">
                    Analyzed qualitative data collected mainly using affinity diagramming via Miro.com.
                    <br />
                  </span>
                </div>
                <div className="text-11">
                  <span className="text-wrapper-19">
                    Created website prototype, identity guide, user flow, information architecture, and style guide on
                    Figma and Adobe Illustrator.
                    <br />
                  </span>
                </div>
                <div className="text-12">
                  <span className="text-wrapper-20">
                    Collaborated with the Programming team to construct 1cademy.com using HTML, CSS3, Flask, and React
                    based on established prototypes and style guides.
                    <br />
                  </span>
                </div>
                <div className="text-13">
                  <span className="text-wrapper-21">
                    Employed heuristic principles for system evaluations on 1cademy, incorporating heuristic evaluation,
                    cognitive walkthrough, and competitive analysis.
                    <br />
                  </span>
                </div>
                <div className="text-14">
                  <span className="text-wrapper-22">
                    Enhanced usability of 1cademy and UM student webpages, evidenced by decreased user time to find
                    specific buttons and pages, as confirmed by usability tests.
                  </span>
                </div>
              </div>
            </div>
            <div className="flex-container-4">
              <div className="text-15">
                <span className="text-wrapper-23">Research Assistant </span>
                <span className="text-wrapper-24">
                  &nbsp;&nbsp;   
                                                                                           &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                </span>
                <span className="text-wrapper-25"> August 2019 – Dec. 2020</span>
                <span className="text-wrapper-26">
                  {" "}
                  <br />
                </span>
              </div>
              <div className="text-16">
                <span className="text-wrapper-27">Organizational and Industrial Lab, University of Michigan</span>
                <span className="text-wrapper-28">
                  {"                                      "}&nbsp;&nbsp; |Ann Arbor, MI
                  <br />
                </span>
              </div>
              <div className="text-17">
                <span className="text-wrapper-29">
                  Analyzed research data with SPSS and R, produced over 4 visual reports collaborating with project
                  leads.
                  <br />
                </span>
              </div>
              <div className="text-18">
                <span className="text-wrapper-30">
                  Assisted project leads in crafting 40+ regulatory documents and presentations to highlight research
                  findings.
                  <br />
                </span>
              </div>
              <div className="text-19">
                <span className="text-wrapper-31">
                  Co-developed experimental websites and Qualtrics questionnaires with 3 team leads, gathering data from
                  200+ MTurk participants.
                  <br />
                </span>
              </div>
              <div className="text-20">
                <span className="text-wrapper-32">
                  Ensured data integrity by meticulously auditing incoming data for accuracy, identifying, and
                  rectifying issues.
                  <br />
                </span>
              </div>
              <div className="text-21">
                <span className="text-wrapper-33">
                  Presented research results at the Undergraduate Research Festival, effectively communicating findings
                  to a broad audience.
                </span>
              </div>
            </div>
          </div>
          <div className="flex-container-5">
            <div className="text-22">
              <span className="text-wrapper-34">
                Activities &amp; Skills
                <br />
              </span>
            </div>
            <div className="text-23">
              <span className="text-wrapper-35">
                First Generation Honors Association. Event Coordinator, Member
                <br />
              </span>
            </div>
            <div className="text-24">
              <span className="text-wrapper-36">
                UM_CSSA, Minister of Propaganda Department. 
                <br />
              </span>
            </div>
            <div className="text-25">
              <span className="text-wrapper-37">
                Mandarin, English, Japanese, Fluent
                <br />
              </span>
            </div>
            <div className="text-26">
              <span className="text-wrapper-38">
                Python, CSS3, HTML5, JavaScript, React, C++, SPSS, R, Photoshop, Illustrator, Figma, Shell scripting,
                Git, familiar
                <br />
              </span>
            </div>
            <div className="text-27">
              <span className="text-wrapper-39">Around 10000 lines coding experience</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
