import React from "react";
import "./skils.css";

import Css from "../../assets/css3.svg";
import Xppressjs from "../../assets/expressjs.svg";
import Figma from "../../assets/figma.svg";
import Javascript from "../../assets/javascript.svg";
import Mongodb from "../../assets/mongodb.svg";
import Nodejs from "../../assets/nodejs.svg";
import ReactJs from "../../assets/react.svg";
import Taliwind from "../../assets/tailwindcss.svg";

const skillsData = [
  {
    id: 1,
    icon: Css,
    title: "Css",
    desc: "User Interface",
  },
  {
    id: 2,
    icon: Xppressjs,
    title: "Express.js",
    desc: "Backend Framework",
  },
  {
    id: 3,
    icon: Figma,
    title: "Figma",
    desc: "Design Tool",
  },
  {
    id: 4,
    icon: Javascript,
    title: "JavaScript",
    desc: "Frontend Language",
  },
  {
    id: 5,
    icon: Mongodb,
    title: "MongoDB",
    desc: "Database",
  },
  {
    id: 6,
    icon: ReactJs,
    title: "React.js",
    desc: "Frontend Library",
  },
  {
    id: 7,
    icon: Taliwind,
    title: "Tailwind CSS",
    desc: "CSS Framework",
  },
  {
    id: 8,
    icon: Nodejs,
    title: "Node.js",
    desc: "Backend Runtime",
  },
];

function Skils() {
  return (
    <div>
      <section className="skills" id="skills">
        <div className="top_section">
          <h5>What Skills Have</h5>
          <h2>My Experience</h2>
        </div>

        <div className="container container_skills">
          {skillsData.map(({ id, icon, title, desc }) => {
            return (
              <article className="card_skill" key={id}>
                <div className="icon">
                  <img src={icon} alt={title} />
                </div>
                <div className="content">
                  <h4>{title}</h4>
                  <p className="text-light">{desc}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Skils;
