import React from "react";
import "../assets/menu.css";
import "../assets/card.css";
function Menu(props) {
  const { data } = props;
  return (
    <div className="container_card">
      <div className="title">{data.company}</div>
      <div className="content">
        <div className="text">
          ProjectName: <span className="info">{data.projectName}</span>
        </div>
        <div className="text">
          Member: <span className="info">{data.member}</span>
        </div>
        <div className="text">
          Position: <span className="info">{data.position}</span>
        </div>
        <div className="text">
          Project Description:{" "}
          <span className="info">{data.projectDescription}</span>
        </div>
        <div className="text">
          Technology: <span className="info">{data.technology}</span>
        </div>
        <div className="text">
          Work Description: <span className="info">{data.workDescription}</span>
        </div>
      </div>
      {data.link !== "Private" && (
        <a
          style={{ marginTop: 20 }}
          className="about-social__link"
          href={data.link}
          rel="noopener noreferrer"
          target="_blank"
        >
          Go to product
        </a>
      )}
    </div>
  );
}

export default Menu;
