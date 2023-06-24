import React from "react";
import { ButtonWrapper } from "../../components/ButtonWrapper";
import { Group } from "../../components/Group";
import { GroupWrapper } from "../../components/GroupWrapper";
import { Link } from "react-router-dom";
import { FrameWrapper } from "../../components/FrameWrapper";
import { NavigationBar } from "../../components/NavigationBar";
import { Timeline } from "../../components/Timeline";
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
        <div className="component-3">
          <FrameWrapper
            mainPageStyle={{
              textAlign: "unset",
            }}
            polygon="/img/polygon-1.png"
            polygonStyle={{
              height: "28px",
              minWidth: "24px",
            }}
            style={{
              alignItems: "center",
              left: "0",
              position: "absolute",
              top: "13px",
            }}
            text="View My Projects"
            to="/1cademy-overview"
          />
          <Link className="frame-13" to="/design">
            <div className="next-project-UX-3">Design</div>
            <img className="polygon-3" alt="Polygon" src="/img/polygon-1-1.png" />
          </Link>
        </div>
        <div id="section3" className="group-49">
          <img className="group-50" alt="Group" src="/img/group-27.png" />
          <div className="frame-14">
            <img className="group-51" alt="Group" src="/img/group-25.png" />
            <div className="group-52">
              <div className="overlap-group-7">
                <div className="text-wrapper-93">EECS 442: Computer Vision</div>
              </div>
            </div>
            <div className="group-53">
              <div className="overlap-9">
                <p className="text-wrapper-94">EECS 376: Foundations of Computer Science</p>
              </div>
            </div>
            <div className="group-54">
              <div className="overlap-10">
                <p className="text-wrapper-95">EECS 440: System Design of a Search Engine</p>
              </div>
            </div>
          </div>
          <div className="group-55">
            <div className="overlap-11">
              <p className="text-wrapper-96">EECS 370: Intro to Computer Organization</p>
            </div>
          </div>
          <div className="frame-15">
            <img className="group-56" alt="Group" src="/img/group-26.png" />
            <div className="group-57">
              <div className="group-58">
                <div className="overlap-group-8">
                  <p className="text-wrapper-97">EECS 201: Computer Science Pragmatics</p>
                </div>
              </div>
            </div>
            <div className="group-59">
              <div className="overlap-12">
                <div className="text-wrapper-98">EECS 485: Web Systems</div>
              </div>
            </div>
            <div className="group-60">
              <div className="overlap-13">
                <div className="text-wrapper-99">EECS 445: Machine Learning</div>
              </div>
            </div>
          </div>
          <div className="group-61">
            <div className="group-62">
              <div className="overlap-group-9">
                <p className="text-wrapper-100">EECS 492: Introduction to Artificial Intelligence</p>
              </div>
            </div>
          </div>
        </div>
        <h1 id="section2" className="relevant-selected">RELEVANT SELECTED COURSES</h1>
        <div className="group-63">
          <div className="frame-16">
            <GroupWrapper
              cStyle={{
                left: "18px",
              }}
              overlapStyle={{
                width: "498px",
              }}
              style={{
                left: "unset",
                minWidth: "498px",
                top: "unset",
                width: "unset",
              }}
              text="Python"
            />
            <GroupWrapper
              overlapStyle={{
                width: "498px",
              }}
              style={{
                left: "unset",
                minWidth: "498px",
                top: "unset",
                width: "unset",
              }}
              text="C++"
            />
            <GroupWrapper
              cStyle={{
                left: "15px",
              }}
              overlapStyle={{
                width: "498px",
              }}
              style={{
                left: "unset",
                minWidth: "498px",
                top: "unset",
                width: "unset",
              }}
              text="HTML5"
            />
            <GroupWrapper
              cStyle={{
                left: "28px",
              }}
              overlapStyle={{
                width: "498px",
              }}
              style={{
                left: "unset",
                minWidth: "498px",
                top: "unset",
                width: "unset",
              }}
              text="CSS3"
            />
            <GroupWrapper
              cStyle={{
                left: "4px",
              }}
              overlapStyle={{
                width: "498px",
              }}
              style={{
                left: "unset",
                minWidth: "498px",
                top: "unset",
                width: "unset",
              }}
              text="Javascript"
            />
            <GroupWrapper
              cStyle={{
                left: "26px",
              }}
              overlapStyle={{
                width: "498px",
              }}
              style={{
                left: "unset",
                minWidth: "498px",
                top: "unset",
                width: "unset",
              }}
              text="React"
            />
            <GroupWrapper
              cStyle={{
                left: "32px",
              }}
              overlapStyle={{
                width: "498px",
              }}
              style={{
                left: "unset",
                minWidth: "498px",
                top: "unset",
                width: "unset",
              }}
              text="PHP"
            />
            <GroupWrapper
              cStyle={{
                left: "30px",
              }}
              overlapStyle={{
                width: "498px",
              }}
              style={{
                left: "unset",
                minWidth: "498px",
                top: "unset",
                width: "unset",
              }}
              text=".NET"
            />
            <div className="rectangle-12" />
            <div className="rectangle-13" />
            <div className="rectangle-14" />
            <div className="rectangle-15" />
          </div>
          <div className="frame-17">
            <GroupWrapper
              cStyle={{
                left: "29px",
              }}
              overlapStyle={{
                width: "498px",
              }}
              style={{
                left: "unset",
                minWidth: "498px",
                top: "unset",
                width: "unset",
              }}
              text="Swift"
            />
            <GroupWrapper
              cStyle={{
                left: "29px",
              }}
              overlapStyle={{
                width: "498px",
              }}
              style={{
                left: "unset",
                minWidth: "498px",
                top: "unset",
                width: "unset",
              }}
              text="Flask"
            />
            <GroupWrapper
              cStyle={{
                left: "2px",
              }}
              overlapStyle={{
                width: "498px",
              }}
              style={{
                left: "unset",
                minWidth: "498px",
                top: "unset",
                width: "unset",
              }}
              text="MongoDB"
            />
            <GroupWrapper
              cStyle={{
                left: "17px",
              }}
              overlapStyle={{
                width: "498px",
              }}
              style={{
                left: "unset",
                minWidth: "498px",
                top: "unset",
                width: "unset",
              }}
              text="SwiftUI"
            />
            <GroupWrapper
              cStyle={{
                left: "17px",
              }}
              overlapStyle={{
                width: "498px",
              }}
              style={{
                left: "unset",
                minWidth: "498px",
                top: "unset",
                width: "unset",
              }}
              text="NumPy"
            />
            <GroupWrapper
              cStyle={{
                left: "16px",
              }}
              overlapStyle={{
                width: "498px",
              }}
              style={{
                left: "unset",
                minWidth: "498px",
                top: "unset",
                width: "unset",
              }}
              text="MatLab"
            />
            <GroupWrapper
              cStyle={{
                left: "11px",
              }}
              overlapStyle={{
                width: "498px",
              }}
              style={{
                left: "unset",
                minWidth: "498px",
                top: "unset",
                width: "unset",
              }}
              text="Rest API"
            />
            <GroupWrapper
              cStyle={{
                left: "18px",
              }}
              overlapStyle={{
                width: "498px",
              }}
              style={{
                left: "unset",
                minWidth: "498px",
                top: "unset",
                width: "unset",
              }}
              text="Django"
            />
            <div className="rectangle-16" />
            <div className="rectangle-17" />
            <div className="rectangle-18" />
            <div className="rectangle-19" />
            <div className="rectangle-20" />
            <div className="rectangle-21" />
          </div>
        </div>
        <div className="skills">SKILLS</div>
        <div id="section1" className="projects-2">PROJECTS</div>
        <div className="frame-18">
          <div className="group-64">
            <img className="image-10" alt="Image" src="/img/image-23.png" />
            <div className="group-65">
              <img className="screen-shot-14" alt="Screen shot" src="/img/screen-shot-2023-05-31-at-4-30-1.png" />
              <p className="search-result-with">Search Result With Keyword “book”</p>
              <img className="image-11" alt="Image" src="/img/image-1.png" />
            </div>
            <div className="flex-container-11">
              <div className="text-48">
                <span className="text-wrapper-101">
                  UMICH EECS 485 WEB SYSTEMS PROJECTS
                  <br />
                </span>
              </div>
              <div className="text-49">
                <span className="text-wrapper-102">
                  JANUARY 2023 - APRIL 2023
                  <br />
                </span>
              </div>
              <div className="text-50">
                <span className="text-wrapper-103">
                  Developed an Instagram-like web application using React for front-end, Flask for back-end, and SQLite
                  for database, supporting features like user sign-in, posts and comments.
                  <br />
                </span>
              </div>
              <div className="text-51">
                <span className="text-wrapper-104">
                  Built a multi-worker and fault-tolerant MapReduce server in Python which can process user-submitted
                  tasks.
                  <br />
                </span>
              </div>
              <div className="text-52">
                <span className="text-wrapper-105">
                  Implemented a search engine from scratch, based on text segmentation, Hadoop MapReduce indexing, and
                  tf-idf scores.
                </span>
              </div>
            </div>
            <p className="git-repository-of">
              <span className="text-wrapper-106">Git repository of search engine project</span>
              <span className="text-wrapper-107">:</span>
              <span className="text-wrapper-108">&nbsp;</span>
              <a href="https://github.com/dmingke/portfolio_web_system05" rel="noopener noreferrer" target="_blank">
                <span className="text-wrapper-109">https://github.com/dmingke/portfolio_web_system05</span>
              </a>
            </p>
            <p className="git-respository-of">
              <span className="text-wrapper-110">Git respository of instagram-like web project</span>
              <span className="text-wrapper-111">: </span>
              <a
                href="https://github.com/dmingke/insta-like-application-portfoilo"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="text-wrapper-112">https://github.com/dmingke/insta-like-application-portfoilo</span>
              </a>
            </p>
          </div>
          <div className="group-66">
            <p className="git-respository-to">
              <span className="text-wrapper-113">Git Respository to see all EECS 281 Projects</span>
              <span className="text-wrapper-114">: </span>
              <a href="https://github.com/dmingke/cplus-projects-demo.git" rel="noopener noreferrer" target="_blank">
                <span className="text-wrapper-115">https://github.com/dmingke/cplus-projects-demo.git</span>
              </a>
              <span className="text-wrapper-116">&nbsp;</span>
            </p>
            <div className="flex-container-12">
              <div className="text-53">
                <span className="text-wrapper-117">
                  PROJECTS &amp; LABS FOR EECS 281 DATA STRUCTURES AND ALGORITHMS
                  <br />
                </span>
              </div>
              <div className="text-54">
                <span className="text-wrapper-118">
                  MAY 2022 - DECEMBER 2022
                  <br />
                </span>
              </div>
              <div className="text-55">
                <span className="text-wrapper-119">
                  Utilized inheritance and basic dynamic polymorphism to implement sorted priority queue, binary heap
                  priority queue and pairing heap priority queue developed from templated generic code.
                  <br />
                </span>
              </div>
              <div className="text-56">
                <span className="text-wrapper-120">
                  Applied branch and bound algorithm to solve TSP problem for complete weighted graph, used MST to get
                  the lower bound for remaining cost, and explored various heuristic approaches to achieve a
                  nearly-optimal solution.
                  <br />
                </span>
              </div>
              <div className="text-57">
                <span className="text-wrapper-121">
                  Implemented a C++ version of the game 2048 which responded to player&#39;s keystrokes, and enabled
                  customized tile values such as Unicode Emojis by reading from files provided by the player.
                </span>
              </div>
            </div>
          </div>
          <div className="frame-19">
            <div className="flex-container-wrapper">
              <div className="flex-container-13">
                <div className="text-58">
                  <span className="text-wrapper-122">
                    1Cademy Web development Assistant <br />
                  </span>
                </div>
                <div className="text-59">
                  <span className="text-wrapper-123">
                    January 2022 - December 2022
                    <br />
                  </span>
                </div>
                <div className="text-60">
                  <span className="text-wrapper-124">
                    Collaborated with a diverse team of designers, developers, and content creators to ensure seamless
                    integration of UI/UX designs with back-end functionality.
                    <br />
                  </span>
                </div>
                <div className="text-61">
                  <span className="text-wrapper-125">
                    Utilized HTML, CSS, and React for front-end development, and worked on server-side development using
                    Flask, ensuring an efficient and responsive web environment.
                    <br />
                  </span>
                </div>
                <div className="text-62">
                  <span className="text-wrapper-126">
                    Participated in regular meetings and agile development sprints, providing feedback and insights on
                    development progress and challenges.
                    <br />
                  </span>
                </div>
                <div className="text-63">
                  <span className="text-wrapper-127">
                    Assisted in the creation and maintenance of documentation, including design systems, technical
                    specifications, and developer resources, using tools like Confluence.
                    <br />
                  </span>
                </div>
                <div className="text-64">
                  <span className="text-wrapper-128">
                    Supported SEO initiatives through the integration of meta tags, optimized content, and structured
                    data, contributing to a 12% increase in organic web traffic.
                  </span>
                </div>
              </div>
            </div>
            <img className="image-12" alt="Image" src="/img/image-2.png" />
            <ButtonWrapper
              href="https://1cademy.com/"
              style={{
                height: "45px",
                left: "unset",
                top: "unset",
                width: "293px",
              }}
              text="Click To View The Web-page"
              viewMoreStyle={{
                marginBottom: "unset",
                marginLeft: "unset",
                marginRight: "unset",
                marginTop: "-0.50px",
                textDecoration: "underline",
              }}
            />
          </div>
        </div> 
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
