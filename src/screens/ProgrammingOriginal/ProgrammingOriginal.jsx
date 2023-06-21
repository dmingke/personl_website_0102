import React from "react";
import { ButtonWrapper } from "../../components/ButtonWrapper";
import { Group } from "../../components/Group";
import { GroupWrapper } from "../../components/GroupWrapper";
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
      <div className="div-8">
        <div id="section3" className="group-35">
          <img className="group-36" alt="Group" src="/img/group-25-2x.png" />
          <img className="group-37" alt="Group" src="/img/group-26.png" />
          <img className="group-38" alt="Group" src="/img/group-27.png" />
          <div className="group-39">
            <div className="overlap-group-6">
              <div className="text-wrapper-117">EECS442: Computer Vision</div>
            </div>
          </div>
          <div className="group-40">
            <div className="overlap-16">
              <p className="text-wrapper-118">
                EECS 376: Foundations of Computer Science
              </p>
            </div>
          </div>
          <div className="group-41">
            <div className="overlap-17">
              <div className="text-wrapper-119">EECS 485: Web Systems</div>
            </div>
          </div>
          <div className="group-42">
            <div className="overlap-18">
              <p className="text-wrapper-120">
                EECS 370: Intro to Computer Organization
              </p>
            </div>
          </div>
          <div className="group-43">
            <div className="group-44">
              <div className="overlap-group-7">
                <p className="text-wrapper-121">
                  EECS 201: Computer Science Pragmatics
                </p>
              </div>
            </div>
          </div>
          <div className="group-45">
            <div className="group-46">
              <div className="overlap-group-8">
                <p className="text-wrapper-122">
                  EECS 492: Introduction to Artificial Intelligence
                </p>
              </div>
            </div>
          </div>
        </div>
        <h1 className="relevant-selected">RELEVANT SELECTED COURSES</h1>
        <div id="section2" className="group-47">
          <div className="frame-16">
            <GroupWrapper
              cStyle={{
                left: "18px",
              }}
              style={{
                left: "0",
                position: "absolute",
                top: "0",
              }}
              text="Python"
            />
            <GroupWrapper
              style={{
                left: "0",
                position: "absolute",
                top: "105px",
              }}
              text="C++"
            />
            <GroupWrapper
              cStyle={{
                left: "15px",
              }}
              style={{
                left: "0",
                position: "absolute",
                top: "210px",
              }}
              text="HTML5"
            />
            <GroupWrapper
              cStyle={{
                left: "28px",
              }}
              style={{
                left: "0",
                position: "absolute",
                top: "315px",
              }}
              text="CSS3"
            />
            <div className="overlap-19">
              <GroupWrapper
                cStyle={{
                  left: "4px",
                }}
                style={{
                  left: "0",
                  position: "absolute",
                  top: "0",
                }}
                text="Javascript"
              />
              <div className="rectangle-10" />
            </div>
            <div className="overlap-20">
              <GroupWrapper
                cStyle={{
                  left: "26px",
                }}
                style={{
                  left: "0",
                  position: "absolute",
                  top: "0",
                }}
                text="React"
              />
              <div className="rectangle-11" />
            </div>
          </div>
          <div className="frame-17">
            <GroupWrapper
              cStyle={{
                left: "17px",
              }}
              style={{
                left: "0",
                position: "absolute",
                top: "0",
              }}
              text="SwiftUI"
            />
            <GroupWrapper
              cStyle={{
                left: "29px",
              }}
              style={{
                left: "0",
                position: "absolute",
                top: "105px",
              }}
              text="Flask"
            />
            <div className="overlap-21">
              <GroupWrapper
                cStyle={{
                  left: "2px",
                }}
                style={{
                  left: "0",
                  position: "absolute",
                  top: "0",
                }}
                text="MongoDB"
              />
              <div className="rectangle-12" />
            </div>
            <GroupWrapper
              cStyle={{
                left: "30px",
              }}
              style={{
                left: "0",
                position: "absolute",
                top: "315px",
              }}
              text="Swift"
            />
            <div className="overlap-22">
              <GroupWrapper
                cStyle={{
                  left: "17px",
                }}
                style={{
                  left: "0",
                  position: "absolute",
                  top: "0",
                }}
                text="NumPy"
              />
              <div className="rectangle-13" />
            </div>
            <div className="overlap-23">
              <GroupWrapper
                cStyle={{
                  left: "16px",
                }}
                style={{
                  left: "0",
                  position: "absolute",
                  top: "0",
                }}
                text="MatLab"
              />
              <div className="rectangle-14" />
            </div>
          </div>
        </div>
        <div className="skills">SKILLS</div>
        <img alt="Line" src="/img/line-6.png" />
        <ButtonWrapper
          href="https://1cademy.com/"
          style={{
            height: "45px",
            left: "38.2%",
            position: "absolute",
            top: "2340px",
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
        <div class="projects-3">1Cademy Website Front-End Programming</div>
        <img className="image-6" alt="Image" src="/img/image-2.png" />
        <div className="group-48">
          <img
            className="screen-shot-14"
            alt="Screen shot"
            src="/img/screen-shot-2023-05-31-at-4-30-1.png"
          />
          <p className="search-result-with">
            Search Result With Keyword “book”
          </p>
          <img className="image-7" alt="Image" src="/img/image-1.png" />
        </div>
        <div id="section1" className="flex-container-14">
          <div className="text-wrapper-133">
            UMICH EECS 485 WEB SYSTEMS PROJECTS
          </div>
          <span className="text-wrapper-134">JANUARY 2023 - APRIL 2023</span>
          <span className="text-wrapper-134">
            &bull;&nbsp; Developed an Instagram-like web application using React
            for front-end, Flask for back-end, and SQLite for database,
            supporting features like user sign-in, posts and comments.
            <br />
          </span>
          <span className="text-wrapper-134">
            &bull; &nbsp; Built a multi-worker and fault-tolerant MapReduce
            server in Python which can process user-submitted tasks.
            <br />
          </span>
          <span className="text-wrapper-134">
            &bull;&nbsp; Implemented a search engine from scratch, based on text
            segmentation, Hadoop MapReduce indexing, and tf-idf scores.
            <br />
          </span>
          <hr />
          <p className="text-wrapper-133">
            Git repository of search engine project:
            <a
              className="text-wrapper-139"
              href="https://github.com/dmingke/portfolio_web_system05"
            >
              {" "}
              https://github.com/dmingke/portfolio_web_system05
            </a>
          </p>
          <p class="text-wrapper-133">
            Git respository of instagram-like web project:
            <a
              className="text-wrapper-139"
              href="https://github.com/dmingke/portfolio_web_system05"
            >
              {" "}
              https://github.com/dmingke/instagram_simpler_project.git
            </a>
          </p>
        </div>
        <div className="flex-container-13">
          <span className="text-wrapper-133">
            PROJECTS &amp; LABS FOR EECS 281 DATA STRUCTURES AND ALGORITHMS
            <br />
          </span>
          <span className="text-wrapper-134">
            MAY 2022 - DECEMBER 2022
            <br />
          </span>
          <span className="text-wrapper-134">
            &bull;&nbsp; Utilized inheritance and basic dynamic polymorphism to
            implement sorted priority queue, binary heap priority queue and
            pairing heap priority queue developed from templated generic code.
            <br />
          </span>
          <span className="text-wrapper-134">
            &bull;&nbsp; Applied branch and bound algorithm to solve TSP problem
            for complete weighted graph, used MST to get the lower bound for
            remaining cost, and explored various heuristic approaches to achieve
            a nearly-optimal solution.
            <br />
          </span>
          <span className="text-wrapper-134">
            &bull;&nbsp; Implemented a C++ version of the game 2048 which
            responded to player&#39;s keystrokes, and enabled customized tile
            values such as Unicode Emojis by reading from files provided by the
            player.
          </span>

          <p className="text-wrapper-133">
            Git Respository to see all EECS 281 Projects:
            <a
              href="https://github.com/dmingke/instagram_simpler_project.git"
              className="text-wrapper-139"
            >
              https://github.com/dmingke/EECS281AllC++projects.git
            </a>
          </p>
        </div>
        <div className="projects-2">PROJECTS</div>
      </div>
      <Timeline data={data} />
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
