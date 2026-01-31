import React from "react";
import "./about.css";
import ImageME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderActive } from "react-icons/vsc";

function About() {
  return (
    <section className="about" id="About">
      <div className="top_section">
        <h5> Get To Know</h5>
        <h2>About Me</h2>
      </div>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_image">
 <img src={ImageME} alt="My Photo" />
          </div>
         
        </div>

        <div className="about_content">
          <div className="about_cards">
            <div className="about_card">
              <FaAward className="about_icon" />
              <h5>Exparience</h5>
              <small>3+ years working</small>
            </div>

            <div className="about_card">
              <FiUsers className="about_icon" />
              <h5>Clients</h5>
              <small>200+ worldwide</small>
            </div>

            <div className="about_card">
              <VscFolderActive className="about_icon" />
              <h5>Projects</h5>
              <small>50+ completed</small>
            </div>
          </div>
          <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque ratione corrupti architecto labore quia asperiores magni a vel, libero earum nemo quod, minus autem natus ut? In nihil, doloribus impedit illo amet nulla consequatur modi voluptatum velit explicabo quod error repudiandae aut aspernatur blanditiis distinctio, est hic quia odio repellendus!</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>

      </div>
    </section>
  );
}

export default About;
