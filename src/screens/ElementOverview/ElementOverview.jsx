import React from "react";
import { AppBarLink } from "../../components/AppBarLink";
import { Button } from "../../components/Button";
import { Component } from "../../components/Component";
import { DivWrapper } from "../../components/DivWrapper";
import { Frame } from "../../components/Frame";
import { Group } from "../../components/Group";
import { NavigationBar } from "../../components/NavigationBar";
import { Primary } from "../../components/Primary";
import { Principles } from "../../components/Principles";
import { Secondary } from "../../components/Secondary";
import { Severity } from "../../components/Severity";
import { Severity1 } from "../../components/Severity1";
import { SeverityWrapper } from "../../components/SeverityWrapper";
import { Timeline } from "../../components/Timeline";
import { Title } from "../../components/Title";
import "./style.css";

const data = [
  { id: "1", name: "Overview" },
  { id: "2", name: "UI/UX Design" },
  { id: "3", name: "UX Research" },
  { id: "4", name: "Others" }
];

export const ElementOverview = () => {
  return (
    <div className="element-overview">
      <div className="element-cademy-overview">
        <div
          className="overlap-2"
          style={{
            backgroundImage: "url(/img/screen-shot-2023-06-19-at-6-17-1.png)",
          }}
        >
          <div className="rectangle-4" />
          <div className="frame-4">
            <h1 className="h-1">1Cademy Project</h1>
            <p className="a-collaborating">
              <span className="span">
                A Collaborating learning community in Multiple Fields of Study
                <br />
                <br />
              </span>
              <a href="https://1cademy.com" rel="noopener noreferrer" target="_blank">
                <span className="text-wrapper-2">Visit the website</span>
              </a>
            </p>
          </div>
          <div className="group-2">
            <Component
              style={{
                left: "0",
                position: "absolute",
                top: "0",
              }}
              text="Tasks Overview"
              text1="Conducting experiment sessions with participants, Web development, UI design, UX research, Reading and adding nodes to 1Cademy notebooks, Weekly meetings, Discussing research and web design, and so on"
              usabilityNeedsAndStyle={{
                fontSize: "20px",
                lineHeight: "24px",
              }}
            />
            <Component
              style={{
                left: "554px",
                position: "absolute",
                top: "198px",
              }}
              text="Team"
              text1="50 People Team"
              usabilityNeedsAndStyle={{
                whiteSpace: "nowrap",
                width: "unset",
              }}
            />
            <Component
              style={{
                left: "0",
                position: "absolute",
                top: "228px",
                width: "470px",
              }}
              text="Role"
              text1={
                <>
                  UX Researcher
                  <br />
                  UI/UX designer
                  <br />
                  Cognitive psychological research assistant
                  <br />
                  Coordinator of design, research, and developing teams
                </>
              }
              usabilityNeedsAndStyle={{
                lineHeight: "24px",
                width: "470px",
              }}
            />
            <Component
              style={{
                left: "554px",
                position: "absolute",
                top: "343px",
              }}
              text="Timeline"
              text1="2020.1 - 2023.4"
              usabilityNeedsAndStyle={{
                whiteSpace: "nowrap",
                width: "unset",
              }}
            />
            <Component
              style={{
                left: "554px",
                position: "absolute",
                top: "0",
                width: "355px",
              }}
              text="Purpose"
              text1="Publishing research papers, Improving 1Cademy for higher usability and efficiency, Facilitating research progress, Adding new knowledge nodes and learning in the 1Cademy community"
              usabilityNeedsAndStyle={{
                fontSize: "20px",
                lineHeight: "24px",
                width: "355px",
              }}
            />
          </div>
        </div>
        <div className="frame-5">
          <div className="group-3">
            <div className="ellipse-2" />
            <div className="ellipse-3" />
            <div className="ellipse-4" />
            <div className="ellipse-5" />
            <img className="line" alt="Line" src="/img/line-10.png" />
            <img className="img" alt="Line" src="/img/line-16.png" />
            <img className="line-2" alt="Line" src="/img/line-21.png" />
            <img className="line-3" alt="Line" src="/img/line-20.png" />
            <div id="1" className="frame-6">
              <div className="text-wrapper-3">Overview</div>
              <div className="frame-wrapper">
                <div className="frame-7">
                  <div className="group-4">
                    <p className="UI-UX-design-UX">Ui/ux Design &amp; Ux Research</p>
                    <p className="as-a-member-of">
                      As a member of 1Cademy,&nbsp;&nbsp;at first, I focused on UX research and UI design. I
                      collaborated with the UX research team and UI design team to develop 1Cademy multiple websites
                      (experimental site to perform remote experiment sessions, 1cademy.com AKA 1cademy main page for
                      presenting all key information of 1Cademy, and 1Cademy notebooks for learning and adding knowledge
                      nodes) on Figma and improve their usability and accessibility.&nbsp;&nbsp;We divided a part of the
                      jobs to each person and make suggestions for each other’s design in the weekly meeting. <br />
                      Later on, after gradually perfecting PC view, I also helped to design a low-fidelity prototype of
                      the mobile view of the website and perform UX research methods, mainly heuristic evaluations,
                      competitive analysis, usability testing, and surveys with other team members. Therefore, the whole
                      process contained a lot of teamwork and communication.
                    </p>
                  </div>
                  <div className="group-5">
                    <div className="flex-container">
                      <div className="text">
                        <span className="text-wrapper-4">
                          After a period of working with the project supervisor Iman Yeckehzaare, I gradually
                          participated in two more projects. Firstly, I help to progress the cognitive psychological
                          research project, Improving Collaborative Notetaking Through Finding and Visualizing
                          Prerequisite Knowledge Links, by <br />
                        </span>
                      </div>
                      <div className="span-wrapper">
                        <span className="text-wrapper-5">
                          conducting and monitoring experiment sessions remotely, <br />
                        </span>
                      </div>
                      <div className="text-2">
                        <span className="text-wrapper-6">
                          suggesting ideas to improve the design of experimental procedures, <br />
                        </span>
                      </div>
                      <div className="text-3">
                        <span className="text-wrapper-7">
                          reading related research papers for referring and interpreting research results, <br />
                        </span>
                      </div>
                      <div className="text-4">
                        <span className="text-wrapper-8">
                          analyzing research data by using R and SPSS. <br />
                        </span>
                      </div>
                      <div className="text-5">
                        <span className="text-wrapper-9">
                          Secondly, I facilitated the computer science team by learning and creating nodes concerning
                          deep learning in 1Cademy notebooks and coding 1Cademy front-end using Python to write Flask
                          applications.
                        </span>
                      </div>
                    </div>
                    <p className="research-assistant">Research Assistant &amp; Front-end Programming</p>
                  </div>
                  <div className="group-6">
                    <p className="p">Coordinating design, research, and developing teams</p>
                    <p className="text-wrapper-10">
                      After more than one year volunteering at 1Cademy, I took part in and worked on some projects from
                      all computer science, UX, cognitive psychology research, and UI design teams. Therefore, when it
                      comes to connecting three groups for requested modifications and new development tasks, I commonly
                      worked as a coordinator between three teams to explain how would the new design works to the
                      developing team using my knowledge of computer science and why a change is necessary for the UI
                      design team using my UX knowledge.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="2" className="group-7">
            <div className="text-wrapper-11">UI/UX Design: Navigation Bar</div>
            <Button
              href="https://www.figma.com/file/7CR6N08b7K4NcUXNmDpMMS/Untitled?type=design&node-id=0%3A1&t=eHCGVhAy2qKOznoA-1"
              style={{
                left: "466px",
                position: "absolute",
                top: "495px",
                width: "315px",
              }}
              text="Click To View The Work In Figma"
              viewMoreStyle={{
                marginLeft: "unset",
                marginRight: "unset",
                textDecoration: "underline",
              }}
            />
            <p className="text-wrapper-12">
              Following the design guide of 1Cademy, I designed the first version of the navigation bar based on the
              instructions from my team leader and project supervisor Iman. We argued about each component of the
              navigation bar in the meeting before starting the design. After finishing the first draft of the basic
              layout, it took another iteration of meetings, getting opinions from UX/UI teams’ members, and revising. I
              made four variants, login (a registered user), logout (no account), and researcher (after application),
              without a search bar for demonstration. The final decision about what the navigation bar should look like
              was deliberated later in the meeting. The current navigation bar on 1cademy.com was the third version
              designed by another teammate based on my version.
            </p>
            <div className="group-8">
              <div className="overlap-group-6">
                <div className="ellipse-6" />
                <img className="line-4" alt="Line" src="/img/line-21-1.png" />
              </div>
            </div>
            <div className="element-app-bar">
              <div className="rectangle-5" />
              <div className="frame-8">
                <img className="image" alt="Image" src="/img/image-2-2x.png" />
                <AppBarLink property1="default" />
                <AppBarLink property1="default" />
                <AppBarLink property1="default" />
                <AppBarLink property1="default" />
                <AppBarLink property1="default" />
                <AppBarLink
                  property1="active"
                  style={{
                    marginBottom: "-2.50px",
                    marginRight: "-5.50px",
                    marginTop: "-2.50px",
                  }}
                />
              </div>
              <div className="search-bar-navbar">
                <div className="text-wrapper-13">Search on 1Cademy</div>
                <img className="vector-2" alt="Vector" src="/img/vector.png" />
                <div className="rectangle-6" />
              </div>
              <div className="frame-9">
                <Primary
                  circular
                  color="orange"
                  darkmode={false}
                  elevation={false}
                  showIcon={false}
                  showIconAfter={false}
                  size="md"
                  stateProp="default"
                  text="APPLY!"
                />
                <Secondary
                  buttonStyle={{
                    color: "#f5f5f5",
                  }}
                  circular
                  darkmode={false}
                  disabled={false}
                  elevation={false}
                  showIcon={false}
                  showIconAfter={false}
                  size="md"
                  stateProp="default"
                  style="outlined"
                  styleOverride={{
                    borderColor: "#f5f5f5",
                  }}
                  text="SIGN IN/UP"
                />
              </div>
            </div>
          </div>
          <div className="group-9">
            <p className="UI-UX-design">UI/UX Design: Wireframing &amp; Search page</p>
            <Button
              href="https://www.figma.com/file/7CR6N08b7K4NcUXNmDpMMS/Untitled?type=design&node-id=1%3A2624&t=eHCGVhAy2qKOznoA-1"
              style={{
                left: "463px",
                position: "absolute",
                top: "335px",
                width: "315px",
              }}
              text="Click To View The Work In Figma"
              viewMoreStyle={{
                marginLeft: "unset",
                marginRight: "unset",
                textDecoration: "underline",
              }}
            />
            <p className="before-making-the">
              <span className="text-wrapper-14">
                Before making the high-fidelity prototype of the search page, we first worked on the low-fidelity
                wireframe during and after the meeting, which took three iterations to brainstorm, suggest, and revise.
                Each component required an amount of consideration on usability, aesthetics, accessibility, and
                information hierarchy. We started it by gathering what should be put and graphing the information
                hierarchy, and then based on the information hierarchy to decide where each element should be. With the
                final decisions and design requirements, we wireframed the webpage on{" "}
              </span>
              <span className="text-wrapper-15">Balsamig</span>
              <span className="text-wrapper-16">
                {" "}
                and then asked for others’ opinions to revise. Finally, after the wireframe got approved, I and another
                two UI team members collaborated to create the high-fidelity design by relying on the 1Cademy Figma
                library and the wireframe.{" "}
              </span>
            </p>
            <div className="group-10">
              <div className="overlap-group-7">
                <div className="ellipse-7" />
                <img className="line-5" alt="Line" src="/img/line-21-1.png" />
              </div>
            </div>
          </div>
          <div className="group-11">
            <p className="text-wrapper-17">UI Design: Redesign the sidebar</p>
            <div className="flex-container-2">
              <div className="text-6">
                <span className="text-wrapper-18">
                  I identified issues with the old design of the sidebar in
                  <br />
                </span>
              </div>
              <div className="text-7">
                <span className="text-wrapper-19">
                  aesthetics, <br />
                </span>
              </div>
              <div className="text-8">
                <span className="text-wrapper-20">
                  space redundancy, <br />
                </span>
              </div>
              <div className="text-9">
                <span className="text-wrapper-21">
                  non-intuitive layout: the link icon occupies one line itself, <br />
                </span>
              </div>
              <div className="text-10">
                <span className="text-wrapper-22">
                  usability: mainly users need to click item by item to mark all read, <br />
                </span>
              </div>
              <div className="text-11">
                <span className="text-wrapper-23">
                  word visibility: white font on orange background; gray font on white background,&nbsp;&nbsp; <br />
                </span>
              </div>
              <div className="text-12">
                <span className="text-wrapper-24">
                  and confirmed with project supervisor Ima and UX team leader Catherine the need for a new design. I
                  started to redesign the interface of the sidebar, and then another team member finished the
                  interaction design.
                </span>
              </div>
            </div>
            <div className="group-12">
              <div className="overlap-group-8">
                <div className="ellipse-8" />
                <img className="line-6" alt="Line" src="/img/line-21-3.png" />
              </div>
            </div>
            <img className="image-2" alt="Image" src="/img/image-18.png" />
          </div>
          <div className="group-13">
            <p className="text-wrapper-25">UI Design: Mini Profile - Activity Tab</p>
            <div className="group-14">
              <div className="overlap-group-9">
                <div className="ellipse-9" />
                <img className="line-7" alt="Line" src="/img/line-21-4.png" />
              </div>
            </div>
            <img className="screen-shot" alt="Screen shot" src="/img/screen-shot-2023-06-15-at-10-49-1.png" />
            <Frame
              hasPosterDesign={false}
              projectInformationStyle={{
                fontSize: "20px",
              }}
              style={{
                left: "511px",
                position: "absolute",
                top: "158px",
              }}
              text="Tools: Figma"
              text1="We started to create a mobile view of the website after gradually finishing the PC view. The link contains a low-fidelity prototype of the mobile view of 1Cademy notebooks and a first draft of the interface design of the activity tab for the profile page. I started to work on it after discussing the priority of what should be put in the mobile view and things that needed to pay more attention to, like accessibility and layouts, with UI team and project supervisor. This design was further discussed with the UX research team and supervisors for modifications."
              toolsAdobeStyle={{
                marginTop: "-1.00px",
              }}
            />
            <Button
              href="https://www.figma.com/proto/q9UIbvAFNv5oxhNdPsUEfe/Mobile-View?type=design&node-id=326-1713&scaling=scale-down&page-id=266%3A12&starting-point-node-id=326%3A1252&show-proto-sidebar=1"
              style={{
                left: "697px",
                position: "absolute",
                top: "522px",
                width: "177px",
              }}
              text="View The Design"
              viewMoreStyle={{
                marginLeft: "unset",
                marginRight: "unset",
                textDecoration: "underline",
              }}
            />
          </div>
          <div className="group-15">
            <div className="group-16">
              <div className="ellipse-10" />
              <img className="line-8" alt="Line" src="/img/line-18.png" />
            </div>
            <div id="3" className="group-17">
              <div className="text-wrapper-26">UX Research: Heuristic Evaluation</div>
              <p className="text-wrapper-27">
                Running heuristic evaluation on 1cademy.com with 5 other members from the UX research group. We
                carefully evaluate the 5 severity levels (from 0, the least severe, to 4, the most severe) of 10
                heuristic evaluation principles. I made this table for group members to fill up using Figma. 6 members
                all presented severe issues they found out and discussed which problems need to fix first by choosing
                the one we all agree upon. After that, I and another UX research member first made a very low-fidelity
                prototype for explaining why this is a usability issue and demonstrating our solution proposal and then
                met with the UI team via Zoom to discuss the viability of this solution and what to do next.
              </p>
            </div>
            <div className="overlap-wrapper">
              <div className="overlap-3">
                <div className="element-7">
                  <Title
                    heuristicsStyle={{
                      marginBottom: "-16.00px",
                      marginTop: "-17.00px",
                    }}
                    recommendationStyle={{
                      marginBottom: "-16.00px",
                      marginTop: "-17.00px",
                    }}
                    severityStyle={{
                      marginBottom: "-16.00px",
                      marginRight: "-12.00px",
                      marginTop: "-17.00px",
                    }}
                    style={{
                      height: "37px",
                      marginLeft: "-15.50px",
                      marginRight: "-14.50px",
                      width: "1132px",
                    }}
                    violationStyle={{
                      marginBottom: "-16.00px",
                      marginTop: "-17.00px",
                    }}
                  />
                  <Principles
                    override={
                      <Severity
                        overlapGroupStyle={{
                          backgroundColor: "#65aff7",
                          borderColor: "#0f3458",
                        }}
                        style={{
                          marginRight: "-24.00px",
                          minWidth: "76px",
                          position: "relative",
                          width: "unset",
                        }}
                        text="1"
                      />
                    }
                    principleStyle={{
                      marginBottom: "-86.00px",
                    }}
                    style={{
                      backgroundColor: "unset",
                      height: "124px",
                      marginLeft: "-9.50px",
                      marginRight: "-8.50px",
                      marginTop: "-9px",
                      width: "1120px",
                    }}
                    text="Aalways keep users informed about what is going on, through appropriate feedback within reasonable time."
                    text1="When you click on profile icon in upper right and then your name, nothing happens - no feedback"
                    text2="I dont even know, what is the purpose of this? Maybe it should take people somewhere?"
                  />
                  <Principles
                    override={
                      <SeverityWrapper
                        overlapGroupStyle={{
                          backgroundColor: "#65aff7",
                          borderColor: "#0f3458",
                        }}
                        style={{
                          marginRight: "-24.00px",
                          minWidth: "76px",
                          position: "relative",
                          width: "unset",
                        }}
                        text="1"
                      />
                    }
                    principleStyle={{
                      marginBottom: "-65.00px",
                    }}
                    style={{
                      height: "145px",
                      marginLeft: "-9.50px",
                      marginRight: "-8.50px",
                      marginTop: "-9px",
                      width: "1120px",
                    }}
                    text="Follow real-world conventions, making information appear in a natural and logical order."
                    text1="There is an arrow pointing down at the bottom of the first section, but nothing happens when you click it"
                    text2="Make the arrow clickable so users can move down the page or remove it"
                    text3={
                      <>
                        2. Match between system and the <br />
                        real world
                      </>
                    }
                  />
                  <Principles
                    override={
                      <DivWrapper
                        overlapGroupStyle={{
                          backgroundColor: "#f2ff5e",
                          borderColor: "#5c630c",
                        }}
                        style={{
                          marginRight: "-24.00px",
                          minWidth: "76px",
                          position: "relative",
                          width: "unset",
                        }}
                        text="2"
                      />
                    }
                    principleStyle={{
                      marginBottom: "-58.00px",
                    }}
                    style={{
                      backgroundColor: "unset",
                      height: "130px",
                      marginLeft: "-9.50px",
                      marginRight: "-8.50px",
                      marginTop: "-9px",
                      width: "1120px",
                    }}
                    text="Users should leave the unwanted state without having to go through an extended dialogue. undo and redo."
                    text1="When you scroll past the map, if your cursor is over it, instead of scrolling down the page the map will zoom in"
                    text2="Dont have the map automatically zoom in if you are scrolling past it"
                    text3="3. User control and freedom"
                  />
                  <div className="element-8">
                    <div className="principle-2">
                      <div className="text-wrapper-28">4. Consistency and standards</div>
                      <p className="description-2">
                        Users should not have to wonder whether different words, situations, or actions mean the same
                        thing.
                      </p>
                    </div>
                    <div className="dipisci-velit-sed">Lanugage is very consistent</div>
                    <div className="architecto-beatae" />
                    <SeverityWrapper
                      style={{
                        marginRight: "-24.00px",
                        minWidth: "76px",
                        position: "relative",
                        width: "unset",
                      }}
                      text="0"
                    />
                  </div>
                  <div className="element-9">
                    <div className="principle-3">
                      <div className="text-wrapper-29">5. Error prevention</div>
                      <p className="description-3">
                        Either eliminate error-prone conditions or check for them and present users with a confirmation
                        option before they commit to the action.
                      </p>
                    </div>
                    <div className="sed-ut-perspiciatis">N/A</div>
                    <div className="dipisci-velit-sed-2" />
                    <Severity1
                      overlapGroupStyle={{
                        backgroundColor: "#99e876",
                        borderColor: "#316619",
                      }}
                      style={{
                        marginRight: "-24.00px",
                        minWidth: "76px",
                        position: "relative",
                        width: "unset",
                      }}
                      text="0"
                    />
                  </div>
                </div>
                <div className="element-10">
                  <div className="element-11">
                    <div className="principle-4">
                      <p className="text-wrapper-30">6. Recognition rather than recall</p>
                      <p className="description-4">
                        Minimize the user’s memory load by making objects, actions, and options visible.
                      </p>
                    </div>
                    <p className="element-amet-minim-mollit">
                      Dont see any issues, the apply button&nbsp;&nbsp;is always visible, and there isnt much content on
                      the home screen that a user has to remember
                    </p>
                    <div className="amet-minim-mollit" />
                    <Severity
                      overlapGroupStyle={{
                        backgroundColor: "#99e876",
                        borderColor: "#316619",
                      }}
                      style={{
                        marginRight: "-20.50px",
                        minWidth: "76px",
                        position: "relative",
                        width: "unset",
                      }}
                      text="0"
                    />
                  </div>
                  <div className="element-12">
                    <div className="principle-5">
                      <p className="text-wrapper-31">7. Flexibility and efficiency of use</p>
                      <p className="description-5">Accelerators. Allow users to tailor frequent actions.</p>
                    </div>
                    <p className="sed-ut-perspiciatis-2">
                      No violations, users can easily navigate to different parts of the page using the navigation along
                      the top
                    </p>
                    <div className="quis-nostrum" />
                    <SeverityWrapper
                      style={{
                        marginRight: "-21.00px",
                        minWidth: "76px",
                        position: "relative",
                        width: "unset",
                      }}
                      text="0"
                    />
                  </div>
                  <div className="element-13">
                    <div className="principle-6">
                      <p className="text-wrapper-32">8. Aesthetic and minimalist design</p>
                      <p className="description-6">
                        Dialogues should not contain information which is irrelevant or rarely needed.
                      </p>
                    </div>
                    <p className="element-dipisci-velit-sed">
                      Very minimal, only essential information is on this page
                    </p>
                    <div className="architecto-beatae-2" />
                    <DivWrapper
                      overlapGroupStyle={{
                        backgroundColor: "#99e876",
                        borderColor: "#316619",
                      }}
                      style={{
                        marginRight: "-21.00px",
                        minWidth: "76px",
                        position: "relative",
                        width: "unset",
                      }}
                      text="0"
                    />
                  </div>
                  <Principles
                    override={
                      <SeverityWrapper
                        overlapGroupStyle={{
                          backgroundColor: "#65aff7",
                          borderColor: "#2d4d6d",
                        }}
                        style={{
                          marginRight: "-21.00px",
                          minWidth: "76px",
                          position: "relative",
                          width: "unset",
                        }}
                        text="1"
                      />
                    }
                    principleStyle={{
                      marginBottom: "-85.00px",
                      marginLeft: "-21.00px",
                    }}
                    style={{
                      backgroundColor: "unset",
                      height: "169px",
                      justifyContent: "center",
                      width: "1102px",
                    }}
                    text="Error messages should be expressed in plain language (no codes), precisely indicate the problem, and constructively suggest a solution."
                    text1="Published papers column forced me to log into umich account, what if a user doesnt go to a school that allows access to these websites/papers? (affects credibility)"
                    text2="I’m not sure if there is a solution, people still might be able to get to see the abstract of the paper without having a school login"
                    text3="9. Help users recognize, diagnose, and recover from errors"
                  />
                  <Principles
                    override={
                      <Severity1
                        overlapGroupStyle={{
                          borderColor: "#2d4d6d",
                        }}
                        style={{
                          marginRight: "-21.00px",
                          minWidth: "76px",
                          position: "relative",
                          width: "unset",
                        }}
                        text="1"
                      />
                    }
                    principleStyle={{
                      marginBottom: "-57.00px",
                      marginLeft: "-21.00px",
                    }}
                    style={{
                      height: "153px",
                      justifyContent: "center",
                      width: "1102px",
                    }}
                    text="Even though it is better if the system can be used without documentation, it may be necessary to provide help and documentation."
                    text1="There is a lot of helpful information on the page, but there is no contact information for people to use"
                    text2="Add some way for people exploring the website to reach out. Whether thats a form, or adding an email somewhere on the page"
                    text3="10. Help and documentation"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="group-18">
            <div className="text-wrapper-33">Empathize: Persona</div>
            <p className="creating-personas">
              <span className="text-wrapper-34">
                Creating personas for 1Cademy potential users to empathize with users and facilitate the developer teams
                and the UI team to gain a deeper understanding of users&#39; behavior and needs. When discussing user
                needs we would refer to Paul Doe and Sarah Johns as our main users and converse more effectively and
                focused since we all know who and what characters we were talking about in the meetings. I recommended
                during UX and UI collaborating meetings to create personas because when we brainstorm, there were no
                specific user images for us to focus on their needs. Everyone uses themselves or people they know as
                users and talks about their potential needs. These two fictitious characters prevent this from
                happening. For creating these two personas, we used the demographic information of our past research
                participants provided in their experiment sessions of cognitive psychological research projects as they
                were all people who are users of the website{" "}
              </span>
              <span className="text-wrapper-35">
                (every team member is required to participate in one 1Cademy experiment to be considered as an
                applicant)
              </span>
              <span className="text-wrapper-36">. </span>
            </p>
            <div className="group-19">
              <div className="overlap-group-10">
                <div className="ellipse-11" />
                <img className="line-9" alt="Line" src="/img/line-13.png" />
              </div>
            </div>
            <div className="overlap-4">
              <div
                className="rectangle-wrapper"
                style={{
                  backgroundImage: "url(/img/image-12.png)",
                }}
              >
                <div className="rectangle-7" />
              </div>
              <div
                className="group-20"
                style={{
                  backgroundImage: "url(/img/image-10.png)",
                }}
              >
                <div className="rectangle-8" />
              </div>
            </div>
          </div>
          <div className="group-21">
            <div className="text-wrapper-37">Empathize: Scenarios</div>
            <p className="text-wrapper-38">
              For the same purpose as personas and using the same demographic data, in order to further emphasize and
              visualize user images, we wrote two scenarios of our two characters from personas using 1Cademy. Following
              is what we wrote.
            </p>
            <div className="group-22">
              <div className="overlap-group-11">
                <div className="ellipse-12" />
                <img className="line-10" alt="Line" src="/img/line-21-5.png" />
              </div>
            </div>
            <div className="group-23">
              <div className="overlap-5">
                <div className="group-24">
                  <div
                    className="paul-wrapper"
                    style={{
                      backgroundImage: "url(/img/image-13.png)",
                    }}
                  >
                    <div className="paul">[paul]</div>
                  </div>
                </div>
                <img className="image-3" alt="Image" src="/img/image-11.png" />
              </div>
            </div>
          </div>
          <div id="4" className="group-25">
            <div className="text-wrapper-39">Research Assistant</div>
            <p className="text-wrapper-40">
              By participating in a cognitive psychological research project regarding the topic of Improving
              Collaborative Notetaking Through Finding and Visualizing Prerequisite Knowledge Links, I facilitated
              proceeding experiment sessions on a daily basis, monitoring and guiding participants to complete their
              experiments, answering their questions, taking notes of their reading sequences for analysis. Before all
              experiments started, we created one experiment script for other research assistants to ensure consistent
              procedures and reduce potential variables. We also discussed experiment design in many meetings and spent
              much time limiting independent variables and selecting the ACT articles that fit our requirements. All
              selections and designs require support from published scientific journals, so we read dozens of journals
              before presenting an idea or a change.
            </p>
            <div className="group-26">
              <div className="overlap-group-12">
                <div className="ellipse-13" />
                <img className="line-11" alt="Line" src="/img/line-21-6.png" />
              </div>
            </div>
            <Button
              href="https://docs.google.com/document/d/1cAuZcasRZarp8h6vq37RPMN0btYySr7Iakgn7BZlAmY/edit?usp=sharing"
              style={{
                left: "458px",
                position: "absolute",
                top: "330px",
                width: "280px",
              }}
              text="View The Experiment Script"
              viewMoreStyle={{
                marginLeft: "unset",
                marginRight: "unset",
                textDecoration: "underline",
              }}
            />
          </div>
          <div className="group-27">
            <div className="presenting-modifying">Presenting &amp; Modifying nodes</div>
            <p className="text-wrapper-41">
              Another task all members needed to complete every two weeks was to create a node/nodes for a paper
              recently read. After writing one node/node, we presented it in the meetings in order to get up-voted for
              publishing the node/s. Those who have not gotten enough upvotes would be pended. This process was to both
              facilitate learning and simulate a new learning approach that 1Cademy was experimenting with and
              promoting, that is, learning by concept maps and knowledge visualization, supported by multiple recognized
              cognitive science and cognitive psychological research articles.
            </p>
            <div className="group-28">
              <div className="overlap-group-13">
                <div className="ellipse-14" />
                <img className="line-12" alt="Line" src="/img/line-21-7.png" />
              </div>
            </div>
            <img className="screen-shot-2" alt="Screen shot" src="/img/screen-shot-2023-06-19-at-11-50-1.png" />
            <img className="screen-shot-3" alt="Screen shot" src="/img/screen-shot-2023-06-17-at-6-57-1.png" />
          </div>
          <div className="group-29">
            <div className="text-wrapper-42">Takeaways</div>
            <p className="text-wrapper-43">
              I volunteered at 1Cademy for a very long period and spent most of my extracurricular time helping,
              developing, and learning in this community. I have participated in more than three research projects and
              contributed many improving ideas. Through tasks assigned, I learned many things from team leaders and
              other members and gained tons of experience, including communication skills, knowledge in UX/UI design,
              deep learning, and other computer science fields, experience with Figma, cognitive psychology, knowledge
              visualization, interpersonal skills, public speaking, and much more. This community gave me the
              opportunity to apply my interdisciplinary knowledge and learn more from real projects. Every opinion and
              suggestion from other researchers during meetings or collaborations was helpful for me to grow my skills.
              Working in such a multidisciplinary, inclusive, and diverse group, I kept being impressed and taught by others’ novel
              and creative ideas which I have never thought of.
            </p>
            <div className="group-30">
              <div className="overlap-group-14">
                <div className="ellipse-15" />
                <img className="line-13" alt="Line" src="/img/line-21-7.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Timeline data={data} isResearchPage /> 
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
      <Group
        style={{
          position: "fixed",
        }}
      />
    </div>
  );
};
