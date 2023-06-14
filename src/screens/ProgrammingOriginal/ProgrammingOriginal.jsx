import React from "react";
import { ButtonWrapper } from "../../components/ButtonWrapper";
import { Group } from "../../components/Group";
import { GroupWrapper } from "../../components/GroupWrapper";
import { NavigationBar } from "../../components/NavigationBar";
import "./style.css";

export const ProgrammingOriginal = () => {
  return (
    <div className="programming-original">
      <div className="div-8">
        <div className="group-35">
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
              <p className="text-wrapper-118">EECS 376: Foundations of Computer Science</p>
            </div>
          </div>
          <div className="group-41">
            <div className="overlap-17">
              <div className="text-wrapper-119">EECS 485: Web Systems</div>
            </div>
          </div>
          <div className="group-42">
            <div className="overlap-18">
              <p className="text-wrapper-120">EECS 370: Intro to Computer Organization</p>
            </div>
          </div>
          <div className="group-43">
            <div className="group-44">
              <div className="overlap-group-7">
                <p className="text-wrapper-121">EECS 201: Computer Science Pragmatics</p>
              </div>
            </div>
          </div>
          <div className="group-45">
            <div className="group-46">
              <div className="overlap-group-8">
                <p className="text-wrapper-122">EECS 492: Introduction to Artificial Intelligence</p>
              </div>
            </div>
          </div>
        </div>
        <h1 className="relevant-selected">RELEVANT SELECTED COURSES</h1>
        <div className="group-47">
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
                left: "31px",
              }}
              style={{
                left: "0",
                position: "absolute",
                top: "0",
              }}
              text="Shell"
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
                left: "18px",
              }}
              style={{
                left: "0",
                position: "absolute",
                top: "315px",
              }}
              text="Deploy"
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
        <p className="git-respository-to">
          <span className="text-wrapper-123">Git Respository to see all EECS 281 Projects</span>
          <span className="text-wrapper-124">: </span>
          <a href="https://github.com/dmingke/instagram_simpler_project.git" rel="noopener noreferrer" target="_blank">
            <span className="text-wrapper-125">https://github.com/dmingke/EECS281AllC++projects.git</span>
          </a>
          <span className="text-wrapper-126">&nbsp;</span>
        </p>
        <div className="flex-container-13">
          <div className="text-59">
            <span className="text-wrapper-127">
              PROJECTS &amp; LABS FOR EECS 281 DATA STRUCTURES AND ALGORITHMS
              <br />
            </span>
          </div>
          <div className="text-60">
            <span className="text-wrapper-128">
              MAY 2022 - DECEMBER 2022
              <br />
            </span>
          </div>
          <div className="text-61">
            <span className="text-wrapper-129">
              Utilized inheritance and basic dynamic polymorphism to implement sorted priority queue, binary heap
              priority queue and pairing heap priority queue developed from templated generic code.
              <br />
            </span>
          </div>
          <div className="text-62">
            <span className="text-wrapper-130">
              Applied branch and bound algorithm to solve TSP problem for complete weighted graph, used MST to get the
              lower bound for remaining cost, and explored various heuristic approaches to achieve a nearly-optimal
              solution.
              <br />
            </span>
          </div>
          <div className="text-63">
            <span className="text-wrapper-131">
              Implemented a C++ version of the game 2048 which responded to player&#39;s keystrokes, and enabled
              customized tile values such as Unicode Emojis by reading from files provided by the player.
            </span>
          </div>
        </div>
        <ButtonWrapper
          href="https://1cademy.com/"
          style={{
            height: "45px",
            left: "489px",
            position: "absolute",
            top: "2040px",
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
          <img className="screen-shot-14" alt="Screen shot" src="/img/screen-shot-2023-05-31-at-4-30-1-2.png" />
          <div className="search-engine">Search Engine Construction</div>
          <p className="search-result-with">Search Result With Keyword “book”</p>
          <img className="image-7" alt="Image" src="/img/image.png" />
        </div>
        <div className="text-wrapper-132">
          <strong class="text-wrapper-138">Git respository of instagram-like web project</strong>: https://github.com/dmingke/instagram_simpler_project.git
        </div>
        <div className="flex-container-14">
          <div className="text-64">
            <span className="text-wrapper-133">
              UMICH EECS 485 WEB SYSTEMS PROJECTS
              <br />
            </span>
          </div>
          <div className="text-65">
            <span className="text-wrapper-134">
              JANUARY 2023 - APRIL 2023
              <br />
            </span>
          </div>
          <div className="text-66">
            <span className="text-wrapper-135">
              Developed an Instagram-like web application using React for front-end, Flask for back-end, and SQLite for
              database, supporting features like user sign-in, posts and comments.
              <br />
            </span>
          </div>
          <div className="text-67">
            <span className="text-wrapper-136">
              Built a multi-worker and fault-tolerant MapReduce server in Python which can process user-submitted tasks.
              <br />
            </span>
          </div>
          <div className="text-68">
            <span className="text-wrapper-137">
              Implemented a search engine from scratch, based on text segmentation, Hadoop MapReduce indexing, and
              tf-idf scores.
              <br />
            </span>
          </div>
          <div className="text-69">
            <span className="text-wrapper-138">Git repository of search engine project:</span>
            <span className="text-wrapper-139">&nbsp;</span>
            <a href="https://github.com/dmingke/portfolio_web_system05" rel="noopener noreferrer" target="_blank">
              <span className="text-wrapper-140">https://github.com/dmingke/portfolio_web_system05</span>
            </a>
          </div>
        </div>
        <div className="projects-2">PROJECTS</div>
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
