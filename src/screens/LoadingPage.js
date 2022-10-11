import React from "react";
import "../assets/styles.css";
import loadingImg from "../assets/loading.svg";
function LoadingPage() {
  return (
    <div className="loading">
      <img src={loadingImg} alt="loading" />
    </div>
  );
}

export default LoadingPage;
