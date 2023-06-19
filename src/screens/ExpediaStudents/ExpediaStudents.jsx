import React from "react";
import { Component } from "../../components/Component";
import { Group } from "../../components/Group";
import { NavigationBar } from "../../components/NavigationBar";
import "./style.css";

export const ExpediaStudents = () => {
  return (
    <div className="expedia-students">
      <div className="div-3">
        <div className="overlap-2">
          <div
            className="group-2"
            style={{
              backgroundImage: "url(/img/image-17.png)",
            }}
          >
            <div className="rectangle-4" />
            <div className="rectangle-5" />
          </div>
          <img className="element-stars-page" alt="Element stars page" src="/img/5-stars-page-1-1.png" />
          <img className="img" alt="Element stars page" src="/img/5-stars-page-5-1.png" />
        </div>
        <div className="overlap-3">
          <img className="image" alt="Image" src="/img/image-7.png" />
          <div className="rectangle-6" />
          <div className="frame-4">
            <h1 className="h-1">Expedia: Student Travel User Research</h1>
            <p className="problem-statement">
              <span className="span">Problem Statement</span>
              <span className="text-wrapper-2">: </span>
              <span className="text-wrapper-3">What are the unique needs of students when they travel? </span>
            </p>
          </div>
          <div className="group-3">
            <Component
              style={{
                left: "0",
                position: "absolute",
                top: "0",
              }}
            />
            <Component
              style={{
                left: "0",
                position: "absolute",
                top: "160px",
              }}
              text="Team"
              text1="5 People Team"
              usabilityNeedsAndStyle={{
                whiteSpace: "nowrap",
                width: "unset",
              }}
            />
            <Component
              style={{
                left: "496px",
                position: "absolute",
                top: "160px",
              }}
              text="Role"
              text1="Ux Researcher"
              usabilityNeedsAndStyle={{
                whiteSpace: "nowrap",
                width: "unset",
              }}
            />
            <Component
              style={{
                left: "0",
                position: "absolute",
                top: "320px",
              }}
              text="Timeline"
              text1="2022.1 - 2022.4"
              usabilityNeedsAndStyle={{
                whiteSpace: "nowrap",
                width: "unset",
              }}
            />
            <Component
              style={{
                left: "496px",
                position: "absolute",
                top: "320px",
              }}
              text="Research Method"
              text1="Interview, Scenario, Survey, Persona, Affinity Diagramming"
            />
            <Component
              style={{
                left: "496px",
                position: "absolute",
                top: "0",
              }}
              text="Purpose"
              text1="Designing A New Expedia Website Usability Needs And Evaluation Catering To Student Travel"
            />
          </div>
        </div>
        <div className="text-wrapper-4">Overview</div>
        <div className="empathize-research">Empathize &amp; Research</div>
        <div className="flex-container">
          <div className="text">
            <span className="text-wrapper-5">
              The research focused on the student&#39;s specific travel needs to analyze and redesign Expedia&#39;s
              website to better tailor it for future students’ travel needs. Interviews and surveys were used to gather
              qualitative and quantitative data concerning students&#39; travel needs, and the participants were all
              college students from Michigan. <br />
            </span>
          </div>
          <div className="span-wrapper">
            <span className="text-wrapper-6">
              Upon conversation with my friend about our plan to travel to Miami, we like to use Expedia to see the
              hotel and flight information. However, we found that there is always a pain to plan a long trip, like
              where to stay and what to visit since we need to browse tons of information online and jump from one site
              to another to make a decision. We start to wonder if having to use tons of apps to plan a trip was only my
              main frustration with using online travel platforms and what their primary needs are when they travel.
              Knowing that we want to try redesigning Expedia to generate a better user experience for students (aged
              18-25). All team members are from the UX education student organization, a newly founded student
              institution. I invited them to carry out this UX research project as an organizational activity.
            </span>
          </div>
        </div>
        <img className="img-2" alt="Img" src="/img/untitledsoftwaredeveloperpersona-1-1.png" />
        <p className="preparing-interview">Preparing Interview &amp; Collecting Data</p>
        <p className="conducting-affinity">Conducting Affinity Diagramming &amp; Organizing Results</p>
        <div className="flex-container-2">
          <div className="text-2">
            <span className="text-wrapper-7">
              After coding their answers by well-marked themes related to their travel needs, we used affinity
              diagramming to further gather and analyze these themes and six main themes of participants&#39; travel
              needs:
              <br />
            </span>
          </div>
          <div className="text-3">
            <span className="text-wrapper-8">
              efficiency
              <br />
            </span>
          </div>
          <div className="text-4">
            <span className="text-wrapper-9">time efficiency​: </span>
            <span className="text-wrapper-10">
              valuing the plan that uses time in a highly effective way;
              <br />
            </span>
          </div>
          <div className="text-5">
            <span className="text-wrapper-11">cost-efficiency: </span>
            <span className="text-wrapper-12">
              Valuing that money is spent on things worthy;
              <br />
            </span>
          </div>
          <div className="text-6">
            <span className="text-wrapper-13">organization for clarifying and efficiency: </span>
            <span className="text-wrapper-14">
              valuing organization so developing ability to check traveling details more quickly and easily;
              <br />
            </span>
          </div>
          <div className="text-7">
            <span className="text-wrapper-15">Family/friend connections: </span>
            <span className="text-wrapper-16">
              travel as a way to enhance connections between friends/family;
              <br />
            </span>
          </div>
          <div className="text-8">
            <span className="text-wrapper-17">Flexibility: </span>
            <span className="text-wrapper-18">
              valuing the ability to adjust the plan according to their interests; <br />
            </span>
          </div>
          <div className="text-9">
            <span className="text-wrapper-19">Comfort: t</span>
            <span className="text-wrapper-20">
              raveling in a comfortable and fun way;
              <br />
            </span>
          </div>
          <div className="text-10">
            <span className="text-wrapper-21">Pre-planning validation: </span>
            <span className="text-wrapper-22">
              valuing the ability to realize expectations at the time of planning;
            </span>
          </div>
        </div>
        <div className="flex-container-3">
          <div className="text-11">
            <span className="text-wrapper-23">
              Participants requirements: 10 college students who have traveled within the past 6 months;
              <br />
            </span>
          </div>
          <div className="text-12">
            <span className="text-wrapper-24">The </span>
            <a
              href="https://docs.google.com/document/d/1Xavy7ZAlrbQ3EjBMd16-4IS1n8EDszFLQ9ObC7KnO7A/edit"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="text-wrapper-25">Interview guide</span>
            </a>
            <span className="text-wrapper-26">
              {" "}
              was discussed and prepared before all interviews. All questions were ensured to be descriptive and not
              leading.{" "}
            </span>
            <span className="text-wrapper-27">Photo elicitation</span>
            <span className="text-wrapper-28">
              {" "}
              was used to give more
              <br />
            </span>
          </div>
          <div className="text-13">
            <span className="text-wrapper-29">
              concrete examples of problems that they might encounter or a typical travel process to elicit more
              detailed memory.
            </span>
          </div>
        </div>
        <img className="image-2" alt="Image" src="/img/image-4.png" />
        <p className="our-research-team">
          <span className="text-wrapper-30">
            Our research team conducted a survey to gain further insights into the travel needs of college students. We
            had previously conducted interviews, and the survey was designed to validate our assumptions and gather
            additional evidence. We selected 100 college students from Michigan, California, Texas, and New York,
            representing different regions of America, to explore whether students&#39; geographic location impacts
            their travel choices. The survey consisted of 20 questions and were focused on confirming our interview
            conclusions while&nbsp;&nbsp;uncovering factors influencing participants&#39; activity and destination
            preferences during their travels. To ensure that our survey was not biased or influenced by the behavior of
            our respondents, we piloted the first versions to beta-test our questions. <br />
          </span>
          <a
            href="https://docs.google.com/spreadsheets/d/1J2YRpwOPsN_E8UHk416naBjmrv40FGOYJ5DqRALybdM/edit?usp=sharing"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="text-wrapper-31">
              <br />
            </span>
          </a>
          <span className="text-wrapper-32">
            The survey provided our team with valuable quantitative and qualitative data, shedding light on several key
            themes regarding students&#39; travel needs. These themes included the importance of cost, interpersonal
            relationships, engagement in fun and outdoor activities, preference for beach destinations, and the
            significance of time efficiency. By analyzing the responses of the 100 college students from different
            states, we were able to draw meaningful conclusions about the factors influencing their travel choices.
          </span>
        </p>
        <p className="collecting-survey">Collecting Survey Data And Visualizing</p>
        <div className="text-wrapper-33">Recommendations</div>
        <p className="overview-of-data">Overview Of Data Generated From The Research</p>
        <div className="qualitative-data-and">Qualitative Data And Analysis</div>
        <div className="group-4">
          <div className="interview">Interview</div>
          <div className="group-5">
            <div className="access-to-affinity-wrapper">
              <a href="https://miro.com/app/board/uXjVOKx3kK8=/" rel="noopener noreferrer" target="_blank">
                <p className="access-to-affinity">Access To&nbsp;&nbsp;Affinity Diagramming</p>
              </a>
            </div>
          </div>
          <div className="text-wrapper-34">Affinity Diagramming</div>
          <div className="text-wrapper-35">Survey</div>
          <div className="text-wrapper-36">Persona</div>
          <div className="overlap-wrapper">
            <div className="access-to-interview-wrapper">
              <a
                className="access-to-interview"
                href="https://docs.google.com/spreadsheets/d/1lpWaUpcQVCvgZwqCAt3eEsU4E3SAglpd5rQ0IYidCSc/edit#gid=0"
                rel="noopener noreferrer"
                target="_blank"
              >
                Access To Interview Data
              </a>
            </div>
          </div>
          <div className="group-6">
            <div className="access-to-survey-wrapper">
              <a
                className="access-to-survey"
                href="https://docs.google.com/spreadsheets/d/1J47RcMcFbv75wF2jd5C-WERu-bMlkUBCDVJ6YIeLwME/edit#gid=0"
                rel="noopener noreferrer"
                target="_blank"
              >
                Access To Survey Data
              </a>
            </div>
          </div>
          <div className="group-7">
            <div className="access-to-persona-wrapper">
              <div className="access-to-persona">Access To Persona</div>
            </div>
          </div>
        </div>
        <p className="p">
          Extracting useful information from interviews and surveys for web redesign is not as easy as we might have
          thought. Further application of these findings into design also required time and effort to discuss and
          brainstorm ideas. From this research, I realized that asking non-leading and descriptive questions in
          interviews and surveys determines whether or not non-directive answers are obtained from participants.
          Preventing assumptions from being made is critical to UX research. Since everyone has experience using a
          website/app, our personal experience can greatly influence the conclusions drawn from the data. In order to
          prevent it from happening, it is very useful for me to repeatedly reflect on whether I make assumptions ahead
          of time.
        </p>
        <p className="for-current-expedia">
          For current Expedia.com, based on the data we gathered, I proposed a few recommendations： <br />
          when booking flights or stays, platforms can first ask about the purpose of travel, vacation, or business; if
          travel for vacation, stays, flights, car rents, and attractions are recommended to be booked at once as a big
          travel package. One option is that Expedia.com can collaborate with Yelp.com to make bookings (Yelp.com was
          mentioned as one of the most frequent sites to make travel plans). Attraction tickets can also be booked in
          this comprehensive package. Moreover, the most frequently booked package can be recommended to users and
          enable them to make adjustments to this package. The site currently separates booking flights or stays. Based
          on the data, I would suggest making it a shopping cart in which they can add all products (e.g., flights,
          hotels, attractions tickets, or reservations), book and make payment all at once with less effort required.
          <br />
          After making a purchase, all trip details should be layouts chronologically, and viewed the main details
          (e.g., time, locations including the link directing to map apps, special notices/requirements) easily.
          <br />
          the app can provide a tool to compare costs between different travel plans when users add or remove an item
          like flight reservations.
          <br />
          In this way, users can save effort to compare costs and values and make reservations site-by-site by booking
          everything at one site or directly leading to the site, then finishing the bookings.
          <br />
          Lastly, the final design can be complicated. Collaboration with my teammate and further research on the
          low-fidelity design version, such an iteration, are necessary.
        </p>
        <div className="text-wrapper-37">Key Takeaways:</div>
        <p className="based-off-of-the">
          Based off of the data we gathered, we began to fabricate user personas to understand the different types of
          people concerned by focusing on two main themes from affinity map and survey.&nbsp;&nbsp;Madison Jones is the
          personas for primary users for the Expedia student website.
        </p>
        <div className="creating-a-user">Creating A User Persona</div>
        <div className="creating-user">Creating User Journey Map</div>
        <div className="ellipse" />
        <div className="ellipse-2" />
        <div className="overlap-4">
          <div className="ellipse-3" />
          <img className="line" alt="Line" src="/img/line-12.png" />
        </div>
        <div className="ellipse-4" />
        <div className="ellipse-5" />
        <div className="overlap-5">
          <div className="ellipse-6" />
          <img className="line-2" alt="Line" src="/img/line-13.png" />
        </div>
        <div className="overlap-6">
          <div className="ellipse-7" />
          <img className="line-3" alt="Line" src="/img/line-14.png" />
        </div>
        <div className="ellipse-8" />
        <div className="ellipse-9" />
        <div className="ellipse-10" />
        <img className="line-4" alt="Line" src="/img/line-10.png" />
        <img className="line-5" alt="Line" src="/img/line-16.png" />
        <img className="line-6" alt="Line" src="/img/line-11.png" />
        <img className="line-7" alt="Line" src="/img/line-19.png" />
        <img className="line-8" alt="Line" src="/img/line-15.png" />
        <img className="line-9" alt="Line" src="/img/line-17.png" />
        <img className="line-10" alt="Line" src="/img/line-18.png" />
        <p className="text-wrapper-38">
          We began our journey by interviewing Michigan college students to gain insight into students’ frustrations
          from planning a trip to the end of it and the step-by-step planning process. We needed to see if there was a
          general frustration and an indication of improvement to Expedia. After finishing coding responses from our 10
          interviewees in 15-minutes interviews each, we conducted an affinity diagramming to analyze our qualitative
          data.
        </p>
        <img className="image-3" alt="Image" src="/img/image-10.png" />
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