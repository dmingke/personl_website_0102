import React from "react";
import { ButtonWrapper } from "../../components/ButtonWrapper";
import { Link } from "react-router-dom";
import { FrameWrapper } from "../../components/FrameWrapper";
import { NavigationBar } from "../../components/NavigationBar";
import { Timeline } from "../../components/Timeline";
import "./style.css";

const data = [
  { id: "section1", name: "UX: Student Travel" },
  { id: "section2", name: "UX: 1Cademy" },
  { id: "section3", name: "Other Projects" },
];

export const Research = () => {
  return (
    <div className="research">
      <div className="div-5">
        <div id="section1" className="group-15" >
          <div className="overlap-group-8">
            <img className="image" alt="Image" src="/img/image-9.png" />
            <div className="frame-6">
              <div className="group-16">
                <h1 className="text-wrapper-61">Expedia: Student Travel User Research</h1>
                <p className="problem-statement">
                  <span className="text-wrapper-62">Problem Statement</span>
                  <span className="text-wrapper-63">: </span>
                  <span className="text-wrapper-64">What are the unique needs of students when they travel? </span>
                </p>
                <p className="goal-reanalyzed">
                  <span className="text-wrapper-65">Goal</span>
                  <span className="text-wrapper-66">: </span>
                  <span className="text-wrapper-67">
                    reanalyzed Expedia website specifically for the needs of students and proposed possible solutions
                  </span>
                </p>
              </div>
              <img className="image-2" alt="Image" src="/img/image-4.png" />
            </div>
          </div>
          <ButtonWrapper
            style={{
              left: "525px",
              position: "absolute",
              top: "1240px",
              width: "207px",
            }}
            text="View More Details"
            to="/expedia-students-travel"
            viewMoreStyle={{
              marginLeft: "unset",
              marginRight: "unset",
            }}
          />
        </div>
        <div className="group-17" id="section2">
          <div className="text-wrapper-68">1Cademy UX Research</div>
          <p className="techniques-heuristic">
            <span className="text-wrapper-69">Techniques</span>
            <span className="text-wrapper-70">: </span>
            <span className="text-wrapper-71">
              Heuristic evaluation, Personas, User stories, Competitive Analysis, Usability testing
            </span>
          </p>
          <p className="goals-improve-the">
            <span className="text-wrapper-72">Goals</span>
            <span className="text-wrapper-73">
              : improve the usability and accessibility of 1Cademy by identifying potential improvements supported by
              data and redesigning the web pages
            </span>
          </p>
          <div className="group-18">
            <div className="overlap-group-9">
              <img className="image-3" alt="Image" src="/img/image-12.png" />
              <img className="image-4" alt="Image" src="/img/image-10.png" />
            </div>
          </div>
          <ButtonWrapper
            style={{
              left: "481px",
              position: "absolute",
              top: "1026px",
              width: "207px",
            }}
            text="View More Details"
            to="/1cademy-overview"
            viewMoreStyle={{
              marginLeft: "unset",
              marginRight: "unset",
            }}
          />
        </div>
        <div className="group-19" id="section3">
          <div className="frame-7">
            <p className="text-wrapper-74">Identity Cues Fortune 100 Website Coding</p>
            <p className="overview-collected">
              <span className="text-wrapper-75">Overview: </span>
              <span className="text-wrapper-76">
                Collected data of Fortune 100 websites’ identity cues to analyze diversity and mindset differences in
                web design to gain more understanding of what contributes to a sense of inclusion in job seekers when
                they visit the site
              </span>
            </p>
            <img className="image-5" alt="Image" src="/img/image-14.png" />
            <ButtonWrapper
              style={{
                gap: "20px",
                left: "unset",
                top: "unset",
                width: "207px",
              }}
              text="View More Details"
              to="/i-o-research"
              viewMoreStyle={{
                marginLeft: "unset",
                marginRight: "unset",
              }}
            />
          </div>
          <div className="frame-8">
            <p className="organizational">Organizational &amp; Industrial Lab Research Projects</p>
            <p className="poster-information">
              <span className="text-wrapper-77">Poster information: </span>
              <span className="text-wrapper-78">
                Produced by me for the Undergraduate Research Festival to present research process and findings;
                Including an abstract of each part of the research paper
              </span>
            </p>
            <img className="poster-draft" alt="Poster draft" src="/img/poster-draft-1.png" />
          </div>
        </div>
        <div className="component-13">
          <FrameWrapper
            className="frame-48"
            mainPageClassName="frame-50"
            polygon="/img/polygon-1.png"
            polygonClassName="frame-49"
            text="Design"
            to="/design"
          />
          <Link className="frame-51" to="/1cademy-overview">
            <div className="next-project-UX-4">View My Projects</div>
            <img className="polygon-6" alt="Polygon" src="/img/polygon-1-1.png" />
          </Link>
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
    </div>
  );
};
