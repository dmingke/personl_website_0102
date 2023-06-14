import React from "react";
import { ButtonWrapper } from "../../components/ButtonWrapper";
import { Frame } from "../../components/Frame";
import { Group } from "../../components/Group";
import { NavigationBar } from "../../components/NavigationBar";
import "./style.css";

export const Design = () => {
  return (
    <div className="design">
      <div className="div-6">
        <img className="lab" alt="Lab" src="/img/lab-8.png" />
        <Frame
          style={{
            left: "367px",
            position: "absolute",
            top: "5500px",
          }}
          text="Animal Vector Icons"
          text1="Tools: Adobe illustrator"
          text2="Project information: Course project of SI 320 Graphic Design, used for a children’s book"
          toolsAdobeStyle={{
            width: "fit-content",
          }}
        />
        <img className="line" alt="Line" src="/img/line-6.png" />
        <div className="group-22">
          <img className="page" alt="Page" src="/img/hw5-part2-page-6-1.png" />
          <section id="3">
          <Frame
            style={{
              left: "0",
              position: "absolute",
              top: "0",
              width: "579px",
            }}
            text="Logo Design"
            text1="Tools: Adobe illustrator"
            text2="Project information: participating in the logo campaign of Just Futures (A public benefit corporation) and MTCIR (Michigan Transport Center for Immigrants and Refugees). Completing two complete identity guides for these two institutions."
            toolsAdobeStyle={{
              width: "fit-content",
            }}
          />
          </section>
          <img className="screen-shot-3" alt="Screen shot" src="/img/screen-shot-2023-05-27-at-7-31-1.png" />
        </div>
        <img className="line-2" alt="Line" src="/img/line-6.png" />
        <div className="overlap-9">
          <p className="link-to-view-entire">
            <span className="text-wrapper-74">Link to view entire project with description</span>
            <span className="text-wrapper-75">:&nbsp;&nbsp;</span>
            <a
              href="https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:0646415f-cb2b-34b7-b7d3-c2d695c83afd"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="text-wrapper-76">
                https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:0646415f-cb2b-34b7-b7d3-c2d695c83afd
              </span>
            </a>
          </p>
          <img className="image-5" alt="Image" src="/img/image-3.png" />
          
          <Frame
            style={{
              left: "287px",
              position: "absolute",
              top: "0",
            }}
            text="Alphabet Poster Design"
            text1="Tools: Adobe illustrator, Adobe Photoshop"
            text2="Project information: SI 320 Graphic Design course project; Coming with a detailed description of the design idea. then reused the poster as an Alphabet Poster for an Asian international institution."
          />
          
        </div>
        <img className="line-3" alt="Line" src="/img/line-6.png" />
        <img className="screen-shot-4" alt="Screen shot" src="/img/screen-shot-2023-05-27-at-7-27-3.png" />
        <section id="2"></section>
        <Frame
          style={{
            left: "365px",
            position: "absolute",
          }}
          text="Courses Poster Design"
          text1="Tools: Adobe Photoshop, Adobe Color"
          text2={
            <>
              Project information: used for UMICH Spring/Summer courses and <br />
              UMICH biological station website construction
            </>
          }
        />

        <img className="line-4" alt="Line" src="/img/line-6.png" />
        <div className="group-23">
          <div className="click-to-view-the-wrapper">
            <a
              href="https://www.figma.com/proto/TKdTHW51QnehqUsFH9jCnA/SI482-hi-fi-Wireframe?type=design&amp;node-id=126-245&amp;scaling=scale-down&amp;page-id=126%3A244&amp;starting-point-node-id=126%3A245"
              rel="noopener noreferrer"
              target="_blank"
            >
              <p className="click-to-view-the">Click To View The Prototype</p>
            </a>
          </div>
          <Frame
            posterDesignStyle={{
              marginLeft: "-23.50px",
              marginRight: "-23.50px",
            }}
            style={{
              left: "424px",
              position: "absolute",
              top: "164px",
            }}
            text="UI/UX DESIGN: Communieat"
            text1="Tools: Figma"
            text2="
                Project information: Communieat is an instant food ordering service mobile application that connects the cook and the user. 
                Chefs can post their individualized recipes, while users can order healthier homemade food reasonably priced. "
          />
          <img className="screen-shot-5" alt="Screen shot" src="/img/screen-shot-2023-06-08-at-2-43-2.png" />
          <ButtonWrapper
            style={{
              left: "610px",
              position: "absolute",
              top: "450px",
              width: "190px",
            }}
            text="View More Details"
            to="/communieat"
            viewMoreStyle={{
            }}
          />
        </div>
        <div className="group-24">
          <Frame
            style={{
              left: "402px",
              position: "absolute",
              top: "173px",
              width: "601px",
            }}
            text="UI/UX DESIGN: FREEZE"
            text1="Tools: Figma"
            text2="FREEZE is an app that enables people to not waste any food they brought and not impulsively buy extra groceries 
            that they won’t eat or have no idea about how to cook."
          />
          <img className="screen-shot-6" alt="Screen shot" src="/img/screen-shot-2023-06-07-at-9-16-1.png" />
          <ButtonWrapper
            style={{
              left: "610px",
              position: "absolute",
              top: "440px",
              width: "190px",
            }}
            text="View More Details"
            to="/freeze"
            viewMoreStyle={{
              marginLeft: "-4.00px",
              marginRight: "-4.00px",
            }}
          />
          <div className="button-2">
            <a
              href="https://www.figma.com/proto/an7v39AGHrnDaRIfRkfwmh/FREEZE?type=design&amp;node-id=8-2&amp;scaling=scale-down&amp;page-id=0%3A1&amp;starting-point-node-id=8%3A2"
              rel="noopener noreferrer"
              target="_blank"
            >
              <p className="click-to-view-the-2">Click To View The Prototype</p>
            </a>
          </div>
        </div>
        <img className="screen-shot-7" alt="Screen shot" src="/img/screen-shot-2023-06-07-at-8-57.png" />
        <img className="screen-shot-8" alt="Screen shot" src="/img/screen-shot-2023-06-07-at-8-56.png" />
        <section id="1"></section>
        <Frame
          posterDesignStyle={{
            marginLeft: "-6.50px",
            marginRight: "-6.50px",
          }}
          style={{
            left: "348px",
            position: "absolute",
            top: "218px",
            width: "584px",
          }}
          text="UI/UX DESIGN: 1Cademy Website Prototype"
          text1="Tools: Figma"
          text2={
            <>
              Project information: prototyping 1Cademy web pages from low-fidelity wireframe to high-fidelity prototype.
              Analyzed and proved by the UX research group and supervisors iteration by iteration.
              <br />
              (the link to the actual projects cannot be shared without my supervisor’s permission)
            </>
          }
        />
        <div className="frame-9">
          <div className="group-25">
            <div className="UX-design-wrapper">
              <a href="#1" className="UX-design">UI/UX Design</a>
            </div>
          </div>
          <div className="group-26">
            <div className="overlap-10">
              <a href="#2" className="text-wrapper-77">Poster Design</a>
            </div>
          </div>
          <div className="group-27">
            <div className="overlap-11">
              <a href="#3" className="text-wrapper-78">Logo Design</a>
            </div>
          </div>
        </div>
        <div className="group-28">
          <div className="overlap-12">
            <div className="table-of-contents-2">Table Of Contents</div>
            <img className="contents-2" alt="Contents" src="/img/contents.png" />
          </div>
        </div>
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
