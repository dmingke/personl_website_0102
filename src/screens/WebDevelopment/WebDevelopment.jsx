import React from "react";
import { Link } from "react-router-dom";
import { ComponentWrapper } from "../../components/ComponentWrapper";
import { DivWrapper } from "../../components/DivWrapper";
import { NavigationBar } from "../../components/NavigationBar";
import { Group } from "../../components/Group";
import { PropertyDefaultWrapper } from "../../components/PropertyDefaultWrapper";
import "./style.css";

export const WebDevelopment = () => {
  return (
    <div className="web-development">
      <div className="div-8">
        <div className="frame-83">
          <div className="group-116">
            <p className="text-wrapper-103">
              Building this website was an intricate and exciting process. I wanted to ensure that it not only showcases
              my portfolio but also reflects my skills and dedication. Here is a step-by-step breakdown of how I turned
              my vision into a reality.
            </p>
            <h1 className="text-wrapper-104">Overview</h1>
          </div>
          <div className="step-browsing">
            <div className="flex-container-27">
              <div className="text-32">
                <span className="text-wrapper-105">
                  Step 1: Browsing Online
                  <br />
                </span>
              </div>
              <div className="text-33">
                <span className="span-3">
                  My journey began with a quest for inspiration. I browsed various websites, looking at designs,
                  structures, and elements that caught my eye. This was crucial for gauging current trends and
                  understanding what resonated with me and potential visitors.
                </span>
              </div>
            </div>
          </div>
          <div className="step-browsing">
            <div className="flex-container-27">
              <div className="text-32">
                <span className="text-wrapper-105">
                  Step 2: Writing Outlines
                  <br />
                </span>
              </div>
              <div className="text-33">
                <span className="span-3">
                  With inspiration in hand, I jotted down outlines to define the purpose and structure of my website.
                  This involved listing the pages I wanted, the kind of content they would hold, and how they would
                  interlink. Creating these outlines was an essential step in forming a skeleton for the website.
                </span>
              </div>
            </div>
          </div>
          <div className="frame-84">
            <div className="flex-container-28">
              <div className="text-32">
                <span className="text-wrapper-105">
                  Step 3: Low-Fidelity Wireframing
                  <br />
                </span>
              </div>
              <div className="text-33">
                <span className="span-3">
                  Next, I created wireframes to flesh out the outlines. I began with sketching out low-fidelity
                  wireframes on paper. This allowed me to quickly visualize the basic structure of the website, focusing
                  on content placement and navigation. It’s akin to creating a blueprint, which is low investment but
                  high return as it saves time during revision.
                </span>
              </div>
            </div>
            <img className="image-17" alt="Image" src="/img/image-35.png" />
            <PropertyDefaultWrapper
              className="button-29"
              href="https://www.figma.com/file/PXMni3XvWD6psaA6DIPKpQ/personal-website?type=design&node-id=348%3A255&mode=design&t=sQySbW3CrNX94Ilp-1"
              icons="/img/icons.png"
              iconsClassName="button-31"
              property1="link-to-other-pages"
              text="Click To View Wireframe"
              viewMoreClassNameOverride="button-30"
            />
          </div>
          <div className="frame-85">
            <div className="step-browsing">
              <div className="flex-container-27">
                <div className="text-32">
                  <span className="text-wrapper-105">
                    Step 4: High-Fidelity Wireframing with Figma
                    <br />
                  </span>
                </div>
                <div className="text-33">
                  <span className="span-3">
                    Once the basic structure was in place, I moved to Figma to create a high-fidelity wireframe. This
                    was crucial for visualizing a more refined design. I was able to delve into finer details such as
                    color schemes, typography, and other design elements.
                  </span>
                </div>
              </div>
            </div>
            <img className="image-18" alt="Image" src="/img/image-36.png" />
            <img className="image-19" alt="Image" src="/img/image-15.png" />
            <PropertyDefaultWrapper
              className="button-32"
              href="https://www.figma.com/file/PXMni3XvWD6psaA6DIPKpQ/personal-website?type=design&node-id=348%3A255&mode=design&t=sQySbW3CrNX94Ilp-1"
              icons="/img/icons-7.png"
              iconsClassName="button-34"
              property1="link-to-other-pages"
              text="Click To View The High-fi Draft"
              viewMoreClassNameOverride="button-33"
            />
          </div>
          <div className="frame-85">
            <div className="flex-container-29">
              <div className="text-32">
                <span className="text-wrapper-105">
                  Step 5: High-Fidelity Wireframes - Testing and Refinement
                  <br />
                </span>
              </div>
              <div className="text-33">
                <span className="span-3">
                  Following the development of the initial high-fidelity wireframes, a comprehensive evaluation process
                  was undertaken to ensure optimal usability and intuitive navigation. This phase encompassed rigorous
                  user testing with iterative feedback collection.
                  <br />
                </span>
              </div>
              <div className="text-33">
                <span className="span-3">
                  For each iteration, feedback was procured from a diverse group of five users. The insights gathered
                  were thoroughly analyzed and used to inform modifications to the wireframes. This cyclic process of
                  testing and refinement was continued until a consensus was reached that the wireframes not only served
                  as an efficient and precise foundation for the development phase but also aligned with best practices
                  in user experience design.
                  <br />
                </span>
              </div>
              <div className="text-32">
                <span className="span-3">
                  Key Modifications:
                  <br />
                </span>
              </div>
              <div className="text-33">
                <span className="span-3">
                  Color Palette Reduction: The color scheme was streamlined to enhance visual appeal and align with
                  modern design aesthetics.
                  <br />
                </span>
              </div>
              <div className="text-33">
                <span className="span-3">
                  Navigation Enhancements: The introduction of a “Back-to-Top” button on each page was implemented to
                  facilitate smoother navigation.
                  <br />
                </span>
              </div>
              <div className="text-33">
                <span className="span-3">
                  Menu Structure Optimization: All dropdown menus for the Programming, Design, and Research pages were
                  eliminated to simplify the interface. Instead, a “WORK” button was introduced, providing direct access
                  to major projects.
                  <br />
                </span>
              </div>
              <div className="text-33">
                <span className="span-3">
                  Usability and Readability Improvements: Additional minor adjustments were made to enhance the
                  interface’s usability and readability.
                  <br />
                </span>
              </div>
              <div className="text-32">
                <span className="span-3" />
              </div>
            </div>
            <img className="image-20" alt="Image" src="/img/image-34.png" />
            <PropertyDefaultWrapper
              className="button-35"
              icons="/img/icons-7.png"
              property1="link-to-other-pages"
              text="Click To View The Work"
              viewMoreClassNameOverride="button-36"
            />
          </div>
          <div className="frame-86">
            <div className="flex-container-30">
              <div className="text-32">
                <span className="text-wrapper-105">
                  Step 6: Coding the Website
                  <br />
                </span>
              </div>
              <div className="text-33">
                <span className="span-3">
                  With a solid design in hand, I started coding the website page by page using HTML, CSS, and React.
                  HTML provided the foundational structure, while CSS added the stylistic elements. React, a powerful
                  JavaScript library, was utilized to create an interactive and dynamic user interface. It allowed for
                  building reusable components, which made the development process efficient.
                </span>
              </div>
            </div>
            <div className="group-117">
              <img className="image-21" alt="Image" src="/img/image-28.png" />
              <img className="image-22" alt="Image" src="/img/image-29.png" />
            </div>
            <PropertyDefaultWrapper
              className="button-37"
              href="https://github.com/dmingke/personl_website_0102"
              property1="g-it"
              socialIcons="/img/social-icons-4.png"
              text="Git: The Personal Website"
              viewMoreClassNameOverride="button-38"
            />
          </div>
          <div className="step-browsing">
            <div className="flex-container-27">
              <div className="text-32">
                <span className="text-wrapper-105">
                  Step 7: Testing and Refining the Coded Website
                  <br />
                </span>
              </div>
              <div className="text-33">
                <span className="span-3">
                  Once the initial coding phase was complete, I embarked on another round of testing. I evaluated the
                  website&#39;s responsiveness, performance, and usability across various devices and browsers. Based on
                  the feedback and findings, I made necessary refinements to the code.
                </span>
              </div>
            </div>
          </div>
          <div className="step-browsing">
            <div className="flex-container-27">
              <div className="text-32">
                <span className="text-wrapper-105">
                  Step 8: Deployment
                  <br />
                </span>
              </div>
              <div className="text-33">
                <span className="span-3">
                  When I was confident that the website met my standards and was ready for the world to see, I proceeded
                  to deploy it using Ionos. This involved configuring the domain, setting up server environments, and
                  uploading the files. And thus, my website was live!
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="overlap-group-13">
          <div className="rectangle-21" />
          <div className="frame-87">
            <div className="flex-container-31">
              <div className="text-34">
                <span className="text-wrapper-106">
                  Web development: <br />
                </span>
              </div>
              <div className="text-34">
                <span className="text-wrapper-106">My Personal Website</span>
              </div>
            </div>
            <p className="a-description-of-the">
              A Description Of The Processes And Skills Taken To Build This Website
            </p>
          </div>
          <div className="group-118">
            <ComponentWrapper
              className="component-11"
              text="Project Type"
              text1="Designing, developing, and deploying my personal website"
              usabilityNeedsAndClassName="component-12"
            />
            <ComponentWrapper
              className="component-13"
              text="Skills"
              text1="Figma, Vs Code, React, Css, Html, Deploying (ionos)"
              usabilityNeedsAndClassName="component-14"
            />
            <ComponentWrapper
              className="component-15"
              text="Steps"
              text1={
                <>
                  Browsing Online
                  <br />
                  writing Outlines
                  <br />
                  wireframing
                  <br />
                  high-fidelity Prototyping
                  <br />
                  developing
                  <br />
                  modifying Based On Feedback
                  <br />
                  deploying
                </>
              }
              usabilityNeedsAndClassName="component-16"
            />
            <ComponentWrapper
              className="component-17"
              text="Timeline"
              text1="2023.5-2023.6"
              usabilityNeedsAndClassName="component-18"
            />
            <ComponentWrapper
              className="component-19"
              text="Purpose"
              text1="used as a portfolio to demonstrate my work and for job-seeking purposes"
              usabilityNeedsAndClassName="component-20"
            />
          </div>
          <p className="your-feedback-is">
            Your feedback is always welcome, so please don’t hesitate to reach out!{" "}
            <a href="mailto:daimingketina@gmail.com" rel="noopener noreferrer" target="_blank">
            email me</a>
          </p>
        </div>
        <div className="component-21">
          <Link className="frame-88" to="/expedia-students-travel">
            <img className="polygon-8" alt="Polygon" src="/img/polygon-1-2.png" />
            <p className="main-page-4">
              <span className="text-wrapper-107">
                Prev Project:
                <br />
              </span>
              <span className="text-wrapper-108">UX Research - Student Travel</span>
            </p>
          </Link>
          <DivWrapper
            className="frame-89"
            polygon="/img/polygon-1-3.png"
            text="UI/UX Design Communieat"
            to="/communieat"
          />
        </div>
      </div>
      <NavigationBar
          style={{
            backgroundColor: "#e5eef8",
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
