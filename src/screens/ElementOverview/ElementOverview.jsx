import React from "react";
import { DivWrapper } from "../../components/DivWrapper";
import { NavigationBar } from "../../components/NavigationBar";
import { Info } from "../../components/Info";
import { Principles } from "../../components/Principles";
import { Severity } from "../../components/Severity";
import { Severity1 } from "../../components/Severity1";
import { SeverityWrapper } from "../../components/SeverityWrapper";
import { Title } from "../../components/Title";
import "./style.css";

export const ElementOverview = () => {
  return (
    <div className="element-overview">
      <div className="element-cademy-overview">
      <h1 className="title">Still working! Coming very soon...</h1>
        <div className="element-7">
          <Title />
          <Principles
            override={
              <Severity
                overlapGroupStyle={{
                  backgroundColor: "#65aff7",
                  borderColor: "#0f3458",
                }}
                style={{
                  minWidth: "76px",
                  position: "relative",
                  width: "unset",
                }}
                text="1"
              />
            }
            style={{
              backgroundColor: "unset",
            }}
            text="Always keep users informed about what is going on, through appropriate feedback within reasonable time."
            text1="When you click on profile icon in upper right and then your name, nothing happens - no feedback"
            text2="I dont even know, what is the purpose of this? Maybe it should take people somewhere?"
          />
          <Principles
            override={
              <SeverityWrapper
                overlapGroupStyle={{
                  backgroundColor: "#65aff7",
                  borderColor: "#0f3458",
                }}
                style={{
                  minWidth: "76px",
                  position: "relative",
                  width: "unset",
                }}
                text="1"
              />
            }
            text="Follow real-world conventions, making information appear in a natural and logical order."
            text1="There is an arrow pointing down at the bottom of the first section, but nothing happens when you click it"
            text2="Make the arrow clickable so users can move down the page or remove it"
            text3={
              <>
                2. Match between system and the <br />
                real world
              </>
            }
          />
          <Principles
            override={
              <DivWrapper
                overlapGroupStyle={{
                  backgroundColor: "#f2ff5e",
                  borderColor: "#5c630c",
                }}
                style={{
                  minWidth: "76px",
                  position: "relative",
                  width: "unset",
                }}
                text="2"
              />
            }
            style={{
              backgroundColor: "unset",
            }}
            text="Users should leave the unwanted state without having to go through an extended dialogue. undo and redo."
            text1="When you scroll past the map, if your cursor is over it, instead of scrolling down the page the map will zoom in"
            text2="Dont have the map automatically zoom in if you are scrolling past it"
            text3="3. User control and freedom"
          />
          <div className="element-8">
            <div className="principle-2">
              <div className="text-wrapper-186">4. Consistency and standards</div>
              <p className="description-2">
                Users should not have to wonder whether different words, situations, or actions mean the same thing.
              </p>
            </div>
            <div className="dipisci-velit-sed">Lanugage is very consistent</div>
            <div className="architecto-beatae" />
            <SeverityWrapper
              style={{
                minWidth: "76px",
                position: "relative",
                width: "unset",
              }}
              text="0"
            />
          </div>
          <div className="element-9">
            <div className="principle-3">
              <div className="text-wrapper-187">5. Error prevention</div>
              <p className="description-3">
                Either eliminate error-prone conditions or check for them and present users with a confirmation option
                before they commit to the action.
              </p>
            </div>
            <div className="sed-ut-perspiciatis">N/A</div>
            <div className="dipisci-velit-sed-2" />
            <Severity1
              overlapGroupStyle={{
                backgroundColor: "#99e876",
                borderColor: "#316619",
              }}
              style={{
                minWidth: "76px",
                position: "relative",
                width: "unset",
              }}
              text="0"
            />
          </div>
        </div>
        <div className="overlap-22">
          <div className="severity-rating">SEVERITY RATING</div>
          <p className="severity-3">
            <span className="text-wrapper-188">0 </span>
            <span className="text-wrapper-189">
              = I don&#39;t agree that this is a usability problem at all
              <br />
            </span>
            <span className="text-wrapper-190">1</span>
            <span className="text-wrapper-191">
              {" "}
              = Cosmetic problem only: fix if time is available
              <br />
            </span>
            <span className="text-wrapper-192">2 </span>
            <span className="text-wrapper-193">
              = Minor usability problem: fixing this should be given low priority
              <br />
            </span>
            <span className="text-wrapper-194">3</span>
            <span className="text-wrapper-195">
              {" "}
              = Major usability problem: important to fix, given high priority
              <br />
            </span>
            <span className="text-wrapper-196">4</span>
            <span className="text-wrapper-197"> = Usability catastrophe: fix this before product can be released</span>
          </p>
          <div className="info-2">
            <div className="overlap-23">
              <Info
                style={{
                  left: "0",
                  position: "absolute",
                  top: "0",
                }}
                text="Catherine Grillo"
              />
              <Info
                style={{
                  left: "0",
                  position: "absolute",
                  top: "51px",
                }}
                text=" iMac/ Chrome"
                text1="Device / Browser/ OS:"
              />
              <Info
                style={{
                  left: "0",
                  position: "absolute",
                  top: "102px",
                }}
                text="2.2.22"
                text1="Date:"
              />
              <Info
                style={{
                  left: "0",
                  position: "absolute",
                  top: "153px",
                }}
                text="1Cademy Homepage"
                text1="Feature/Task:"
              />
            </div>
          </div>
          <div className="title-2">
            <div className="overlap-24">
              <div className="rectangle-15" />
              <h1 className="text-wrapper-198">Heuristic Evaluation</h1>
            </div>
          </div>
          <div className="group-51">
            <div className="overlap-25">
              <img className="image-12" alt="Image" src="/img/image-12.png" />
              <img className="image-13" alt="Image" src="/img/image-10.png" />
            </div>
          </div>
        </div>
        <div className="element-10">
          <Title />
          <div className="element-11">
            <div className="principle-4">
              <p className="text-wrapper-199">6. Recognition rather than recall</p>
              <p className="description-4">
                Minimize the user’s memory load by making objects, actions, and options visible.
              </p>
            </div>
            <p className="element-amet-minim-mollit">
              Dont see any issues, the apply button&nbsp;&nbsp;is always visible, and there isnt much content on the
              home screen that a user has to remember
            </p>
            <div className="amet-minim-mollit" />
            <Severity
              overlapGroupStyle={{
                backgroundColor: "#99e876",
                borderColor: "#316619",
              }}
              style={{
                minWidth: "76px",
                position: "relative",
                width: "unset",
              }}
              text="0"
            />
          </div>
          <div className="element-12">
            <div className="principle-5">
              <p className="text-wrapper-200">7. Flexibility and efficiency of use</p>
              <p className="description-5">Accelerators. Allow users to tailor frequent actions.</p>
            </div>
            <p className="sed-ut-perspiciatis-2">
              No violations, users can easily navigate to different parts of the page using the navigation along the top
            </p>
            <div className="quis-nostrum" />
            <SeverityWrapper
              style={{
                minWidth: "76px",
                position: "relative",
                width: "unset",
              }}
              text="0"
            />
          </div>
          <div className="element-13">
            <div className="principle-6">
              <p className="text-wrapper-201">8. Aesthetic and minimalist design</p>
              <p className="description-6">
                Dialogues should not contain information which is irrelevant or rarely needed.
              </p>
            </div>
            <p className="element-dipisci-velit-sed">Very minimal, only essential information is on this page</p>
            <div className="architecto-beatae-2" />
            <DivWrapper
              overlapGroupStyle={{
                backgroundColor: "#99e876",
                borderColor: "#316619",
              }}
              style={{
                minWidth: "76px",
                position: "relative",
                width: "unset",
              }}
              text="0"
            />
          </div>
          <Principles
            override={
              <SeverityWrapper
                overlapGroupStyle={{
                  backgroundColor: "#65aff7",
                  borderColor: "#2d4d6d",
                }}
                style={{
                  minWidth: "76px",
                  position: "relative",
                  width: "unset",
                }}
                text="1"
              />
            }
            text="Error messages should be expressed in plain language (no codes), precisely indicate the problem, and constructively suggest a solution."
            text1="Published papers column forced me to log into umich account, what if a user doesnt go to a school that allows access to these websites/papers? (affects credibility)"
            text2="I’m not sure if there is a solution, people still might be able to get to see the abstract of the paper without having a school login"
            text3="9. Help users recognize, diagnose, and recover from errors"
          />
          <Principles
            override={
              <Severity1
                overlapGroupStyle={{
                  borderColor: "#2d4d6d",
                }}
                style={{
                  minWidth: "76px",
                  position: "relative",
                  width: "unset",
                }}
                text="1"
              />
            }
            style={{
              backgroundColor: "unset",
            }}
            text="Even though it is better if the system can be used without documentation, it may be necessary to provide help and documentation."
            text1="There is a lot of helpful information on the page, but there is no contact information for people to use"
            text2="Add some way for people exploring the website to reach out. Whether thats a form, or adding an email somewhere on the page"
            text3="10. Help and documentation"
          />
        </div>
        <div className="group-52">
          <div
            className="paul-wrapper"
            style={{
              backgroundImage: "url(/img/image-13.png)",
            }}
          >
            <div className="paul">[paul]</div>
          </div>
        </div>
        <img className="image-14" alt="Image" src="/img/image-11.png" />
        <div className="https-www-figma-com">
          Https://www.figma.com/proto/q9uibvafnv5oxhndpsuefe/mobile-view?type=design&amp;node-id=326-1713&amp;scaling=scale-down&amp;page-id=266%3a12&amp;starting-point-node-id=326%3a1252&amp;show-proto-sidebar=1
        </div>
        <img className="screen-shot-17" alt="Screen shot" src="/img/screen-shot-2023-06-15-at-10-49-1.png" />
        <div className="mini-profile">
          <span className="text-wrapper-202">
            Mini Profile-
            <br />
          </span>
          <span className="text-wrapper-203">Activity Tab</span>
        </div>
        <img className="image-15" alt="Image" src="/img/image-16.png" />
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
    </div>
  );
};
