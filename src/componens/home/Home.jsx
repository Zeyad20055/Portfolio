import React from "react";
import "./home.css";
import Me from "../../assets/me.png";
import CV from "../../assets/cv.pdf";
import HomeSoocil  from "./HomeSoocil"

function Home() {
  return (
    <div className="home">
      <div className="container home_container">
        <h4>Hello I'm</h4>
        <h1>Zeyad Hamdy</h1>
        <h4 className="text-light">Front End Developer</h4>

        <div className="btns">
          <a href={CV} className="btn" download>
            {" "}
            Download CV
          </a>
          <a href="" className="btn btn-primary">
            {" "}
            Lets talk{" "}
          </a>
        </div>

        <div className="me">
          <img src={Me} alt="" />
        </div>

        <a href="#about" className="scroll_down">Scroll Down</a>
<HomeSoocil/>
      

      </div>
      
    </div>
    
  );
}

export default Home;
