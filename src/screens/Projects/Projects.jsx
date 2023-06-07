import React from "react";
import { Link } from "react-router-dom";
import { ButtonWrapper } from "../../components/ButtonWrapper";
import { DivWrapper } from "../../components/DivWrapper";
import { Group } from "../../components/Group";
import { GroupWrapper } from "../../components/GroupWrapper";
import "./style.css";

export const Projects = () => {
  return (
    <div className="projects">
      <div className="div-4">
        <div className="flex-container-7">
          <div className="text-33">
            <span className="text-wrapper-47">
              UMICH EECS 485 WEB SYSTEMS PROJECTS
              <br />
            </span>
          </div>
          <div className="text-34">
            <span className="text-wrapper-48">
              JANUARY 2023 - APRIL 2023
              <br />
            </span>
          </div>
          <div className="text-35">
            <span className="text-wrapper-49">
              Developed an Instagram-like web application using React for front-end, Flask for back-end, and SQLite for
              database, supporting features like user sign-in, posts and comments.
              <br />
            </span>
          </div>
          <div className="text-36">
            <span className="text-wrapper-50">
              Built a multi-worker and fault-tolerant MapReduce server in Python which can process user-submitted tasks.
              <br />
            </span>
          </div>
          <div className="text-37">
            <span className="text-wrapper-51">
              Implemented a search engine from scratch, based on text segmentation, Hadoop MapReduce indexing, and
              tf-idf scores.
              <br />
            </span>
          </div>
          <div className="text-38">
            <span className="text-wrapper-52">Git repository of search engine project:</span>
            <span className="text-wrapper-53">&nbsp;</span>
            <a href={"https://github.com/dmingke/portfolio_web_system05"} rel={"noopener noreferrer"} target={"_blank"}>
              <span className="text-wrapper-54">https://github.com/dmingke/portfolio_web_system05</span>
            </a>
          </div>
        </div>
        <h1 className="text-wrapper-55">PROJECTS</h1>
        <img className="image" alt={"Image"} src={"/img/image-2.png"} />
        <ButtonWrapper
          style={{
            height: "45px",
            left: "497px",
            position: "absolute",
            top: "1881px",
            width: "293px",
          }}
          text="Click To View The Web-page"
          viewMoreStyle={{
            fontSize: "20px",
            marginTop: "-0.50px",
          }}
        />
        <ButtonWrapper
          style={{
            height: "45px",
            left: "496px",
            position: "absolute",
            top: "1253px",
            width: "293px",
          }}
          text="Click To View The Web-page"
          viewMoreStyle={{
            fontSize: "20px",
            marginTop: "-0.50px",
          }}
        />
        <img className="line" alt={"Line"} src={"/img/line-3.svg"} />
        <img className="line-2" alt={"Line"} src={"/img/line-3.svg"} />
        <div className="overlap-8">
          <img className="line-3" alt={"Line"} src={"/img/line-5.svg"} />
          <div className="group-12">
            <div className="overlap-group-8">
              <img
                className="screen-shot-at-3"
                alt={"Screen shot at"}
                src={"/img/screen-shot-2023-05-31-at-4-30-1.png"}
              />
              <div className="search-engine-construction">Search Engine Construction</div>
              <p className="search-result-with-keyword-book">Search Result With Keyword “book”</p>
              <img className="image-2" alt={"Image"} src={"/img/image-1.png"} />
              <div className="rectangle-13" />
            </div>
          </div>
        </div>
        <div className="text-wrapper-56">Git respository: https://github.com/dmingke/instagram_simpler_project.git</div>
        <div className="navigation-bar-3">
          <div className="overlap-9">
            <div className="rectangle-14" />
            <Link className="mingke-dai-3" to={"/front-page"}>
              MINGKE DAI
            </Link>
            <Link className="resume-3" to={"/resumezhong"}>
              RESUME
            </Link>
            <div className="group-instance-wrapper">
              <Group
                style={{
                  left: "-2px",
                  position: "relative",
                  top: "-1px",
                }}
              />
            </div>
            <div className="design-menu-2">
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
            <div className="research-menu-2">
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
        <div className="flex-container-8">
          <div className="text-39">
            <span className="text-wrapper-57">
              PROJECTS &amp; LABS FOR EECS 281 DATA STRUCTURES AND ALGORITHMS
              <br />
            </span>
          </div>
          <div className="text-40">
            <span className="text-wrapper-58">
              MAY 2022 - DECEMBER 2022
              <br />
            </span>
          </div>
          <div className="text-41">
            <span className="text-wrapper-59">
              Utilized inheritance and basic dynamic polymorphism to implement sorted priority queue, binary heap
              priority queue and pairing heap priority queue developed from templated generic code.
              <br />
            </span>
          </div>
          <div className="text-42">
            <span className="text-wrapper-60">
              Applied branch and bound algorithm to solve TSP problem for complete weighted graph, used MST to get the
              lower bound for remaining cost, and explored various heuristic approaches to achieve a nearly-optimal
              solution.
              <br />
            </span>
          </div>
          <div className="text-43">
            <span className="text-wrapper-61">
              Implemented a C++ version of the game 2048 which responded to player&#39;s keystrokes, and enabled
              customized tile values such as Unicode Emojis by reading from files provided by the player.
            </span>
          </div>
        </div>
        <p className="git-respository-to-see-all-EECS-projects-https-github-com-dmingke-projects-git">
          <span className="text-wrapper-62">Git Respository to see all EECS 281 Projects</span>
          <span className="text-wrapper-63">: </span>
          <a
            href={"https://github.com/dmingke/instagram_simpler_project.git"}
            rel={"noopener noreferrer"}
            target={"_blank"}
          >
            <span className="text-wrapper-64">https://github.com/dmingke/EECS281AllC++projects.git</span>
          </a>
          <span className="text-wrapper-65">&nbsp;</span>
        </p>
      </div>
    </div>
  );
};
