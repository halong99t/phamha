import React from "react";
import Card from "../components/Card";
import "../assets/card.css";
import { EffectCards } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";

const data = [
  {
    company: "GMO-Z.COM RUNSYSTEM",
    projectName: "Sale fie",
    member: "10",
    position: "ReactJs developer",
    projectDescription:
      "Staffs management project, Technology Award 'Sao Khue 2021' of vietnam",
    technology: "React JS, Node(Express)",
    workDescription: "make UI/UX like a design, work with BE dev and add api",
    link: "https://salefie.vn/",
  },
  {
    company: "GMO-Z.COM RUNSYSTEM",
    projectName: "Kaike",
    member: "13",
    position: "ReactJs developer",
    projectDescription:
      "Website accounting project. Helping users who do not know about accounting can also do a professional accountant",
    technology: "React JS",
    workDescription: "Make UI/UX like a design, work with BE dev and add api",
    link: "https://app.kaike.vn/",
  },
  {
    company: "GMO-Z.COM RUNSYSTEM",
    projectName: "Admin PL",
    member: "10 ",
    position: "ReactJs developer",
    projectDescription:
      "Staffs management project, Technology Award 'Sao Khue 2021' of vietnam. ",
    technology: "React JS",
    workDescription: "make UI/UX like a design, work with BE dev and add api",
    link: "Private",
  },
  {
    company: "GMO-Z.COM RUNSYSTEM",
    projectName: "MySGR (onsite)",
    member: "10",
    position: "ReactJs developer, review code",
    projectDescription: "Staffs management off Sun Group",
    technology: "React JS (webpack)",
    workDescription:
      "make UI/UX like a design, work with BE dev and add api, manage project front-end, work with filebase, backend ODDO, review code, merge code",
    link: "Private",
  },
  {
    company: "FILINK",
    projectName: "LSTN (product)",
    member: "6 front-end",
    position: "ReactJs developer, teamlead",
    projectDescription: "Auction of NFT products",
    technology: "React JS ,Web3js",
    workDescription:
      "Make UI/UX like a design, work with BE dev and add api, manage project front-end, call data from Blockchain. convert many money, connect metamask wallet",
    link: "Private",
  },
  {
    company: "FPT Software",
    projectName: "Aura-Safe(product)",
    member: "(1 front-end)",
    position: "ReactJs developer",
    projectDescription:
      "Look like gnosis safe, manager many wallet cryto Technology: React JS  ,Web3js",
    technology: "React JS ,Web3js",
    workDescription:
      "make UI/UX like a design, work with BE dev and add api,call data form Blockchain. connect keplr, coin 98 wallet",
    link: "https://pyxis.aura.network/",
  },
];

function Project() {
  return (
    <div className="App">
      <div className="App-text" id="slider">
        {" "}
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          {data &&
            data.map((item, key) => {
              return (
                <SwiperSlide className="card-slide" key={key}>
                  <Card data={item} />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </div>
  );
}

export default Project;
