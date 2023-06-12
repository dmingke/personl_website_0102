import React from "react";
import { ButtonDefault } from "../../components/ButtonDefault";
import { Group } from "../../components/Group";
import { NavigationBar } from "../../components/NavigationBar";
import "./style.css";

export const ResumeScreen = () => {
  return (
    <div className="resume-screen">
      <div className="resume-2">
        <div className="frame-15">
          <h1 className="element-qq-com">
            <span className="text-wrapper-90">
              戴铭珂
              <br />
            </span>
            <a href="mailto:2358514623@qq.com" rel="noopener noreferrer" target="_blank">
              <span className="text-wrapper-91">2358514623@qq.com</span>
            </a>
            <span className="text-wrapper-92"> | 13888613536</span>
          </h1>
          <div className="text-wrapper-93">教育背景</div>
          <p className="element-GPA">
            2019-08 ~ 2023-08         密歇根大学安娜堡分校    
             专业：心理学与电脑科学&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;辅修：用户体验设计
            <br />
            GPA：3.7 / 4.0 （荣誉学院）
          </p>
          <div className="text-wrapper-94">项目经历</div>
          <div className="flex-container-10">
            <div className="text-38">
              <span className="text-wrapper-95">
                UX设计负责人及认知科学研究组长       
                 密歇根大学信息学院1cademy项目&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                2020-12 ~ 2023.4
                <br />
              </span>
            </div>
            <div className="text-39">
              <span className="text-wrapper-96">
                领导10人团队进行全面的用户调研和产品定义，编写Style guide和design system以规范后续搭建。
                <br />
              </span>
            </div>
            <div className="text-40">
              <span className="text-wrapper-97">
                利用眼动测试技术，深入理解用户如何处理网页信息，并据此对网页进行了持续优化。
                <br />
              </span>
            </div>
            <div className="text-41">
              <span className="text-wrapper-98">
                熟练使用Figma, Adobe Photoshop和Adobe
                Illustrator进行网页原型设计，并与编程小组和设计小组保持密切沟通，共同推进网站的完善。
                <br />
              </span>
            </div>
            <div className="text-42">
              <span className="text-wrapper-99">
                使用HTML, CSS3, React和Python帮助编程小组网站页面创建，并根据用户反馈进行优化。
                <br />
              </span>
            </div>
            <div className="text-43">
              <span className="text-wrapper-100">
                与团队合作设计实验数据收集网站 (项目主题为UX research in Cognitive Psychology of
                Learning)，手绘详细的线框图及实验流程故事板。
                <br />
              </span>
            </div>
            <div className="text-44">
              <span className="text-wrapper-101">
                收集并分析了100个实验参与者的问卷调查反馈，根据结果反馈对实验网站及实验流程细节进行了适应性调整。
                <br />
              </span>
            </div>
            <div className="text-45">
              <span className="text-wrapper-102">
                ​实验助理                                          &nbsp;&nbsp;   密歇根大学组织与工业实验室         
                 &nbsp;&nbsp;             2019-12 ~ 2020-05
                <br />
              </span>
            </div>
            <div className="text-46">
              <span className="text-wrapper-103">
                参与设计并实施了2个调查工具和3个问卷，协助项目负责人进行实验并收集数据。
                <br />
              </span>
            </div>
            <div className="text-47">
              <span className="text-wrapper-104">
                运用SPSS和R等数据分析工具，对研究数据进行编译、整理和分析，可视化数据，并制作了报告。
                <br />
              </span>
            </div>
            <div className="text-48">
              <span className="text-wrapper-105">
                准备了各类项目文档和演示文稿，详尽记录会议要点，以助力项目负责人的工作。
                <br />
              </span>
            </div>
            <div className="text-49">
              <span className="text-wrapper-106">
                制作研究成果总结海报，并在UM大学研究学会上，成功向公众展示了实验室的研究成果。
                <br />
              </span>
            </div>
            <div className="text-50">
              <span className="span-2" />
            </div>
          </div>
          <div className="text-wrapper-107">校园经历</div>
          <div className="flex-container-11">
            <div className="text-51">
              <span className="text-wrapper-108">
                第一代荣誉协会，活动部部长
                <br />
              </span>
            </div>
            <div className="text-52">
              <span className="text-wrapper-109">
                宣传部部长                                                     UM_CSSA                                 
                              2020-08 ~ 2022.12
                <br />
              </span>
            </div>
            <div className="text-53">
              <span className="text-wrapper-110">
                管理UM_CSSA公众号内容及成员排期，确定推送内容的准确性及美观，并根据合伙人或其他部门要求进行公众号排版
                <br />
              </span>
            </div>
            <div className="text-54">
              <span className="text-wrapper-111">讨论，决定并安排长期活动和宣发内容</span>
            </div>
          </div>
          <div className="text-wrapper-112">技能特长</div>
          <div className="flex-container-12">
            <div className="text-55">
              <span className="text-wrapper-113">
                英语，流利
                <br />
              </span>
            </div>
            <div className="text-56">
              <span className="text-wrapper-114">
                Python, CSS3, HTML5, SPSS, R, React, Swift, Shell Scripting，熟练
                <br />
              </span>
            </div>
            <div className="text-57">
              <span className="text-wrapper-115">
                C++, Office软件，photoshop，illustrator，Figma， 熟练
                <br />
              </span>
            </div>
            <div className="text-58">
              <span className="text-wrapper-116">​约10000行代码经历</span>
            </div>
          </div>
        </div>
        <ButtonDefault
          style={{
            position: "absolute",
          }}
        />
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
