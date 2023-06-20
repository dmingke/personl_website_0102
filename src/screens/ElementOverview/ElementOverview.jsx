import React from "react";
import { ButtonWrapper } from "../../components/ButtonWrapper";
import { Component } from "../../components/Component";
import { Frame } from "../../components/Frame";
import { Group } from "../../components/Group";
import { NavigationBar } from "../../components/NavigationBar";
import "./style.css";

export const ElementOverview = () => {
  return (
    <div className="element-overview">
      <div className="element-cademy-overview">
        <div
          className="overlap-21"
          style={{
            backgroundImage: "url(/img/screen-shot-2023-06-19-at-6-17-1.png)",
          }}
        >
          <div className="rectangle-15" />
          <div className="frame-18">
            <h1 className="text-wrapper-186">1Cademy Project</h1>
            <p className="a-collaborating">
              <span className="text-wrapper-187">
                A Collaborating learning community in Multiple Fields of Study
                <br />
                <br />
              </span>
              <a href="https://1cademy.com" rel="noopener noreferrer" target="_blank">
                <span className="text-wrapper-188">Visit the website</span>
              </a>
            </p>
          </div>
          <div className="group-63">
            <Component
              style={{
                left: "0",
                position: "absolute",
                top: "0",
              }}
              text="Tasks Overview"
              text1="Conducting research sessions with participants, Web development, UI design, UX research, Reading and adding nodes to 1Cademy notebooks, Weekly meetings, Discussing research and web design, and so on"
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
              text1="2022.6 - 2023.4"
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
        <div className="text-wrapper-189">Overview</div>
        <div className="text-wrapper-190">UX Research: Heuristic Evaluation</div>
        <p className="text-wrapper-191">UI Design: Mini Profile - Activity Tab</p>
        <p className="text-wrapper-192">UI Design: Redesign the sidebar</p>
        <div className="text-wrapper-193">Research Assistant</div>
        <div className="presenting-modifying">Presenting &amp; Modifying nodes</div>
        <div className="text-wrapper-194">Empathize: Persona</div>
        <div className="text-wrapper-195">Empathize: Scenarios</div>
        <p className="text-wrapper-196">
          After a period of working with the project supervisor Ima, I gradually participated in two more projects,
          which I help progressing the cognitive psychological research project, ACM SIGCSE 2023: Reducing
          procrastination without sacrificing students’ autonomy through optional weekly presentations of
          student-generated content, by conducting and monitoring research sessions remotely, suggesting ideas to
          improve the design of procedures and interpretations of research results, and analyzing research data by using
          R and SPSS, and facilitating computer science team to make nodes of computer science knowledge in deep
          learning and code 1Cademy front-end by using python to write flask applications.
        </p>
        <p className="text-wrapper-197">
          Running heuristic evaluation on 1cademy.com with 5 other members from the UX research group. We carefully
          evaluate the 5 severity levels (from 0, the least severe, to 4, the most severe) of 10 heuristic evaluation
          principles. I made this table for group members to fill up using Figma. 6 members all presented severe issues
          they found out and discussed which problems need to fix first by choosing the one we all agree upon. After
          that, I and another UX research member first made a very low-fidelity prototype for explaining why this is a
          usability issue and demonstrating our solution proposal and then met with the UI team via Zoom to discuss the
          viability of this solution and what to do next.
        </p>
        <p className="creating-personas">
          <span className="text-wrapper-198">
            Creating personas for 1Cademy potential users to empathize with users and facilitate the developer teams and
            the UI team to gain a deeper understanding of users&#39; behavior and needs. When discussing user needs we
            would refer to Paul Doe and Sarah Johns as our main users and converse more effectively and focused since we
            all know who and what characters we were talking about in the meetings. I recommended during UX and UI
            collaborating meetings to create personas because when we brainstorm, there were no specific user images for
            us to focus on their needs. Everyone uses themselves or people they know as users and talks about their
            potential needs. These two fictitious characters prevent this from happening. For creating these two
            personas, we used the demographic information of our past research participants provided in their experiment
            sessions of cognitive psychological research projects as they were all people who are users of the website{" "}
          </span>
          <span className="text-wrapper-199">
            (every team member is required to participate in one 1Cademy experiment to be considered as an applicant)
          </span>
          <span className="text-wrapper-200">. </span>
        </p>
        <p className="text-wrapper-201">
          For the same purpose as personas and using the same demographic data, in order to further emphasize and
          visualize user images, we wrote two scenarios of our two characters from personas using 1Cademy. Following is
          what we wrote.
        </p>
        <div className="flex-container-18">
          <div className="text-82">
            <span className="text-wrapper-202">
              I identified issues with the old design of the sidebar in
              <br />
            </span>
          </div>
          <div className="text-83">
            <span className="text-wrapper-203">
              aesthetics, <br />
            </span>
          </div>
          <div className="text-84">
            <span className="text-wrapper-204">
              space redundancy, <br />
            </span>
          </div>
          <div className="text-85">
            <span className="text-wrapper-205">
              non-intuitive layout: the link icon occupies one line itself, <br />
            </span>
          </div>
          <div className="text-86">
            <span className="text-wrapper-206">
              usability: mainly users need to click item by item to mark all read, <br />
            </span>
          </div>
          <div className="text-87">
            <span className="text-wrapper-207">
              word visibility: white font on orange background; gray font on white background,&nbsp;&nbsp; <br />
            </span>
          </div>
          <div className="text-88">
            <span className="text-wrapper-208">
              and confirmed with project supervisor Ima and UX team leader Catherine the need for a new design. I
              started to redesign the interface of the sidebar, and then another team member finished the interaction
              design.
            </span>
          </div>
        </div>
        <p className="text-wrapper-209">
          For the same purpose as personas and using the same demographic data, in order to further emphasize and
          visualize user images, we wrote two scenarios of our two characters from personas using 1Cademy. Following is
          what we wrote.
        </p>
        <p className="text-wrapper-210">
          For the same purpose as personas and using the same demographic data, in order to further emphasize and
          visualize user images, we wrote two scenarios of our two characters from personas using 1Cademy. Following is
          what we wrote.
        </p>
        <p className="UI-UX-design-UX">UI/UX Design &amp; UX Research</p>
        <p className="research-assistant">Research Assistant &amp; Front-end Programming</p>
        <div className="ellipse-11" />
        <div className="ellipse-12" />
        <div className="ellipse-13" />
        <div className="ellipse-14" />
        <div className="ellipse-15" />
        <img className="line-15" alt="Line" src="/img/line-10-1.png" />
        <img className="line-16" alt="Line" src="/img/line-16-1.png" />
        <img className="line-17" alt="Line" src="/img/line-21.png" />
        <img className="line-18" alt="Line" src="/img/line-18-1.png" />
        <div className="group-64">
          <div className="overlap-group-13">
            <div className="ellipse-16" />
            <img className="line-19" alt="Line" src="/img/line-13-1.png" />
          </div>
        </div>
        <div className="group-65">
          <div className="overlap-22">
            <div className="ellipse-17" />
            <img className="line-20" alt="Line" src="/img/line-21-1.png" />
          </div>
        </div>
        <div className="group-66">
          <div className="overlap-23">
            <div className="ellipse-18" />
            <img className="line-21" alt="Line" src="/img/line-21-2.png" />
          </div>
        </div>
        <div className="group-67">
          <div className="overlap-24">
            <div className="ellipse-19" />
            <img className="line-22" alt="Line" src="/img/line-21-3.png" />
          </div>
        </div>
        <div className="group-68">
          <div className="overlap-25">
            <div className="ellipse-20" />
            <img className="line-23" alt="Line" src="/img/line-21-4.png" />
          </div>
        </div>
        <div className="group-69">
          <div className="overlap-26">
            <div className="ellipse-21" />
            <img className="line-24" alt="Line" src="/img/line-21-4.png" />
          </div>
        </div>
        <p className="as-a-member-of">
          As a member of 1Cademy,&nbsp;&nbsp;at first, I focused on UX research and UI design. I collaborated with the
          UX research team and UI design team to develop 1Cademy multiple websites (experimental site to perform remote
          research sessions, 1cademy.com AKA 1cademy main page for presenting all key information of 1Cademy, and
          1Cademy notebooks for learning and adding knowledge nodes) on Figma and improve their usability and
          accessibility.&nbsp;&nbsp;We divided a part of the jobs to each person and make suggestions for each other’s
          design in the weekly meeting. <br />
          Later on, after gradually perfecting PC view, I also helped to design a low-fidelity prototype of the mobile
          view of the website and perform UX research methods, mainly heuristic evaluations, competitive analysis,
          usability testing, and surveys with other team members. Therefore, the whole process contained a lot of
          teamwork and communication.
        </p>
        <img className="line-25" alt="Line" src="/img/line-20.png" />
        <div className="group-70">
          <div className="overlap-27">
            <div className="element-3">
              <div className="title">
                <div className="heuristics">HEURISTICS</div>
                <div className="violation">VIOLATION</div>
                <div className="recommendation">RECOMMENDATION</div>
                <div className="severity">SEVERITY</div>
              </div>
              <div className="element-4">
                <div className="principle">
                  <p className="text-wrapper-211">1. Visibility of system status</p>
                  <p className="description">
                    Aalways keep users informed about what is going on, through appropriate feedback within reasonable
                    time.
                  </p>
                </div>
                <p className="element-amet-minim-mollit">
                  When you click on profile icon in upper right and then your name, nothing happens - no feedback
                </p>
                <p className="amet-minim-mollit">
                  I dont even know, what is the purpose of this? Maybe it should take people somewhere?
                </p>
                <div className="severity-2">
                  <div className="element-wrapper">
                    <div className="element-5">1</div>
                  </div>
                </div>
              </div>
              <div className="element-6">
                <div className="principle-2">
                  <p className="element-match-between">
                    2. Match between system and the <br />
                    real world
                  </p>
                  <p className="description-2">
                    Follow real-world conventions, making information appear in a natural and logical order.
                  </p>
                </div>
                <p className="sed-ut-perspiciatis">
                  There is an arrow pointing down at the bottom of the first section, but nothing happens when you click
                  it
                </p>
                <p className="architecto-beatae">
                  Make the arrow clickable so users can move down the page or remove it
                </p>
                <div className="severity-3">
                  <div className="overlap-group-14">
                    <div className="element-7">1</div>
                  </div>
                </div>
              </div>
              <div className="element-8">
                <div className="principle-3">
                  <p className="text-wrapper-212">3. User control and freedom</p>
                  <p className="description-3">
                    Users should leave the unwanted state without having to go through an extended dialogue. undo and
                    redo.
                  </p>
                </div>
                <p className="architecto-beatae-2">
                  When you scroll past the map, if your cursor is over it, instead of scrolling down the page the map
                  will zoom in
                </p>
                <p className="sed-ut-perspiciatis-2">
                  Dont have the map automatically zoom in if you are scrolling past it
                </p>
                <div className="severity-4">
                  <div className="overlap-group-15">
                    <div className="element-9">2</div>
                  </div>
                </div>
              </div>
              <div className="element-10">
                <div className="principle-4">
                  <div className="text-wrapper-213">4. Consistency and standards</div>
                  <p className="description-4">
                    Users should not have to wonder whether different words, situations, or actions mean the same thing.
                  </p>
                </div>
                <div className="dipisci-velit-sed">Lanugage is very consistent</div>
                <div className="architecto-beatae-3" />
                <div className="severity-5">
                  <div className="overlap-group-16">
                    <div className="text-wrapper-214">0</div>
                  </div>
                </div>
              </div>
              <div className="element-11">
                <div className="principle-5">
                  <div className="text-wrapper-215">5. Error prevention</div>
                  <p className="description-5">
                    Either eliminate error-prone conditions or check for them and present users with a confirmation
                    option before they commit to the action.
                  </p>
                </div>
                <div className="sed-ut-perspiciatis-3">N/A</div>
                <div className="dipisci-velit-sed-2" />
                <div className="severity-6">
                  <div className="overlap-group-17">
                    <div className="element-12">0</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="element-13">
              <div className="element-14">
                <div className="principle-6">
                  <p className="text-wrapper-216">6. Recognition rather than recall</p>
                  <p className="description-6">
                    Minimize the user’s memory load by making objects, actions, and options visible.
                  </p>
                </div>
                <p className="element-amet-minim-mollit-2">
                  Dont see any issues, the apply button&nbsp;&nbsp;is always visible, and there isnt much content on the
                  home screen that a user has to remember
                </p>
                <div className="amet-minim-mollit-2" />
                <div className="severity-7">
                  <div className="overlap-group-18">
                    <div className="element-15">0</div>
                  </div>
                </div>
              </div>
              <div className="element-16">
                <div className="principle-7">
                  <p className="text-wrapper-217">7. Flexibility and efficiency of use</p>
                  <p className="description-7">Accelerators. Allow users to tailor frequent actions.</p>
                </div>
                <p className="sed-ut-perspiciatis-4">
                  No violations, users can easily navigate to different parts of the page using the navigation along the
                  top
                </p>
                <div className="quis-nostrum" />
                <div className="severity-8">
                  <div className="overlap-group-19">
                    <div className="text-wrapper-218">0</div>
                  </div>
                </div>
              </div>
              <div className="element-17">
                <div className="principle-8">
                  <p className="text-wrapper-219">8. Aesthetic and minimalist design</p>
                  <p className="description-8">
                    Dialogues should not contain information which is irrelevant or rarely needed.
                  </p>
                </div>
                <p className="element-dipisci-velit-sed">Very minimal, only essential information is on this page</p>
                <div className="architecto-beatae-4" />
                <div className="severity-9">
                  <div className="overlap-group-20">
                    <div className="element-18">0</div>
                  </div>
                </div>
              </div>
              <div className="element-19">
                <div className="principle-9">
                  <p className="text-wrapper-220">9. Help users recognize, diagnose, and recover from errors</p>
                  <p className="description-9">
                    Error messages should be expressed in plain language (no codes), precisely indicate the problem, and
                    constructively suggest a solution.
                  </p>
                </div>
                <p className="sed-ut-perspiciatis-5">
                  Published papers column forced me to log into umich account, what if a user doesnt go to a school that
                  allows access to these websites/papers? (affects credibility)
                </p>
                <p className="quis-nostrum-2">
                  I’m not sure if there is a solution, people still might be able to get to see the abstract of the
                  paper without having a school login
                </p>
                <div className="severity-10">
                  <div className="overlap-group-21">
                    <div className="element-20">1</div>
                  </div>
                </div>
              </div>
              <div className="element-21">
                <div className="principle-10">
                  <div className="text-wrapper-221">10. Help and documentation</div>
                  <p className="description-10">
                    Even though it is better if the system can be used without documentation, it may be necessary to
                    provide help and documentation.
                  </p>
                </div>
                <p className="architecto-beatae-5">
                  There is a lot of helpful information on the page, but there is no contact information for people to
                  use
                </p>
                <p className="dipisci-velit-sed-3">
                  Add some way for people exploring the website to reach out. Whether thats a form, or adding an email
                  somewhere on the page
                </p>
                <div className="severity-11">
                  <div className="overlap-group-22">
                    <div className="text-wrapper-222">1</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="overlap-28">
          <div
            className="rectangle-wrapper"
            style={{
              backgroundImage: "url(/img/image-12-1.png)",
            }}
          >
            <div className="rectangle-16" />
          </div>
          <div
            className="group-71"
            style={{
              backgroundImage: "url(/img/image-10-2.png)",
            }}
          >
            <div className="rectangle-17" />
          </div>
        </div>
        <div className="group-72">
          <div className="overlap-29">
            <div className="group-73">
              <div
                className="paul-wrapper"
                style={{
                  backgroundImage: "url(/img/image-13.png)",
                }}
              >
                <div className="paul">[paul]</div>
              </div>
            </div>
            <img className="image-12" alt="Image" src="/img/image-11.png" />
          </div>
        </div>
        <img className="screen-shot-17" alt="Screen shot" src="/img/screen-shot-2023-06-15-at-10-49-1.png" />
        <img className="image-13" alt="Image" src="/img/image-18.png" />
        <Frame
          hasPosterDesign={false}
          projectInformationStyle={{
            fontSize: "20px",
          }}
          style={{
            left: "667px",
            position: "absolute",
            top: "7502px",
          }}
          text1="Tools: Figma"
          text2="As mentioned in the overview, we started to create a mobile view of the website after gradually finishing the PC view. The link contains a low-fidelity prototype of the mobile view of 1Cademy notebooks and a first draft of the interface design of the activity tab for the profile page. I started to work on it after discussing the priority of what should be put in the mobile view and things that needed to pay more attention to, like accessibility and layouts, with UI team and project supervisor. This design was further discussed with the UX research team and supervisors for modifications."
          toolsAdobeStyle={{
            marginTop: "-1.00px",
          }}
        />
        <ButtonWrapper
          href="https://www.figma.com/proto/q9UIbvAFNv5oxhNdPsUEfe/Mobile-View?type=design&node-id=326-1713&scaling=scale-down&page-id=266%3A12&starting-point-node-id=326%3A1252&show-proto-sidebar=1"
          style={{
            left: "853px",
            position: "absolute",
            top: "8000px",
            width: "177px",
          }}
          text="View The Design"
          to="/communieat"
          viewMoreStyle={{
            marginLeft: "unset",
            marginRight: "unset",
            textDecoration: "underline",
          }}
        />
        <ButtonWrapper
          href="https://docs.google.com/document/d/1cAuZcasRZarp8h6vq37RPMN0btYySr7Iakgn7BZlAmY/edit?usp=sharing"
          style={{
            left: "527px",
            position: "absolute",
            top: "9760px",
            width: "280px",
          }}
          text="View The Experiment Script"
          to="/communieat"
          viewMoreStyle={{
            marginLeft: "unset",
            marginRight: "unset",
            textDecoration: "underline",
          }}
        />
        <p className="text-wrapper-223">Coordinating design, research, and developing teams</p>
        <p className="text-wrapper-224">
          After more than one year volunteering at 1Cademy, I had took part in computer science, UX research, cognitive
          psychology research, and UI design teams. Therefore, when it comes to handover the modifications and new
          tasks, I commonly worked as a coordinator between three teams when meetings required all three groups’
          participation. I generally explained how would the new design works to the developing team due to my computer
          science knowledge and how a change was required for the UI design team due to my UX knowledge.
        </p>
        <img className="screen-shot-18" alt="Screen shot" src="/img/screen-shot-2023-06-19-at-11-50-1.png" />
        <img className="screen-shot-19" alt="Screen shot" src="/img/screen-shot-2023-06-17-at-6-57-1.png" />
        </div>
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
