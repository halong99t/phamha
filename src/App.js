import React, { useCallback } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import Menu from "./components/Menu";
import Home from "./screens/Home";
import NotFound from "./screens/NotFound";
import Project from "./screens/Project";
import About from "./screens/About";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./assets/styles.css";

import { particiles } from "./contant";

function App() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {}, []);
  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particiles}
      />
      <ToastContainer />
      <Router>
        <Menu />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/work" component={Project} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
