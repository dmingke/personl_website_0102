import React from "react";
import { Link } from "react-router-dom";
import { FrameNew } from "../../components/FrameNew";
import { FrameWrapper } from "../../components/FrameWrapper";
import { Group } from "../../components/Group";
import { NavigationBar } from "../../components/NavigationBar";
import { PropertyDefaultWrapper } from "../../components/PropertyDefaultWrapper";
import { Timeline } from "../../components/Timeline";
import "./style.css";

const data = [
  { id: "1", name: "UI/UX Design" },
  { id: "2", name: "Poster Design" },
  { id: "3", name: "Logo Design" }
];

export const Design = () => {
  return (
    <div className="design">
      <div className="div-3">
        <div className="frame-5">
          <div id="1" className="group-5">
            <div className="group-6">
              <img className="screen-shot" alt="Screen shot" src="/img/screen-shot-2023-06-07-at-8-57.png" />
              <img className="screen-shot-2" alt="Screen shot" src="/img/screen-shot-2023-06-07-at-8-56.png" />
            </div>
            <div className="frame-6">
              <h1 className="courses-poster-2">UI/UX DESIGN: 1Cademy Website Prototype</h1>
              <div className="tools-adobe-2">Tools: Figma</div>
              <div className="flex-container-6">
                <div className="text-9">
                  <span className="text-wrapper-12">
                    Project information: prototyping 1Cademy web pages from low-fidelity wireframe to high-fidelity
                    prototype. Analyzed and proved by the UX research group and supervisors iteration by iteration.
                    <br />
                  </span>
                </div>
                <div className="text-9">
                  <span className="text-wrapper-12">
                    (the link to the actual projects cannot be shared without my supervisor’s permission)
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="group-7">
            <div className="group-8">
              <FrameNew
                className="frame-13"
                text="UI/UX DESIGN: Communieat"
                text1="Tools: Figma"
                text2="Communieat is an instant food ordering service mobile application that connects the cook and the user. Chefs can post their individualized recipes, while users can order healthier homemade food reasonably priced."
              />
              <img className="screen-shot-3" alt="Screen shot" src="/img/screen-shot-2023-06-08-at-2-43-2.png" />
              <PropertyDefaultWrapper
                className="button-instance"
                property1="default"
                text="View More Details"
                to="/communieat"
                viewMoreClassName="design-component-instance-node"
              />
            </div>
            <div className="group-9">
              <FrameNew
                className="frame-13-instance"
                text="UI/UX DESIGN: Freeze"
                text1="Tools: Figma"
                text2="FREEZE is an app that enables people to not waste any food they brought and not impulsively buy extra groceries that they won’t eat or have no idea about how to cook."
              />
              <img className="screen-shot-4" alt="Screen shot" src="/img/screen-shot-2023-06-07-at-9-16-1.png" />
              <PropertyDefaultWrapper
                className="button-2"
                property1="default"
                text="View More Details"
                to="/freeze"
                viewMoreClassName="design-component-instance-node"
              />
            </div>
          </div>
          <div id="2" className="group-10">
            <img className="screen-shot-5" alt="Screen shot" src="/img/screen-shot-2023-05-27-at-7-27-3.png" />
            <FrameNew
              className="frame-7"
              text="Courses Poster Design"
              text1="Tools: Adobe Photoshop, Adobe Color"
              text2="Project information: used for UMICH Spring/Summer courses and UMICH biological station website construction"
            />
          </div>
          <div className="group-11">
            <div className="frame-8">
              <FrameNew
                className="frame-9"
                text="Alphabet Poster Design"
                text1="Tools: Adobe illustrator, Adobe Photoshop"
                text2="Project information: SI 320 Graphic Design course project; Coming with a detailed description of the design idea, then reused the poster as an Alphabet Poster for an Asian international institution."
              />
              <img className="image" alt="Image" src="/img/image-3.png" />
              <p className="link-to-view-entire">
                <span className="text-wrapper-13">Link to view entire project with description</span>
                <span className="text-wrapper-14">:&nbsp;&nbsp;</span>
                <a
                  href="https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:0646415f-cb2b-34b7-b7d3-c2d695c83afd"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="text-wrapper-15">
                    https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:0646415f-cb2b-34b7-b7d3-c2d695c83afd
                  </span>
                </a>
              </p>
            </div>
          </div>
          <div id="3" className="group-12">
            <img className="page" alt="Page" src="/img/hw5-part2-page-6-1.png" />
            <FrameNew
              className="design-component-instance-node-2"
              projectInformationClassName="frame-11"
              text="Logo Design"
              text1="Tools: Adobe illustrator"
              text2="Project information: participating in the logo campaign of Just Futures (A public benefit corporation) and MTCIR (Michigan Transport Center for Immigrants and Refugees). Completing two complete identity guides for these two institutions."
              toolsAdobeClassName="frame-10"
            />
            <img className="screen-shot-6" alt="Screen shot" src="/img/screen-shot-2023-05-27-at-7-31-1.png" />
          </div>
          <div className="group-13">
            <img className="lab" alt="Lab" src="/img/lab-8.png" />
            <FrameNew
              className="frame-12"
              text="Animal Vector Icons"
              text1="Tools: Adobe illustrator"
              text2="Project information: Course project of SI 320 Graphic Design, used for a children’s book"
              toolsAdobeClassName="frame-10"
            />
          </div>
          <div className="component-2">
            <FrameWrapper
              className="frame-258-instance"
              mainPageClassName="frame-15"
              polygon="/img/polygon-1.png"
              polygonClassName="frame-14"
              text="Programming"
              to="/programming-original"
            />
            <Link className="frame-16" to="/research">
              <div className="next-project-UX-2">Research</div>
              <img className="polygon-2" alt="Polygon" src="/img/polygon-1-1.png" />
            </Link>
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
