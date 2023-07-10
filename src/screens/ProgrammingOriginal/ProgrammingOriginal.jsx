import React from "react";
import { Link } from "react-router-dom";
import { FrameWrapper } from "../../components/FrameWrapper";
import { Group } from "../../components/Group";
import { GroupWrapper } from "../../components/GroupWrapper";
import { NavigationBar } from "../../components/NavigationBar";
import { Timeline } from "../../components/Timeline";
import { PropertyDefaultWrapper } from "../../components/PropertyDefaultWrapper";
import "./style.css";

const data = [
  { id: "section1", name: "Projects" },
  { id: "section2", name: "Skills" },
  { id: "section3", name: "Relevant Courses" },
];

export const ProgrammingOriginal = () => {
  return (
    <div className="programming-original">
      <div className="div-6">
        <div className="component-6">
          <FrameWrapper
            className="frame-46"
            mainPageClassName="frame-48"
            polygon="/img/polygon-1.png"
            polygonClassName="frame-47"
            text="View My Projects"
            to="/1cademy-overview"
          />
          <Link className="frame-49" to="/design">
            <div className="next-project-UX-6">Design</div>
            <img className="polygon-6" alt="Polygon" src="/img/polygon-1-1.png" />
          </Link>
        </div>
        <h1 id="section1" className="projects-2">PROJECTS</h1>
        <div className="frame-50">
          <div className="frame-51">
            <div className="frame-52">
              <div className="flex-container-12">
                <div className="text-16">
                  <span className="text-wrapper-59">
                    UMICH EECS 485 WEB SYSTEMS PROJECTS
                    <br />
                  </span>
                </div>
                <div className="text-16">
                  <span className="text-wrapper-60">
                    JANUARY 2023 - APRIL 2023
                    <br />
                  </span>
                </div>
                <div className="text-17">
                  <span className="text-wrapper-60">
                    Developed an Instagram-like web application using React for front-end, Flask for back-end, and
                    SQLite for database, supporting features like user sign-in, posts and comments.
                    <br />
                  </span>
                </div>
                <div className="text-16">
                  <span className="text-wrapper-60">
                    Built a multi-worker and fault-tolerant MapReduce server in Python which can process user-submitted
                    tasks.
                    <br />
                  </span>
                </div>
                <div className="text-16">
                  <span className="text-wrapper-60">
                    Implemented a search engine from scratch, based on text segmentation, Hadoop MapReduce indexing, and
                    tf-idf scores.
                  </span>
                </div>
              </div>
              <div className="group-48">
                <div className="group-49">
                  <img className="screen-shot-12" alt="Screen shot" src="/img/screen-shot-2023-05-31-at-4-30-1.png" />
                  <p className="search-result-with">Search Result With Keyword “book”</p>
                  <img className="image-11" alt="Image" src="/img/image-1-2.png" />
                </div>
                <PropertyDefaultWrapper
                  className="button-15"
                  href="https://github.com/dmingke/portfolio_web_system05"
                  property1="g-it"
                  socialIcons="/img/social-icons-1.png"
                  text="Git: search engine project"
                  viewMoreClassNameOverride="button-16"
                />
              </div>
              <div className="group-51">
                <img className="image-12" alt="Image" src="/img/image-23.png" />
                <PropertyDefaultWrapper
                  className="button-17"
                  href="https://github.com/dmingke/insta-like-application-portfoilo"
                  property1="g-it"
                  socialIcons="/img/social-icons.png"
                  text="Git: instagram-like web project"
                  viewMoreClassNameOverride="button-18"
                />
              </div>
            </div>
            <div className="group-52">
              <div className="flex-container-wrapper">
                <div className="flex-container-13">
                  <div className="text-16">
                    <span className="text-wrapper-59">
                      PROJECTS &amp; LABS FOR EECS 281 DATA STRUCTURES AND ALGORITHMS
                      <br />
                    </span>
                  </div>
                  <div className="text-16">
                    <span className="text-wrapper-61">
                      MAY 2022 - DECEMBER 2022
                      <br />
                    </span>
                  </div>
                  <div className="text-17">
                    <span className="text-wrapper-61">
                      Utilized inheritance and basic dynamic polymorphism to implement sorted priority queue, binary
                      heap priority queue and pairing heap priority queue developed from templated generic code.
                      <br />
                    </span>
                  </div>
                  <div className="text-17">
                    <span className="text-wrapper-61">
                      Applied branch and bound algorithm to solve TSP problem for complete weighted graph, used MST to
                      get the lower bound for remaining cost, and explored various heuristic approaches to achieve a
                      nearly-optimal solution.
                      <br />
                    </span>
                  </div>
                  <div className="text-17">
                    <span className="text-wrapper-61">
                      Implemented a C++ version of the game 2048 which responded to player&#39;s keystrokes, and enabled
                      customized tile values such as Unicode Emojis by reading from files provided by the player.
                    </span>
                  </div>
                </div>
              </div>
              <PropertyDefaultWrapper
                className="button-19"
                href="https://github.com/dmingke/cplus-projects-demo.git"
                property1="g-it"
                socialIcons="/img/social-icons.png"
                text="Git: All C++ Projects"
                viewMoreClassNameOverride="button-18"
              />
            </div>
            <div className="frame-53">
              <div className="group-53">
                <div className="flex-container-14">
                  <div className="text-16">
                    <span className="text-wrapper-59">
                      1Cademy Web development Assistant <br />
                    </span>
                  </div>
                  <div className="text-16">
                    <span className="text-wrapper-61">
                      January 2022 - December 2022
                      <br />
                    </span>
                  </div>
                  <div className="text-17">
                    <span className="text-wrapper-61">
                      Collaborated with a diverse team of designers, developers, and content creators to ensure seamless
                      integration of UI/UX designs with back-end functionality.
                      <br />
                    </span>
                  </div>
                  <div className="text-17">
                    <span className="text-wrapper-61">
                      Utilized HTML, CSS, and React for front-end development, and worked on server-side development
                      using Flask, ensuring an efficient and responsive web environment.
                      <br />
                    </span>
                  </div>
                  <div className="text-17">
                    <span className="text-wrapper-61">
                      Participated in regular meetings and agile development sprints, providing feedback and insights on
                      development progress and challenges.
                      <br />
                    </span>
                  </div>
                  <div className="text-17">
                    <span className="text-wrapper-61">
                      Assisted in the creation and maintenance of documentation, including design systems, technical
                      specifications, and developer resources, using tools like Confluence.
                      <br />
                    </span>
                  </div>
                  <div className="text-17">
                    <span className="text-wrapper-61">
                      Supported SEO initiatives through the integration of meta tags, optimized content, and structured
                      data, contributing to a 12% increase in organic web traffic.
                    </span>
                  </div>
                </div>
              </div>
              <img className="image-13" alt="Image" src="/img/image.png" />
              <PropertyDefaultWrapper
                className="button-20"
                href="https://1cademy.com/"
                icons="/img/icons-4.png"
                iconsClassName="button-22"
                property1="link-to-other-pages"
                text="Click To View The Web-page"
                viewMoreClassNameOverride="button-21"
              />
            </div>
          </div>
          <div className="group-54">
            <div className="group-55">
              <div className="frame-54">
                <GroupWrapper
                  cClassName="group-57"
                  className="group-19-instance"
                  overlapClassName="group-56"
                  text="Python"
                />
                <GroupWrapper className="group-19-instance" overlapClassName="group-56" text="C++" />
                <GroupWrapper
                  cClassName="group-58"
                  className="group-19-instance"
                  overlapClassName="group-56"
                  text="HTML5"
                />
                <GroupWrapper
                  cClassName="group-59"
                  className="group-19-instance"
                  overlapClassName="group-56"
                  text="CSS3"
                />
                <GroupWrapper
                  cClassName="group-60"
                  className="group-19-instance"
                  overlapClassName="group-56"
                  text="Javascript"
                />
                <GroupWrapper
                  cClassName="group-61"
                  className="group-19-instance"
                  overlapClassName="group-56"
                  text="React"
                />
                <GroupWrapper
                  cClassName="group-62"
                  className="group-19-instance"
                  overlapClassName="group-56"
                  text="PHP"
                />
                <GroupWrapper
                  cClassName="group-63"
                  className="group-19-instance"
                  overlapClassName="group-56"
                  text=".NET"
                />
                <div className="rectangle-4" />
                <div className="rectangle-5" />
                <div className="rectangle-6" />
                <div className="rectangle-7" />
              </div>
              <div className="frame-55">
                <GroupWrapper
                  cClassName="group-64"
                  className="group-19-instance"
                  overlapClassName="group-56"
                  text="Swift"
                />
                <GroupWrapper
                  cClassName="group-64"
                  className="group-19-instance"
                  overlapClassName="group-56"
                  text="Flask"
                />
                <GroupWrapper
                  cClassName="group-65"
                  className="group-19-instance"
                  overlapClassName="group-56"
                  text="MongoDB"
                />
                <GroupWrapper
                  cClassName="group-66"
                  className="group-19-instance"
                  overlapClassName="group-56"
                  text="SwiftUI"
                />
                <GroupWrapper
                  cClassName="group-66"
                  className="group-19-instance"
                  overlapClassName="group-56"
                  text="NumPy"
                />
                <GroupWrapper
                  cClassName="group-67"
                  className="group-19-instance"
                  overlapClassName="group-56"
                  text="MatLab"
                />
                <GroupWrapper
                  cClassName="group-68"
                  className="group-19-instance"
                  overlapClassName="group-56"
                  text="Rest API"
                />
                <GroupWrapper
                  cClassName="group-57"
                  className="group-19-instance"
                  overlapClassName="group-56"
                  text="Django"
                />
                <div className="rectangle-8" />
                <div className="rectangle-9" />
                <div className="rectangle-10" />
                <div className="rectangle-11" />
                <div className="rectangle-12" />
                <div className="rectangle-13" />
              </div>
            </div>
            <div id="section2" className="skills">SKILLS</div>
          </div>
          <div className="group-69">
            <div className="group-70">
              <img className="group-71" alt="Group" src="/img/group-27.png" />
              <div className="frame-56">
                <img className="group-72" alt="Group" src="/img/group-25.png" />
                <div className="group-73">
                  <div className="overlap-group-8">
                    <div className="text-wrapper-62">EECS 442: Computer Vision</div>
                  </div>
                </div>
                <div className="group-73">
                  <div className="overlap-group-8">
                    <p className="text-wrapper-63">EECS 376: Foundations of Computer Science</p>
                  </div>
                </div>
                <div className="group-73">
                  <div className="overlap-group-8">
                    <p className="text-wrapper-63">EECS 440: System Design of a Search Engine</p>
                  </div>
                </div>
              </div>
              <div className="group-74">
                <div className="overlap-group-8">
                  <p className="text-wrapper-63">EECS 370: Intro to Computer Organization</p>
                </div>
              </div>
              <div className="frame-57">
                <img className="group-72" alt="Group" src="/img/group-26.png" />
                <div className="group-75">
                  <div className="group-76">
                    <div className="overlap-group-8">
                      <p className="text-wrapper-64">EECS 201: Computer Science Pragmatics</p>
                    </div>
                  </div>
                </div>
                <div className="group-73">
                  <div className="overlap-group-8">
                    <div className="text-wrapper-65">EECS 485: Web Systems</div>
                  </div>
                </div>
                <div className="group-73">
                  <div className="overlap-group-8">
                    <div className="text-wrapper-66">EECS 445: Machine Learning</div>
                  </div>
                </div>
              </div>
              <div className="group-77">
                <div className="group-76">
                  <div className="overlap-group-8">
                    <p className="text-wrapper-67">EECS 492: Introduction to Artificial Intelligence</p>
                  </div>
                </div>
              </div>
            </div>
            <div id="section3" className="relevant-selected">RELEVANT SELECTED COURSES</div>
          </div>
        </div>
      </div>
      <Timeline data={data} />
      <NavigationBar
        style={{
          position: "absolute",
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
