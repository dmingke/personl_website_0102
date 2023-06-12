import React from "react";
import { Link } from "react-router-dom";
import { ButtonWrapper } from "../../components/ButtonWrapper";
import "./style.css";

export const Projects = () => {
  return (
    <div className="projects">
      <div className="div-9">
        <div className="flex-container-15">
          <div className="text-70">
            <span className="text-wrapper-142">
              UMICH EECS 485 WEB SYSTEMS PROJECTS
              <br />
            </span>
          </div>
          <div className="text-71">
            <span className="text-wrapper-143">
              JANUARY 2023 - APRIL 2023
              <br />
            </span>
          </div>
          <div className="text-72">
            <span className="text-wrapper-144">
              Developed an Instagram-like web application using React for front-end, Flask for back-end, and SQLite for
              database, supporting features like user sign-in, posts and comments.
              <br />
            </span>
          </div>
          <div className="text-73">
            <span className="text-wrapper-145">
              Built a multi-worker and fault-tolerant MapReduce server in Python which can process user-submitted tasks.
              <br />
            </span>
          </div>
          <div className="text-74">
            <span className="text-wrapper-146">
              Implemented a search engine from scratch, based on text segmentation, Hadoop MapReduce indexing, and
              tf-idf scores.
              <br />
            </span>
          </div>
          <div className="text-75">
            <span className="text-wrapper-147">Git repository of search engine project:</span>
            <span className="text-wrapper-148">&nbsp;</span>
            <a href="https://github.com/dmingke/portfolio_web_system05" rel="noopener noreferrer" target="_blank">
              <span className="text-wrapper-149">https://github.com/dmingke/portfolio_web_system05</span>
            </a>
          </div>
        </div>
        <h1 className="text-wrapper-150">PROJECTS</h1>
        <img className="image-8" alt="Image" src="/img/image-2.png" />
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
            marginBottom: "unset",
            marginLeft: "unset",
            marginRight: "unset",
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
            marginBottom: "unset",
            marginLeft: "unset",
            marginRight: "unset",
            marginTop: "-0.50px",
          }}
        />
        <img className="line-9" alt="Line" src="/img/line-3.svg" />
        <img className="line-10" alt="Line" src="/img/line-3.svg" />
        <div className="overlap-25">
          <img className="line-11" alt="Line" src="/img/line-5.svg" />
          <div className="group-55">
            <div className="overlap-group-9">
              <img className="screen-shot-15" alt="Screen shot" src="/img/screen-shot-2023-05-31-at-4-30-1.png" />
              <div className="search-engine-2">Search Engine Construction</div>
              <p className="search-result-with-2">Search Result With Keyword “book”</p>
              <img className="image-9" alt="Image" src="/img/image-1.png" />
              <div className="rectangle-15" />
            </div>
          </div>
        </div>
        <div className="text-wrapper-151">
          Git respository: https://github.com/dmingke/instagram_simpler_project.git
        </div>
        <div className="navigation-bar-2">
          <div className="overlap-26">
            <div className="rectangle-16" />
            <Link className="mingke-dai-2" to="/front-page">
              MINGKE DAI
            </Link>
            <Link className="resume-3" to="/resumezhong">
              RESUME
            </Link>
            <div className="programming-menu">
              <div className="group-56">
                <div className="overlap-group-10">
                  <div className="group-57">
                    <div className="programming-2">PROGRAMMING</div>
                    <img className="polygon" alt="Polygon" src="/img/polygon-1.svg" />
                  </div>
                </div>
              </div>
            </div>
            <div className="design-menu">
              <div className="group-58">
                <div className="overlap-group-11">
                  <div className="group-59">
                    <div className="design-3">DESIGN</div>
                    <img className="polygon-2" alt="Polygon" src="/img/polygon-1.svg" />
                  </div>
                </div>
              </div>
            </div>
            <div className="research-menu">
              <div className="group-60">
                <div className="overlap-group-12">
                  <div className="research-3">RESEARCH</div>
                  <img className="polygon-3" alt="Polygon" src="/img/polygon-1.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-container-16">
          <div className="text-76">
            <span className="text-wrapper-152">
              PROJECTS &amp; LABS FOR EECS 281 DATA STRUCTURES AND ALGORITHMS
              <br />
            </span>
          </div>
          <div className="text-77">
            <span className="text-wrapper-153">
              MAY 2022 - DECEMBER 2022
              <br />
            </span>
          </div>
          <div className="text-78">
            <span className="text-wrapper-154">
              Utilized inheritance and basic dynamic polymorphism to implement sorted priority queue, binary heap
              priority queue and pairing heap priority queue developed from templated generic code.
              <br />
            </span>
          </div>
          <div className="text-79">
            <span className="text-wrapper-155">
              Applied branch and bound algorithm to solve TSP problem for complete weighted graph, used MST to get the
              lower bound for remaining cost, and explored various heuristic approaches to achieve a nearly-optimal
              solution.
              <br />
            </span>
          </div>
          <div className="text-80">
            <span className="text-wrapper-156">
              Implemented a C++ version of the game 2048 which responded to player&#39;s keystrokes, and enabled
              customized tile values such as Unicode Emojis by reading from files provided by the player.
            </span>
          </div>
        </div>
        <p className="git-respository-to-2">
          <span className="text-wrapper-157">Git Respository to see all EECS 281 Projects</span>
          <span className="text-wrapper-158">: </span>
          <a href="https://github.com/dmingke/instagram_simpler_project.git" rel="noopener noreferrer" target="_blank">
            <span className="text-wrapper-159">https://github.com/dmingke/EECS281AllC++projects.git</span>
          </a>
          <span className="text-wrapper-160">&nbsp;</span>
        </p>
      </div>
    </div>
  );
};
