import React from "react";
import { NavigationBar } from "../../components/NavigationBar";
import "./style.css";

export const Freeze = () => {
  return (
    <div className="freeze">
      <div className="div-4">
        <div className="flex-container-wrapper">
          <div className="flex-container-9">
            <div className="text-36">
              <span className="text-wrapper-57">
                The recipe page of FREEZE
                <br />
              </span>
            </div>
            <div className="text-37">
              <span className="text-wrapper-58">
                ​Design process and Rationale: The idea of this app came into my mind when I was looking at my fridge
                and thinking about what to eat today. However, I had nothing in my mind. At another time, I was cleaning
                the fridge and finding there are many items expired but it even has not been opened. These issues I had
                are my reason to design this app. I started my design by formalizing my ideas on the document, writing
                the problem statement, persona, use cases, and scenario. After that, I asked for advice for improvement.
                I did not consider those ingredients won&#39;t store in the fridge, so I added them to my use cases.
                Then, I designed an experiment to test my LOF assumption. I asked subjects to remember the items that
                they sorted previously after 5 hours. They barely remembered the items, which justified that shoppers
                are easy to forget what they had in the fridge after a certain period, so they do have the need for my
                app to record. I had some issues visualizing my idea. How to make the app smoothly achieve the purpose
                is not very direct to me. I separated the problem into three pieces, recording items in the fridge,
                shopping list, and suggesting recipes. Starting with the low-fidelity design, I drew the wireframe of
                several possible ideas firstly on Balsamiq Wireframes and chose the one I like for more advice. Since
                the layout of the shopping list is similar to the fridge recording list. It is difficult to distinguish,
                so I modified the layout. After finishing the prototype on Figma, I asked for more advice and revised
                several details.
              </span>
            </div>
          </div>
        </div>
        <div className="overlap-5">
          <div className="group-14">
            <img className="screen-shot-3" alt="Screen shot" src="/img/screen-shot-2023-06-13-at-4-08.png" />
            <img className="screen-shot-4" alt="Screen shot" src="/img/screen-shot-2023-06-13-at-4-16.png" />
          </div>
        </div>
        <p className="more-rationale-i">
          More Rationale
          <br />i Have Checked The Top 10 Downloaded Recipe Apps And Browsed How They Are Organized And Their Features.
          I Don&#39;t Want My App To Be Complicated, Rather I Want It To Be A Tool Like A Timer, Which Is Easy And Plain
          To Use. So, According To Jakob&#39;s Law, I Designed My Wireframe Based On The Formats That Are Generally Used
          By Apps. However, I Also Wanted My App To Distinguish It From Other Recipe Apps, So I Used Many Drawings Of
          Food Rather Than Real Pictures Of Food. The Theme Of Blue Is Due To The App&#39;s Name, Freeze. So, I Was
          Considering Using White And Blue As Two Main Colors, Hoping To Make A Feeling Of Cool (fridge) But Still Warm
          (food). The Reason Why I Separated The Fridge Recorder By Refrigerator And Freezer Is That This Is The Way How
          People Remember The Items In The Fridge, Which I Discovered When I Was Constructing The Experiment For
          Examining My Lof Assumption.
        </p>
        <p className="user-feedback-the">
          User Feedback: The Process Of Adding Items To The Fridge Recorder Is Not Highly Usable. The Process Can Be
          Further Simplified And Automated. The Connection Between The Shopping List And The Fridge Recorder Can Be
          Enhanced. The Page Of Recipe Suggestions Is Cool, But Differentiating The Ingredients That Users Already Had
          From Those They Need To Buy Would Make It Clearer. Overall. They Like The Visuals Which Are Quite Distinct.
          The App Does Achieve The Function To Record Items In The Fridge. Two Of The Users Think The Function That Adds
          Ingredients Directly To The Shopping List Increases Usability.
        </p>
        <p className="next-step-based-on">
          Next Step:
          <br />
          based On The Feedback Users Gave, I Will Further Improve The &#34;adding Item&#34; Function To Be Simpler.
          This Page Is An Example Of One Of Two Ways To Add Items, By Scanning The Barcode, However, The Way To Exist
          This Page Is Not Direct To Users, So Adding More Detailed Onboarding Is Needed To Increase Usability. And, I
          Modify The Visual Elements Of Two Lists With Better Design. The Connection Between Each Function Also Should
          Be Enhanced.
        </p>
        <p className="persona-the-primary">
          Persona: The Primary Persona Is Those Who Would Purchase Groceries Frequently And Those Who Like To Store Food
          Or Items.
          <br />
          the Secondary Is Those Who Are Not Familiar With Cooking And Do Not Know Many Recipes.
          <br />
          other Are Like Those Who Want To Make A Shopping List Or Want To Eat Healthily.
        </p>
        <p className="text-wrapper-59">
          People who are not familiar with cooking or buy groceries frequently want to manage their grocery purchases
          and cooking plans because they are likely to forget what they already brought or have no idea about what to
          eat based on the food in the refrigerator.
        </p>
        <h1 className="text-wrapper-60">Problem Statement:</h1>
        <div className="scenarios-use-cases">Scenarios, Use Cases, Personas</div>
        <NavigationBar
          style={{
            backgroundColor: "#e5eef8",
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
      </div>
    </div>
  );
};
