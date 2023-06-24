import React from "react";
import { ButtonWrapper } from "../../components/ButtonWrapper";
import { Component } from "../../components/Component";
import { Frame } from "../../components/Frame";
import { Group } from "../../components/Group";
import { Timeline } from "../../components/Timeline";
import { NavigationBar } from "../../components/NavigationBar";
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
          className="overlap-17"
          style={{
            backgroundImage: "url(/img/screen-shot-2023-06-19-at-6-17-1.png)",
          }}
        >
          <div className="rectangle-14" />
          <div className="frame-40">
            <h1 className="text-wrapper-189">1Cademy Project</h1>
            <p className="a-collaborating">
              <span className="text-wrapper-190">
                A Collaborating learning community in Multiple Fields of Study
                <br />
                <br />
              </span>
              <a href="https://1cademy.com" rel="noopener noreferrer" target="_blank">
                <span className="text-wrapper-191">Visit the website</span>
              </a>
            </p>
          </div>
          <div className="group-67">
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
        <div className="frame-41">
          <div className="group-68">
            <div className="ellipse-7" />
            <div className="ellipse-8" />
            <div className="ellipse-9" />
            <div className="ellipse-10" />
            <img className="line-14" alt="Line" src="/img/line-10-1.png" />
            <img className="line-15" alt="Line" src="/img/line-16-1.png" />
            <img className="line-16" alt="Line" src="/img/line-21.png" />
            <img className="line-17" alt="Line" src="/img/line-20.png" />
            <div id="1" className="frame-42">
              <div className="text-wrapper-192">Overview</div>
              <div className="frame-wrap">
                <div className="frame-43">
                  <div className="group-69">
                    <p className="UI-UX-design-UX">UI/UX Design &amp; UX Research</p>
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
                  <div className="group-70">
                    <div className="flex-container-18">
                      <div className="text-82">
                        <span className="text-wrapper-193">
                          After a period of working with the project supervisor Iman Yeckehzaare, I gradually
                          participated in two more projects. Firstly, I help to progress the cognitive psychological
                          research project, Improving Collaborative Notetaking Through Finding and Visualizing
                          Prerequisite Knowledge Links, by <br />
                        </span>
                      </div>
                      <div className="text-83">
                        <span className="text-wrapper-194">
                          conducting and monitoring experiment sessions remotely, <br />
                        </span>
                      </div>
                      <div className="text-84">
                        <span className="text-wrapper-195">
                          suggesting ideas to improve the design of experimental procedures, <br />
                        </span>
                      </div>
                      <div className="text-85">
                        <span className="text-wrapper-196">
                          reading related research papers for referring and interpreting research results, <br />
                        </span>
                      </div>
                      <div className="text-86">
                        <span className="text-wrapper-197">
                          analyzing research data by using R and SPSS. <br />
                        </span>
                      </div>
                      <div className="text-87">
                        <span className="text-wrapper-198">
                          Secondly, I facilitated the computer science team by learning and creating nodes concerning
                          deep learning in 1Cademy notebooks and coding 1Cademy front-end using Python to write Flask
                          applications.
                        </span>
                      </div>
                    </div>
                    <p className="research-assistant">Research Assistant &amp; Front-end Programming</p>
                  </div>
                  <div className="group-71">
                    <p className="text-wrapper-199">Coordinating design, research, and developing teams</p>
                    <p className="text-wrapper-200">
                      After more than one year contributing at 1Cademy, I took part in and worked on some projects from
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
          <div id="2" className="group-72">
            <div className="text-wrapper-201">UI/UX Design: Navigation Bar</div>
            <ButtonWrapper
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
            <p className="text-wrapper-202">
              Following the design guide of 1Cademy, I designed the first version of the navigation bar based on the
              instructions from my team leader and project supervisor Iman. We argued about each component of the
              navigation bar in the meeting before starting the design. After finishing the first draft of the basic
              layout, it took another iteration of meetings, getting opinions from UX/UI teams’ members, and revising. I
              made four variants, login (a registered user), logout (no account), and researcher (after application),
              without a search bar for demonstration. The final decision about what the navigation bar should look like
              was deliberated later in the meeting. The current navigation bar on 1cademy.com was the third version
              designed by another teammate based on my version.
            </p>
            <div className="group-73">
              <div className="overlap-group-15">
                <div className="ellipse-11" />
                <img className="line-18" alt="Line" src="/img/line-21-1.png" />
              </div>
            </div>
            <img className="image-12" alt="Image" src="/img/image-20.png" />
          </div>
          <div className="group-74">
            <p className="UI-UX-design">UI/UX Design: Wireframing &amp; Search page</p>
            <ButtonWrapper
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
              <span className="text-wrapper-203">
                Before making the high-fidelity prototype of the search page, we first worked on the low-fidelity
                wireframe during and after the meeting, which took three iterations to brainstorm, suggest, and revise.
                Each component required an amount of consideration on usability, aesthetics, accessibility, and
                information hierarchy. We started it by gathering what should be put and graphing the information
                hierarchy, and then based on the information hierarchy to decide where each element should be. With the
                final decisions and design requirements, we wireframed the webpage on{" "}
              </span>
              <span className="text-wrapper-204">Balsamig</span>
              <span className="text-wrapper-205">
                {" "}
                and then asked for others’ opinions to revise. Finally, after the wireframe got approved, I and another
                two UI team members collaborated to create the high-fidelity design by relying on the 1Cademy Figma
                library and the wireframe.{" "}
              </span>
            </p>
            <div className="group-75">
              <div className="overlap-group-16">
                <div className="ellipse-12" />
                <img className="line-19" alt="Line" src="/img/line-21-1.png" />
              </div>
            </div>
          </div>
          <div className="group-76">
            <p className="text-wrapper-206">UI Design: Redesign the sidebar</p>
            <div className="flex-container-19">
              <div className="text-88">
                <span className="text-wrapper-207">
                  I identified issues with the old design of the sidebar in
                  <br />
                </span>
              </div>
              <div className="text-89">
                <span className="text-wrapper-208">
                  aesthetics, <br />
                </span>
              </div>
              <div className="text-90">
                <span className="text-wrapper-209">
                  space redundancy, <br />
                </span>
              </div>
              <div className="text-91">
                <span className="text-wrapper-210">
                  non-intuitive layout: the link icon occupies one line itself, <br />
                </span>
              </div>
              <div className="text-92">
                <span className="text-wrapper-211">
                  usability: mainly users need to click item by item to mark all read, <br />
                </span>
              </div>
              <div className="text-93">
                <span className="text-wrapper-212">
                  word visibility: white font on orange background; gray font on white background,&nbsp;&nbsp; <br />
                </span>
              </div>
              <div className="text-94">
                <span className="text-wrapper-213">
                  and confirmed with project supervisor Ima and UX team leader Catherine the need for a new design. I
                  started to redesign the interface of the sidebar, and then another team member finished the
                  interaction design.
                </span>
              </div>
            </div>
            <div className="group-77">
              <div className="overlap-group-17">
                <div className="ellipse-13" />
                <img className="line-20" alt="Line" src="/img/line-21-3.png" />
              </div>
            </div>
            <img className="image-13" alt="Image" src="/img/image-18.png" />
          </div>
          <div className="group-78">
            <p className="text-wrapper-214">UI Design: Mini Profile - Activity Tab</p>
            <div className="group-79">
              <div className="overlap-group-18">
                <div className="ellipse-14" />
                <img className="line-21" alt="Line" src="/img/line-21-4.png" />
              </div>
            </div>
            <img className="screen-shot-17" alt="Screen shot" src="/img/screen-shot-2023-06-15-at-10-49-1.png" />
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
              text1="Tools: Figma"
              text2="We started to create a mobile view of the website after gradually finishing the PC view. The link contains a low-fidelity prototype of the mobile view of 1Cademy notebooks and a first draft of the interface design of the activity tab for the profile page. I started to work on it after discussing the priority of what should be put in the mobile view and things that needed to pay more attention to, like accessibility and layouts, with UI team and project supervisor. This design was further discussed with the UX research team and supervisors for modifications."
              toolsAdobeStyle={{
                marginTop: "-1.00px",
              }}
            />
            <ButtonWrapper
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
          <div className="group-80">
            <div className="group-81">
              <div className="ellipse-15" />
              <img className="line-22" alt="Line" src="/img/line-18-1.png" />
            </div>
            <div id="3" className="group-82">
              <div className="text-wrapper-215">UX Research: Heuristic Evaluation</div>
              <p className="text-wrapper-216">
                Running heuristic evaluation on 1cademy.com with 5 other members from the UX research group. We
                carefully evaluate the 5 severity levels (from 0, the least severe, to 4, the most severe) of 10
                heuristic evaluation principles. I made this table for group members to fill up using Figma. 6 members
                all presented severe issues they found out and discussed which problems need to fix first by choosing
                the one we all agree upon. After that, I and another UX research member first made a very low-fidelity
                prototype for explaining why this is a usability issue and demonstrating our solution proposal and then
                met with the UI team via Zoom to discuss the viability of this solution and what to do next.
              </p>
            </div>
            <img className="image-14" alt="Image" src="/img/image-21.png" />
          </div>
          <div className="group-83">
            <div className="text-wrapper-217">Empathize: Persona</div>
            <p className="creating-personas">
              <span className="text-wrapper-218">
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
              <span className="text-wrapper-219">
                (every team member is required to participate in one 1Cademy experiment to be considered as an
                applicant)
              </span>
              <span className="text-wrapper-220">. </span>
            </p>
            <div className="group-84">
              <div className="overlap-group-19">
                <div className="ellipse-16" />
                <img className="line-23" alt="Line" src="/img/line-13-1.png" />
              </div>
            </div>
            <div className="overlap-18">
              <div
                className="rectangle-wrapper"
                style={{
                  backgroundImage: "url(/img/image-12-1.png)",
                }}
              >
                <div className="rectangle-15" />
              </div>
              <div
                className="group-85"
                style={{
                  backgroundImage: "url(/img/image-10-2.png)",
                }}
              >
                <div className="rectangle-16" />
              </div>
            </div>
          </div>
          <div className="group-86">
            <div className="text-wrapper-221">Empathize: Scenarios</div>
            <p className="text-wrapper-222">
              For the same purpose as personas and using the same demographic data, in order to further emphasize and
              visualize user images, we wrote two scenarios of our two characters from personas using 1Cademy. Following
              is what we wrote.
            </p>
            <div className="group-87">
              <div className="overlap-group-20">
                <div className="ellipse-17" />
                <img className="line-24" alt="Line" src="/img/line-21-5.png" />
              </div>
            </div>
            <div className="group-88">
              <div className="overlap-19">
                <div className="group-89">
                  <div
                    className="paul-wrapper"
                    style={{
                      backgroundImage: "url(/img/image-13.png)",
                    }}
                  >
                    <div className="paul">[paul]</div>
                  </div>
                </div>
                <img className="image-15" alt="Image" src="/img/image-11.png" />
              </div>
            </div>
          </div>
          <div className="group-90">
            <div id="4" className="text-wrapper-223">Research Assistant</div>
            <p className="text-wrapper-224">
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
            <div className="group-91">
              <div className="overlap-group-21">
                <div className="ellipse-18" />
                <img className="line-25" alt="Line" src="/img/line-21-6.png" />
              </div>
            </div>
            <ButtonWrapper
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
          <div className="group-92">
            <div className="presenting-modifying">Presenting &amp; Modifying nodes</div>
            <p className="text-wrapper-225">
              Another task all members needed to complete every two weeks was to create a node/nodes for a paper
              recently read. After writing one node/node, we presented it in the meetings in order to get up-voted for
              publishing the node/s. Those who have not gotten enough upvotes would be pended. This process was to both
              facilitate learning and simulate a new learning approach that 1Cademy was experimenting with and
              promoting, that is, learning by concept maps and knowledge visualization, supported by multiple recognized
              cognitive science and cognitive psychological research articles.
            </p>
            <div className="group-93">
              <div className="overlap-group-22">
                <div className="ellipse-19" />
                <img className="line-26" alt="Line" src="/img/line-21-7.png" />
              </div>
            </div>
            <img className="screen-shot-18" alt="Screen shot" src="/img/screen-shot-2023-06-19-at-11-50-1.png" />
            <img className="screen-shot-19" alt="Screen shot" src="/img/screen-shot-2023-06-17-at-6-57-1.png" />
          </div>
          <div className="group-94">
            <div className="text-wrapper-226">Takeaways</div>
            <p className="i-volunteered-at">
              I worked at 1Cademy for a very long period and spent most of my extracurricular time helping,
              developing, and learning in this community. I have participated in more than three research projects and
              contributed many improving ideas. Through tasks assigned, I learned many things from team leaders and
              other members and gained tons of experience, including communication skills, knowledge in UX/UI design,
              deep learning, and other computer science fields, experience with Figma, cognitive psychology, knowledge
              visualization, interpersonal skills, public speaking, and much more. This community gave me the
              opportunity to apply my interdisciplinary knowledge and learn more from real projects. Every opinion and
              suggestion from other researchers during meetings or collaborations was helpful for me to grow my skills.
              Working in such a multidisciplinary, inclusive, and diverse group, I kept being impressed
              and&nbsp;&nbsp;taught by others’ novel and creative ideas which I have never thought of.
            </p>
            <div className="group-95">
              <div className="overlap-group-23">
                <div className="ellipse-20" />
                <img className="line-27" alt="Line" src="/img/line-21-7.png" />
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
        to1="/resume"
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
