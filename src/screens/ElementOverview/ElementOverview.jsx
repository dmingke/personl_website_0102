import React from "react";
import { Component } from "../../components/Component";
import { ComponentWrapper } from "../../components/ComponentWrapper";
import { Frame } from "../../components/Frame";
import { Group } from "../../components/Group";
import { NavigationBar } from "../../components/NavigationBar";
import { Timeline } from "../../components/Timeline";
import { PropertyDefaultWrapper } from "../../components/PropertyDefaultWrapper";
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
        <div className="overlap-10">
          <img className="screen-shot-19" alt="Screen shot" src="/img/screen-shot-2023-06-19-at-6-17-1.png" />
          <div className="rectangle-22" />
          <div className="frame-96">
            <h1 className="text-wrapper-123">1Cademy Project</h1>
            <p className="a-collaborating">
              <span className="text-wrapper-124">
                A Collaborating learning community in Multiple Fields of Study
                <br />
                <br />
              </span>
              <a href="https://1cademy.com" rel="noopener noreferrer" target="_blank">
                <span className="text-wrapper-125">Visit the website</span>
              </a>
            </p>
          </div>
          <div className="group-141">
            <ComponentWrapper
              className="design-component-instance-node-5"
              text="Tasks Overview"
              text1="Conducting experiment sessions with participants, Web development, UI design, UX research, Reading and adding nodes to 1Cademy notebooks, Weekly meetings, Discussing research and web design, and so on"
              usabilityNeedsAndClassName="component-23"
            />
            <ComponentWrapper
              className="component-24"
              text="Team"
              text1="50 People Team"
              usabilityNeedsAndClassName="component-25"
            />
            <ComponentWrapper
              className="component-26"
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
              usabilityNeedsAndClassName="component-27"
            />
            <ComponentWrapper
              className="component-28"
              text="Timeline"
              text1="2020.1 - 2023.4"
              usabilityNeedsAndClassName="component-25"
            />
            <ComponentWrapper
              className="component-29"
              text="Purpose"
              text1="Publishing research papers, Improving 1Cademy for higher usability and efficiency, Facilitating research progress, Adding new knowledge nodes and learning in the 1Cademy community"
              usabilityNeedsAndClassName="component-30"
            />
          </div>
          <div className="frame-97">
            <div className="group-142">
              <div className="ellipse-6" />
              <div className="ellipse-7" />
              <div className="ellipse-8" />
              <div className="ellipse-9" />
              <img className="line-17" alt="Line" src="/img/line-10-1.png" />
              <img className="line-18" alt="Line" src="/img/line-16-1.png" />
              <img className="line-19" alt="Line" src="/img/line-21.png" />
              <img className="line-20" alt="Line" src="/img/line-20.png" />
              <div id="1" className="frame-98">
                <div className="text-wrapper-126">Overview</div>
                <div className="frame-99">
                  <div className="frame-99">
                    <div className="group-143">
                      <p className="text-wrapper-127">UI/UX Design &amp; UX Research</p>
                      <p className="as-a-member-of">
                        As a member of 1Cademy,&nbsp;&nbsp;at first, I focused on UX research and UI design. I
                        collaborated with the UX research team and UI design team to develop 1Cademy multiple websites
                        (experimental site to perform remote experiment sessions, 1cademy.com AKA 1cademy main page for
                        presenting all key information of 1Cademy, and 1Cademy notebooks for learning and adding
                        knowledge nodes) on Figma and improve their usability and accessibility.&nbsp;&nbsp;We divided a
                        part of the jobs to each person and make suggestions for each other’s design in the weekly
                        meeting. <br />
                        Later on, after gradually perfecting PC view, I also helped to design a low-fidelity prototype
                        of the mobile view of the website and perform UX research methods, mainly heuristic evaluations,
                        competitive analysis, usability testing, and surveys with other team members. Therefore, the
                        whole process contained a lot of teamwork and communication.
                      </p>
                    </div>
                    <div className="group-144">
                      <div className="flex-container-39">
                        <div className="text-41">
                          <span className="text-wrapper-128">
                            After a period of working with the project supervisor Iman Yeckehzaare, I gradually
                            participated in two more projects. Firstly, I help to progress the cognitive psychological
                            research project, Improving Collaborative Notetaking Through Finding and Visualizing
                            Prerequisite Knowledge Links, by <br />
                          </span>
                        </div>
                        <div className="text-42">
                          <span className="text-wrapper-128">
                            conducting and monitoring experiment sessions remotely, <br />
                          </span>
                        </div>
                        <div className="text-42">
                          <span className="text-wrapper-128">
                            suggesting ideas to improve the design of experimental procedures, <br />
                          </span>
                        </div>
                        <div className="text-42">
                          <span className="text-wrapper-128">
                            reading related research papers for referring and interpreting research results, <br />
                          </span>
                        </div>
                        <div className="text-42">
                          <span className="text-wrapper-128">
                            analyzing research data by using R and SPSS. <br />
                          </span>
                        </div>
                        <div className="text-41">
                          <span className="text-wrapper-128">
                            Secondly, I facilitated the computer science team by learning and creating nodes concerning
                            deep learning in 1Cademy notebooks and coding 1Cademy back-end using Python to write Flask
                            applications and front-end using React.
                          </span>
                        </div>
                      </div>
                      <p className="text-wrapper-127">Research Assistant &amp; Front-end Programming</p>
                    </div>
                    <div className="group-145">
                      <p className="text-wrapper-129">Coordinating design, research, and developing teams</p>
                      <p className="text-wrapper-130">
                        After more than one year volunteering at 1Cademy, I took part in and worked on some projects
                        from all computer science, UX, cognitive psychology research, and UI design teams. Therefore,
                        when it comes to connecting three groups for requested modifications and new development tasks,
                        I commonly worked as a coordinator between three teams to explain how would the new design works
                        to the developing team using my knowledge of computer science and why a change is necessary for
                        the UI design team using my UX knowledge.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="2" className="group-146">
              <div className="text-wrapper-131">UI/UX Design: Navigation Bar</div>
              <PropertyDefaultWrapper
                className="button-42"
                href="https://www.figma.com/file/7CR6N08b7K4NcUXNmDpMMS/Untitled?type=design&node-id=0%3A1&t=eHCGVhAy2qKOznoA-1"
                icons="/img/icons-1.png"
                iconsClassName="button-44"
                property1="link-to-other-pages"
                text="Click To View The Work In Figma"
                viewMoreClassNameOverride="button-43"
              />
              <p className="text-wrapper-132">
                Following the design guide of 1Cademy, I designed the first version of the navigation bar based on the
                instructions from my team leader and project supervisor Iman. We argued about each component of the
                navigation bar in the meeting before starting the design. After finishing the first draft of the basic
                layout, it took another iteration of meetings, getting opinions from UX/UI teams’ members, and revising.
                I made four variants, login (a registered user), logout (no account), and researcher (after
                application), without a search bar for demonstration. The final decision about what the navigation bar
                should look like was deliberated later in the meeting. The current navigation bar on 1cademy.com was the
                third version designed by another teammate based on my version.
              </p>
              <div className="group-147">
                <div className="overlap-group-17">
                  <div className="ellipse-10" />
                  <img className="line-21" alt="Line" src="/img/line-21-1.png" />
                </div>
              </div>
              <img className="image-25" alt="Image" src="/img/image-20.png" />
            </div>
            <div className="group-148">
              <p className="text-wrapper-133">UI/UX Design: Wireframing &amp; Search page</p>
              <PropertyDefaultWrapper
                className="button-45"
                href="https://www.figma.com/file/7CR6N08b7K4NcUXNmDpMMS/Untitled?type=design&node-id=1%3A2624&t=eHCGVhAy2qKOznoA-1"
                icons="/img/icons-10.png"
                property1="link-to-other-pages"
                text="Click To View The Work In Figma"
                viewMoreClassNameOverride="button-46"
              />
              <p className="p-2">
                <span className="text-wrapper-128">
                  Before making the high-fidelity prototype of the search page, we first worked on the low-fidelity
                  wireframe during and after the meeting, which took three iterations to brainstorm, suggest, and
                  revise. Each component required an amount of consideration on usability, aesthetics, accessibility,
                  and information hierarchy. We started it by gathering what should be put and graphing the information
                  hierarchy, and then based on the information hierarchy to decide where each element should be. With
                  the final decisions and design requirements, we wireframed the webpage on{" "}
                </span>
                <span className="text-wrapper-134">Balsamig</span>
                <span className="text-wrapper-128">
                  {" "}
                  and then asked for others’ opinions to revise. Finally, after the wireframe got approved, I and
                  another two UI team members collaborated to create the high-fidelity design by relying on the 1Cademy
                  Figma library and the wireframe.{" "}
                </span>
              </p>
              <div className="group-149">
                <div className="overlap-group-17">
                  <div className="ellipse-10" />
                  <img className="line-21" alt="Line" src="/img/line-21-1.png" />
                </div>
              </div>
            </div>
            <div className="group-150">
              <p className="text-wrapper-135">UI Design: Redesign the sidebar</p>
              <div className="flex-container-40">
                <div className="text-43">
                  <span className="text-wrapper-128">
                    I identified issues with the old design of the sidebar in
                    <br />
                  </span>
                </div>
                <div className="text-43">
                  <span className="text-wrapper-128">
                    aesthetics, <br />
                  </span>
                </div>
                <div className="text-43">
                  <span className="text-wrapper-128">
                    space redundancy, <br />
                  </span>
                </div>
                <div className="text-43">
                  <span className="text-wrapper-128">
                    non-intuitive layout: the link icon occupies one line itself, <br />
                  </span>
                </div>
                <div className="text-43">
                  <span className="text-wrapper-128">
                    usability: mainly users need to click item by item to mark all read, <br />
                  </span>
                </div>
                <div className="text-43">
                  <span className="text-wrapper-128">
                    word visibility: white font on orange background; gray font on white background,&nbsp;&nbsp; <br />
                  </span>
                </div>
                <div className="text-44">
                  <span className="text-wrapper-128">
                    and confirmed with project supervisor Ima and UX team leader Catherine the need for a new design. I
                    started to redesign the interface of the sidebar, and then another team member finished the
                    interaction design.
                  </span>
                </div>
              </div>
              <div className="group-151">
                <div className="overlap-group-18">
                  <div className="ellipse-10" />
                  <img className="line-22" alt="Line" src="/img/line-21-3.png" />
                </div>
              </div>
              <img className="image-26" alt="Image" src="/img/image-18.png" />
            </div>
            <div className="group-152">
              <p className="text-wrapper-135">UI Design: Mini Profile - Activity Tab</p>
              <div className="group-153">
                <div className="overlap-group-19">
                  <div className="ellipse-10" />
                  <img className="line-23" alt="Line" src="/img/line-21-4.png" />
                </div>
              </div>
              <img className="screen-shot-20" alt="Screen shot" src="/img/screen-shot-2023-06-15-at-10-49-1.png" />
              <Frame
                className="frame-100"
                hasCoursesPoster={false}
                projectInformationClassName="frame-102"
                text1="Tools: Figma"
                text2="We started to create a mobile view of the website after gradually finishing the PC view. The link contains a low-fidelity prototype of the mobile view of 1Cademy notebooks and a first draft of the interface design of the activity tab for the profile page. I started to work on it after discussing the priority of what should be put in the mobile view and things that needed to pay more attention to, like accessibility and layouts, with UI team and project supervisor. This design was further discussed with the UX research team and supervisors for modifications."
                toolsAdobeClassName="frame-101"
              />
              <PropertyDefaultWrapper
                className="button-47"
                href="https://www.figma.com/proto/q9UIbvAFNv5oxhNdPsUEfe/Mobile-View?type=design&node-id=326-1713&scaling=scale-down&page-id=266%3A12&starting-point-node-id=326%3A1252&show-proto-sidebar=1"
                icons="/img/icons-10.png"
                property1="link-to-other-pages"
                text="View The Design"
                viewMoreClassNameOverride="button-46"
              />
            </div>
            <div className="group-154">
              <div className="group-155">
                <div className="ellipse-11" />
                <img className="line-24" alt="Line" src="/img/line-18-1.png" />
              </div>
              <div id="3" className="group-156">
                <div className="text-wrapper-136">UX Research: Heuristic Evaluation</div>
                <p className="text-wrapper-137">
                  Running heuristic evaluation on 1cademy.com with 5 other members from the UX research group. We
                  carefully evaluate the 5 severity levels (from 0, the least severe, to 4, the most severe) of 10
                  heuristic evaluation principles. I made this table for group members to fill up using Figma. 6 members
                  all presented severe issues they found out and discussed which problems need to fix first by choosing
                  the one we all agree upon. After that, I and another UX research member first made a very low-fidelity
                  prototype for explaining why this is a usability issue and demonstrating our solution proposal and
                  then met with the UI team via Zoom to discuss the viability of this solution and what to do next.
                </p>
              </div>
              <img className="image-27" alt="Image" src="/img/image-21.png" />
            </div>
            <div className="group-157">
              <div className="text-wrapper-138">Empathize: Persona</div>
              <p className="creating-personas">
                <span className="text-wrapper-128">
                  Creating personas for 1Cademy potential users to empathize with users and facilitate the developer
                  teams and the UI team to gain a deeper understanding of users&#39; behavior and needs. When discussing
                  user needs we would refer to Paul Doe and Sarah Johns as our main users and converse more effectively
                  and focused since we all know who and what characters we were talking about in the meetings. I
                  recommended during UX and UI collaborating meetings to create personas because when we brainstorm,
                  there were no specific user images for us to focus on their needs. Everyone uses themselves or people
                  they know as users and talks about their potential needs. These two fictitious characters prevent this
                  from happening. For creating these two personas, we used the demographic information of our past
                  research participants provided in their experiment sessions of cognitive psychological research
                  projects as they were all people who are users of the website{" "}
                </span>
                <span className="text-wrapper-139">
                  (every team member is required to participate in one 1Cademy experiment to be considered as an
                  applicant)
                </span>
                <span className="text-wrapper-128">. </span>
              </p>
              <div className="group-158">
                <div className="overlap-group-20">
                  <div className="ellipse-11" />
                  <img className="line-25" alt="Line" src="/img/line-13-1.png" />
                </div>
              </div>
              <div className="overlap-11">
                <div className="rectangle-wrapper">
                  <div className="rectangle-23" />
                </div>
                <div className="group-159">
                  <div className="rectangle-24" />
                </div>
              </div>
            </div>
            <div className="group-160">
              <div className="text-wrapper-140">Empathize: Scenarios</div>
              <p className="text-wrapper-141">
                For the same purpose as personas and using the same demographic data, in order to further emphasize and
                visualize user images, we wrote two scenarios of our two characters from personas using 1Cademy.
                Following is what we wrote.
              </p>
              <div className="group-161">
                <div className="overlap-group-21">
                  <div className="ellipse-11" />
                  <img className="line-26" alt="Line" src="/img/line-21-5.png" />
                </div>
              </div>
              <div className="group-162">
                <div className="overlap-12">
                  <div className="group-163">
                    <div className="paul-wrapper">
                      <div className="paul">[Paul]</div>
                    </div>
                  </div>
                  <img className="image-28" alt="Image" src="/img/image-11.png" />
                </div>
              </div>
            </div>
            <div id="4" className="group-164">
              <div className="text-wrapper-135">Research Assistant</div>
              <p className="text-wrapper-142">
                By participating in a cognitive psychological research project regarding the topic of Improving
                Collaborative Notetaking Through Finding and Visualizing Prerequisite Knowledge Links, I facilitated
                proceeding experiment sessions on a daily basis, monitoring and guiding participants to complete their
                experiments, answering their questions, taking notes of their reading sequences for analysis. Before all
                experiments started, we created one experiment script for other research assistants to ensure consistent
                procedures and reduce potential variables. We also discussed experiment design in many meetings and
                spent much time limiting independent variables and selecting the ACT articles that fit our requirements.
                All selections and designs require support from published scientific journals, so we read dozens of
                journals before presenting an idea or a change.
              </p>
              <div className="group-165">
                <div className="overlap-group-22">
                  <div className="ellipse-12" />
                  <img className="line-27" alt="Line" src="/img/line-21-6.png" />
                </div>
              </div>
              <PropertyDefaultWrapper
                className="button-48"
                href="https://docs.google.com/document/d/1cAuZcasRZarp8h6vq37RPMN0btYySr7Iakgn7BZlAmY/edit?usp=sharing"
                icons="/img/icons-1.png"
                iconsClassName="button-50"
                property1="link-to-other-pages"
                text="View The Experiment Script"
                viewMoreClassNameOverride="button-49"
              />
            </div>
            <div className="group-166">
              <div className="text-wrapper-135">Presenting &amp; Modifying nodes</div>
              <p className="text-wrapper-142">
                Another task all members needed to complete every two weeks was to create a node/nodes for a paper
                recently read. After writing one node/node, we presented it in the meetings in order to get up-voted for
                publishing the node/s. Those who have not gotten enough upvotes would be pended. This process was to
                both facilitate learning and simulate a new learning approach that 1Cademy was experimenting with and
                promoting, that is, learning by concept maps and knowledge visualization, supported by multiple
                recognized cognitive science and cognitive psychological research articles.
              </p>
              <div className="group-149">
                <div className="overlap-group-17">
                  <div className="ellipse-12" />
                  <img className="line-21" alt="Line" src="/img/line-21-1.png" />
                </div>
              </div>
              <img className="screen-shot-21" alt="Screen shot" src="/img/screen-shot-2023-06-19-at-11-50-1.png" />
              <img className="screen-shot-22" alt="Screen shot" src="/img/screen-shot-2023-06-17-at-6-57-1.png" />
            </div>
            <div className="group-167">
              <div className="text-wrapper-133">Takeaways</div>
              <p className="p-2">
                I volunteered at 1Cademy for a very long period and spent most of my extracurricular time helping,
                developing, and learning in this community. I have participated in more than three research projects and
                contributed many improving ideas. Through tasks assigned, I learned many things from team leaders and
                other members and gained tons of experience, including communication skills, knowledge in UX/UI design,
                deep learning, and other computer science fields, experience with Figma, cognitive psychology, knowledge
                visualization, interpersonal skills, public speaking, and much more. This community gave me the
                opportunity to apply my interdisciplinary knowledge and learn more from real projects. Every opinion and
                suggestion from other researchers during meetings or collaborations was helpful for me to grow my
                skills. Working in such a multidisciplinary, inclusive, and diverse group, I kept being impressed
                and&nbsp;&nbsp;taught by others’ novel and creative ideas which I have never thought of.
              </p>
              <div className="group-149">
                <div className="overlap-group-17">
                  <div className="ellipse-12" />
                  <img className="line-21" alt="Line" src="/img/line-21-1.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Component
          className="component-9-instance"
          divWrapperPolygon="/img/polygon-1-21.png"
          divWrapperPolygonClassName="component-31"
          frameWrapperPolygon="/img/polygon-1-20.png"
          frameWrapperPolygonClassName="component-31"
          frameWrapperText="Programming"
          to="/programming-original"
          to1="/expedia-students-travel"
        />
      </div>
      <Timeline data={data} /> 
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
