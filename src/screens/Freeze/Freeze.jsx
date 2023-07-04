import React from "react";
import { Link } from "react-router-dom";
import { DivWrapper } from "../../components/DivWrapper";
import { NavigationBar } from "../../components/NavigationBar";
import { PropertyDefaultWrapper } from "../../components/PropertyDefaultWrapper";
import { Group } from "../../components/Group";
import "./style.css";

export const Freeze = () => {
  return (
    <div className="freeze">
        <div className="component-22">
          <Link className="frame-90" to="/communieat">
            <img className="polygon-9" alt="Polygon" src="/img/polygon-1-16.png" />
            <div className="main-page-5">
              <span className="text-wrapper-109">
                Prev Project:
                <br />
              </span>
              <span className="text-wrapper-110">Communieat</span>
            </div>
          </Link>
          <DivWrapper
            className="frame-91"
            polygon="/img/polygon-1-17.png"
            text="Research Projects"
            to="/i-o-research"
          />
        </div>
        <div className="frame-92">
          <div className="frame-93">
            <div className="group-119">
              <img className="screen-shot-17" alt="Screen shot" src="/img/screen-shot-2023-06-13-at-4-08.png" />
              <img className="screen-shot-18" alt="Screen shot" src="/img/screen-shot-2023-06-13-at-4-16.png" />
            </div>
          </div>
          <div className="group-120">
            <PropertyDefaultWrapper
              className="button-39"
              href="https://www.figma.com/file/an7v39AGHrnDaRIfRkfwmh/FREEZE?type=design&node-id=0%3A1&mode=design&t=v7r7HQ1QP52Yi0mo-1"
              icons="/img/icons.png"
              iconsClassName="button-41"
              property1="link-to-other-pages"
              text="View The Figma Prototype"
              to="/programming-original"
              viewMoreClassNameOverride="button-40"
            />
            <div className="group-121">
              <div className="group-122">
                <div className="text-wrapper-111">Overview</div>
                <p className="text-wrapper-112">
                  FREEZE is an innovative mobile application conceptualized and designed as part of a project for the
                  School of Information Design Competition. As someone who faced the common dilemma of staring blankly
                  into my fridge, wondering what to make, and finding expired products that were never opened, I decided
                  to take up the challenge of solving this issue by designing FREEZE.
                </p>
              </div>
              <h1 className="text-wrapper-113">Freeze App: Your Intelligent Kitchen Assistant</h1>
              <div className="frame-94">
                <div className="group-123">
                  <div className="text-wrapper-114">Role</div>
                  <p className="text-wrapper-115">Team leader, User research, UI/UX Designer</p>
                </div>
                <div className="group-124">
                  <div className="text-wrapper-111">Team</div>
                  <div className="text-wrapper-116">4 People Team</div>
                </div>
                <div className="group-125">
                  <div className="text-wrapper-111">Timeline</div>
                  <div className="text-wrapper-117">2021.1.6 - 2021.4.20</div>
                </div>
              </div>
              <p className="school-of">
                <span className="text-wrapper-118">School </span>
                <span className="text-wrapper-118">o</span>
                <span className="text-wrapper-118">f Information Design Competition Project</span>
              </p>
            </div>
          </div>
          <div className="frame-95">
            <div className="group-126">
              <div className="text-wrapper-119">Background</div>
              <p className="FREEZE-is-designed">
                FREEZE is designed to streamline the day-to-day lives of individuals who find themselves either
                forgetting what groceries they have stocked or grappling with culinary decisions. The app is
                particularly geared towards frequent grocery shoppers, culinary novices, and those aspiring for a
                structured meal plan or a healthier diet. In the hustle of managing groceries and meal planning,
                it&#39;s common to lose track of what&#39;s stored in the refrigerator or to face a creativity block in
                crafting meals with available ingredients. FREEZE serves as a personal kitchen assistant, adept in
                managing grocery inventories, keeping a keen eye on the refrigerator&#39;s contents, and creatively
                suggesting recipes that align with what&#39;s on hand. Joining forces with three like-minded peers from
                SI 482 Interaction Design, who were equally passionate about the Freeze concept, we collaboratively
                sculpted the app and took pride in showcasing it at the School of Information Design Competition
                Project.
              </p>
            </div>
          </div>
          <div className="group-127">
            <div className="text-wrapper-120">Design Process</div>
            <div className="group-128">
              <img className="image-23" alt="Image" src="/img/image-33.png" />
              <div className="passage"> <span className="conceptualize">Conceptualize &amp; Empathize</span>
                <br />
                The project began with jotting down ideas, problem statements, empathy map, competitive analysis, personas, use cases, and scenarios. This
                laid the foundation for understanding what features the app needed to offer.
                <br />
                <br />
                <span className="list">Empathy Map</span>: An empathy map was created to visualize the various aspects of the users’ experiences and
                emotions regarding their grocery shopping and meal planning routines. It helped in understanding what
                users say, think, do, and feel when it comes to managing groceries and deciding what to cook. This
                information was essential in identifying pain points and potential areas for innovation. For instance,
                it was observed that users often express frustration over forgetting what they have in their
                refrigerator, and feel overwhelmed with deciding what to cook using available ingredients.
                <br />
                <br />
                <span className="list">Personas</span>: Based on insights from the empathy map, personas were created to represent the different user
                groups that the FREEZE app aims to serve. These personas included:
                <br />
                <ul>
                  <li><span className="list">Frequent Shoppers</span>: Individuals who purchase groceries frequently but struggle to keep track of what they
                have. They might end up buying redundant items or allowing items to expire.</li>
                  <li><span className="list">Culinary Novices</span>: Those who are not familiar with cooking and lack ideas for recipes. They often find
                  themselves with a fridge full of ingredients but no clue on how to utilize them.</li>
                  <li><span className="list">Health-conscious Planners</span>: Individuals who want to eat healthily and plan their meals in advance. They
                  seek an organized way to manage their shopping lists and get recipe suggestions that align with their
                  dietary preferences.</li>
                </ul>
                <br />
                Each persona was given a background, goals, frustrations, and preferred features. For instance, a
                culinary novice might have the goal of learning new recipes, the frustration of food wastage due to lack
                of recipe knowledge, and a preference for an app feature that suggests recipes based on available
                ingredients.
                <br />
                These empathy maps and personas were instrumental in ensuring that the FREEZE app was designed with the
                user in mind, addressing real-world problems and serving diverse needs.
              </div>
              <div className="group-129">
                <img className="annotated-persona" alt="Annotated persona" src="/img/annotated-persona-primary.png" />
                <img
                  className="annotated-persona-2"
                  alt="Annotated persona"
                  src="/img/annotated-persona-secondary2.png"
                />
              </div>
              <div className="group-130">
                <div className="ellipse-5" />
                <img className="line-12" alt="Line" src="/img/line-11-2.png" />
              </div>
            </div>
          </div>
          <div className="group-131">
            <div className="flex-container-32">
              <div className="text-35">
                <span className="text-wrapper-121">
                  Market Research - Competitive Analysis
                  <br />
                </span>
              </div>
              <div className="text-36">
                <span className="text-wrapper-122">
                  To ensure the usability of FREEZE, a competitive analysis of the top 10 recipe apps was conducted.
                  Their organization and features were considered, and an emphasis was placed on making FREEZE
                  user-friendly and visually distinctive.
                </span>
              </div>
            </div>
            <div className="group-132">
              <div className="ellipse-5" />
              <img className="line-13" alt="Line" src="/img/line-11-3.png" />
            </div>
          </div>
          <div className="group-133">
            <div className="overlap-group-14">
              <div className="group-134">
                <p className="intelligent-recipe">
                  Intelligent Recipe Suggestions: Based on the contents of the fridge, the app suggests recipes, making
                  it easier for users to decide what to cook.
                  <br />
                  Shopping List Manager: Users can maintain a shopping list within the app, ensuring they don’t forget
                  any essentials during their next grocery run.
                  <br />
                  Visually Engaging Interface: Unlike other recipe apps, FREEZE uses delightful drawings of food rather
                  than real photos. This gives it a unique and visually pleasing aesthetic.
                  <br />
                  Future Scope: Plans for future updates include integrating a nutritional guide and meal planner to
                  further assist users in maintaining a balanced diet.
                  <br />
                  Detailed LOF Experiment
                  <br />
                  Assumption: People, mainly those who don’t cook frequently, are likely to forget what they put in a
                  refrigerator.
                  <br />
                  Hypothesis: At least 70% of participants would forget what they put in the boxes.
                  <br />
                  Experiment Setup: Two boxes and 10 common refrigerator items were used. Participants were asked to
                  sort the items into boxes representing freezer or cooling zone without any instruction to remember
                  them.
                  <br />
                  Metrics: If 70% of participants forget more than one item, the assumption is true. Measurements were
                  made only for items they had bought before.
                  <br />
                  Results: Among the four participants, three forgot at least one item (lettuce). The experiment
                  provided valuable insights but also highlighted the complexity of measuring actual user behavior.
                </p>
                <img className="image-24" alt="Image" src="/img/image-31.png" />
              </div>
              <div className="group-135">
                <div className="ellipse-5" />
                <img className="line-14" alt="Line" src="/img/line-11-4.png" />
              </div>
            </div>
            <div className="flex-container-33">
              <div className="text-37">
                <span className="text-wrapper-121">
                  LOF Experiment
                  <br />
                </span>
              </div>
              <div className="text-38">
                <span className="text-wrapper-122">
                  To validate the assumption that people tend to forget what they store in the refrigerator, an
                  experiment was conducted. The hypothesis was that at least 70% of participants would forget what they
                  put in the boxes simulating refrigerator sections. Participants were asked to sort common refrigerator
                  items into boxes representing the freezer and cooling zones. About 5 hours later, participants were
                  asked to recall the items. The metrics were set such that if 70% of participants forgot more than one
                  item, the assumption would be confirmed true. This experiment showed interesting results such as three
                  participants forgetting they placed lettuce in the boxes. This helped in establishing the necessity
                  for the app. (Scroll down for more details on the LOF Experiment)
                </span>
              </div>
            </div>
          </div>
          <div className="group-136">
            <div className="flex-container-34">
              <div className="text-35">
                <span className="text-wrapper-121">
                  Wireframing and Prototyping
                  <br />
                </span>
              </div>
              <div className="text-36">
                <span className="text-wrapper-122">
                  Several low-fidelity wireframes were created to visualize various layouts. We encountered the
                  challenge of efficiently combining features for managing groceries and suggesting recipes. Our
                  solution was to create distinct sections within the app for each function. <br />
                </span>
              </div>
              <div className="text-36">
                <span className="text-wrapper-122">
                  With the wireframes as a base, we developed a high-fidelity prototype and conducted usability tests
                  with 5 participants. The feedback led to several iterations and refinements.
                </span>
              </div>
            </div>
            <div className="group-132">
              <div className="ellipse-5" />
              <img className="line-13" alt="Line" src="/img/line-11-5.png" />
            </div>
          </div>
          <div className="group-137">
            <div className="group-138">
              <div className="overlap-group-15">
                <div className="ellipse-5" />
                <img className="line-15" alt="Line" src="/img/line-11-6.png" />
              </div>
            </div>
            <div className="flex-container-35">
              <div className="text-35">
                <span className="text-wrapper-121">
                  Usability Testing
                  <br />
                </span>
              </div>
              <div className="text-36">
                <span className="text-wrapper-122">
                  After creating the first draft of the high-fidelity prototype, a usability test was conducted with 5
                  potential users to gather feedback and insights on user interaction with the app. This helped in
                  refining the app further.
                </span>
              </div>
            </div>
          </div>
          <div className="group-139">
            <div className="group-140">
              <div className="overlap-group-16">
                <div className="ellipse-5" />
                <img className="line-16" alt="Line" src="/img/line-11-7.png" />
              </div>
            </div>
            <div className="flex-container-36">
              <div className="text-35">
                <span className="text-wrapper-121">
                  Finalizing Design: <br />
                </span>
              </div>
              <div className="text-36">
                <span className="text-wrapper-122">
                  The prototype was further refined based on the results from the analysis of the feedback. The final
                  design boasts a cool color palette of blues and whites, reminiscent of the coolness of a fridge but
                  also exuding the warmth of home-cooked meals. After incorporating all the feedback from 3 iterations,
                  we&nbsp;&nbsp;created the final prototype, ensuring it was intuitive, usable, and met the users&#39;
                  needs.
                </span>
              </div>
            </div>
          </div>
          <div className="flex-container-37">
            <div className="text-39">
              <span className="text-wrapper-121">
                Visual Design: <br />
              </span>
            </div>
            <div className="text-40">
              <span className="text-wrapper-122">
                FREEZE’s visual theme was inspired by its name, using cool blue and white colors to evoke a feeling of
                freshness. The app distinguishes itself by using illustrations instead of real food images to keep the
                interface simple and engaging.
              </span>
            </div>
          </div>
          <div className="flex-container-37">
            <div className="text-39">
              <span className="text-wrapper-121">
                Takeaways: <br />
              </span>
            </div>
            <div className="text-40">
              <span className="text-wrapper-122">
                The design process taught us the importance of understanding the user, iterative design, and feedback.
                Creating an empathy map and personas was essential in building an app that resonates with the user&#39;s
                needs. The LOF experiment was invaluable in validating our assumptions.
              </span>
            </div>
          </div>
          <div className="flex-container-38">
            <div className="text-39">
              <span className="text-wrapper-121">
                Recommendations and Further Actions: <br />
              </span>
            </div>
            <div className="text-40">
              <span className="text-wrapper-122">
                For further development, it&#39;s recommended to incorporate AI for more personalized recipe
                suggestions. Engaging in partnerships with grocery stores for possible integration can enhance the user
                experience. User feedback should continually be collected for ongoing improvements to ensure the app
                stays relevant and useful. Through diligence and attention to user needs, FREEZE can become an
                indispensable tool for meal planning and grocery management.
              </span>
            </div>
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
