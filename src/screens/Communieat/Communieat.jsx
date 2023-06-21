import React from "react";
import { Group } from "../../components/Group";
import { NavigationBar } from "../../components/NavigationBar";
import "./style.css";

export const Communieat = () => {
  return (
    <div className="communieat">
      <div className="div-6">
        <div className="overlap-6">
          <div className="frame-10">
            <div className="text-wrapper-109">Wireframe</div>
          </div>
          <div className="frame-11">
            <img className="screen-shot-11" alt="Screen shot" src="/img/screen-shot-2023-06-09-at-11-29-1.png" />
            <img className="screen-shot-12" alt="Screen shot" src="/img/screen-shot-2023-06-10-at-12-19-1.png" />
            <img className="screen-shot-13" alt="Screen shot" src="/img/screen-shot-2023-06-10-at-12-20-1.png" />
          </div>
        </div>
        <div className="frame-12">
          <div className="overlap-group-8">
            <div className="group-23">
              <img
                className="annotated-team"
                alt="Annotated team"
                src="/img/annotated-team-20istanbul-20personas-page-2-2-1.png"
              />
              <img
                className="annotated-team-2"
                alt="Annotated team"
                src="/img/annotated-team-20istanbul-20personas-page-1-2-1.png"
              />
              <img
                className="annotated-team-3"
                alt="Annotated team"
                src="/img/annotated-team-20istanbul-20personas-page-3-2-2.png"
              />
            </div>
            <div className="primary-secondary">Primary &amp; Secondary Persona</div>
          </div>
        </div>
        <div className="frame-13">
          <div className="text-wrapper-110">Background</div>
          <p className="text-wrapper-111">
            Some services exist such as HelloFresh where a box of product and a recipe is delivered to your doorstep for
            you to cook. However, this subscription may start off cheap but can get expensive over time. Additionally,
            cooking these meals still takes a lot of time to prepare and the food can go bad if you save it for a later
            date. Our service is meant to be an instant-ordering service. While services such as HelloFresh deliver
            quality whole foods, a communal aspect is lacking that connects users to their delivery. Additionally, we
            want to provide a variety of recipes that match user cravings, as we know hunger cravings can change
            depending on the hour. With a HelloFresh package, you are stuck eating what comes in your box even if you do
            not crave the product at time of delivery. A description of the essential functions that a tool would need
            to have that would, from your perspective, support this activity in a robust way. A way for the food to get
            delivered to the user (delivery drivers, etc), a platform that connects the cook and user, the ability for
            personalized recommendations and individualized user recipe requests, delivery/pickup options
          </p>
        </div>
        <div className="frame-14">
          <div className="group-24">
            <img className="screen-shot-14" alt="Screen shot" src="/img/screen-shot-2023-06-10-at-12-13-1.png" />
            <img className="screen-shot-15" alt="Screen shot" src="/img/screen-shot-2023-06-10-at-12-07-1.png" />
          </div>
        </div>
        <div className="group-25">
          <p className="text-wrapper-112">
            Current food delivery systems make it difficult for users to eat healthy while eliminating food waste. The
            goal of this app is to provide a platform for those who love cooking, but do not have the time or means to
            create a restaurant. Additionally, we want to give those who are in need of healthy, sustainable food access
            to these meals at any time, any place.
          </p>
          <h1 className="text-wrapper-113">CHI 2023 Student Design Challenge: Communieat App Design</h1>
          <div className="text-wrapper-114">Overview</div>
          <div className="text-wrapper-115">Role</div>
          <p className="text-wrapper-116">
            Team leader, User research (interview, usability testing), interaction, visual design, prototyping
          </p>
          <div className="text-wrapper-117">2022.1.6 - 2022.4.20</div>
        </div>
        <div className="group-26">
          <div className="text-wrapper-118">Understanding the problem</div>
          <p className="scenario-sample">Scenario Sample - “tight Spender” Jacob</p>
          <p className="jacob-is-a-years">
            Jacob Is A 23 Years Old Post-graduate Student Living In New York City. He Works An Entry Level 9am-5pm Job
            As An Advertising Analyst. Since He Is So Busy All The Time, He Does Not Have A Lot Of Time To Cook.
            However, He Doesn&#39;t Like Spending A Lot Of Money As He Is On His Own For The First Time And Is Trying To
            Budget Appropriately. Jacob Comes Home From Work And Is Extremely Hungry For Dinner. He Is Craving A Hearty
            Meal Of Salmon And Vegetables, But Does Not Have A Lot Of Groceries On Hand And Quite Frankly Is Too Tired
            To Even Cook. Jacob Decides To Go Online To Assess His Options. As Someone Who Is Price-conscious, Jacob
            Compares The Prices On Various Delivery Apps. He Also Looks At Pickup Options. To His Surprise, Doordash Has
            A Promotion For Free Delivery! Jacob Lives In The City, So Has A Hard Time Justifying Getting Food Delivered
            Due To The Extra Fees. However, With This Promotion, The Fees Are Eliminated And So, Jacob Proceeds With His
            Order. While On The App, He Has A Difficult Time Filtering Through All Of The Restaurants. He Wishes That He
            Could Just Type In Exactly What He Is Craving And Have His Desires Met. Additionally, He Misses His Home And
            Craves A Healthy, Home-cooked Meal Instead Of A Restaurant&#39;s Menu. He Makes Do With What He Has, Though,
            And Proceeds With His Order. His Food Arrives Quickly And He Is Pleasantly Surprised That The Delivery Did
            Not Forget Silverware! Overall, His Experience Today Went Well, But He Knows That This Is A Rarity Since His
            Experience Is Contingent On Price And Timing.
          </p>
        </div>
        <div className="group-27">
          <img className="user-flow-page" alt="User flow page" src="/img/user-flow-page-2-1.png" />
          <div className="text-wrapper-119">User Flow</div>
        </div>
        <div className="overlap-7">
          <div className="group-28">
            <img className="annotated-sketches" alt="Annotated sketches" src="/img/annotated-sketches-page-1-1.png" />
            <div className="sketch-storyboards">Sketch &amp; Storyboards</div>
            <img className="annotated-sketches-2" alt="Annotated sketches" src="/img/annotated-sketches-page-2.png" />
          </div>
          <img className="image-7" alt="Image" src="/img/image-19.png" />
        </div>
      </div>
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
          <Group
        style={{
          position: "fixed",
        }}
      />
    </div>
  );
};
