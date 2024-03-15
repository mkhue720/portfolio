import React from "react";
import { BiLogoTailwindCss, BiLogoCss3, BiLogoHtml5, BiLogoCPlusPlus, BiLogoBootstrap } from "react-icons/bi";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
} from "react-icons/di";

function Techstack() {
  return (
    <div className="grid place-items-center">
        <div className="tech__icon-row">
        <div className="tech__icon-col lg:w-1/5">
            <div className="tech__icons cpp__hover">
            <BiLogoCPlusPlus />
            </div>
        </div>
        <div className="tech__icon-col lg:w-1/5">
            <div className="tech__icons html__hover">
            <BiLogoHtml5 />
            </div>
        </div>
        <div className="tech__icon-col lg:w-1/5">
            <div className="tech__icons css__hover">
            <BiLogoCss3 />
            </div>
        </div>
        <div className="tech__icon-col lg:w-1/5">
            <div className="tech__icons js__hover">
            <DiJavascript1 />
            </div>
        </div>
        <div className="tech__icon-col lg:w-1/5">
            <div className="tech__icons tailwind__hover">
            <BiLogoTailwindCss />
            </div>
        </div>
        <div className="tech__icon-col lg:w-1/5">
            <div className="tech__icons bootstrap__hover">
            <BiLogoBootstrap />
            </div>
        </div>
        <div className="tech__icon-col lg:w-1/5">
            <div className="tech__icons nodejs__hover">
            <DiNodejs />
            </div>
        </div>
        <div className="tech__icon-col lg:w-1/5">
            <div className="tech__icons react__hover">
            <DiReact />
            </div>
        </div>
        <div className="tech__icon-col lg:w-1/5">
            <div className="tech__icons mongodb__hover">
            <DiMongodb />
            </div>
        </div>
        <div className="tech__icon-col lg:w-1/5">
            <div className="tech__icons git__hover">
            <DiGit />
            </div>
        </div>
    </div>
    </div>
  );
}

export default Techstack;