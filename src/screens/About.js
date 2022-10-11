import React from "react";
import "../assets/about.css";
import TextLoop from "react-text-loop";
import { toast } from "react-toastify";

function About() {
  const openMail = () => {
    navigator.clipboard.writeText("phamhande@gmail.com");
    toast("Copy successful, phamhande@gmail.com ");
  };

  const openPhone = () => {
    navigator.clipboard.writeText("0886323318");
    toast("Copy successful, 0886323318 ");
  };

  return (
    <div className="App">
      <div className="App-text about">
        <div className="about-text__title">
          Hello, I'm <span className="about-text__title-big">Pham Phai Ha</span>
          .
        </div>
        <div className="about-text__title">
          I'm looking for <span className="about-text__title-big">Cool</span>{" "}
          works.
        </div>
        <div className="about-text__body">
          i'm a front-end developer with over 4 years of experience.I is
          passionate about technology and cryptocurrency.
          <br />
          <br />I has worked in the fields of software development
          <br />
          <TextLoop interval={2000}>
            <span className="about-text__title-big">E-commerce</span>
            <span className="about-text__title-big">ERP</span>
            <span className="about-text__title-big">CRM</span>
            <span className="about-text__title-big">Blockchain</span>
          </TextLoop>
          <br /> and related projects
        </div>
        <div className="about-social">
          <div className="about-social__title">You can contact me here</div>
          <div className="about-social__links">
            <a
              className="about-social__link"
              href="https://t.me/Pham_Haa"
              rel="noopener noreferrer"
              target="_blank"
            >
              Telegram
            </a>
            <a
              className="about-social__link"
              href="https://github.com/halong99t"
              rel="noopener noreferrer"
              target="_blank"
            >
              Github
            </a>
            <a
              className="about-social__link"
              href="skype:live:.cid.eea25f3e9abdbe49?chat"
              rel="noopener noreferrer"
              target="_blank"
            >
              Skype
            </a>
            <div className="about-social__link" onClick={openMail}>
              email
            </div>
            <div className="about-social__link" onClick={openPhone}>
              Phone
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
