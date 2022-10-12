import React, { useCallback } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import Menu from "./components/Menu";
import Home from "./screens/Home";
// import NotFound from "./screens/NotFound";
import Project from "./screens/Project";
import About from "./screens/About";
import { ToastContainer } from "react-toastify";
import { MenuProvider } from "./provider/Menu";
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
        <Switch>
          <MenuProvider>
            <Menu />
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/work" component={Project} />
            {/* <Route path="**" component={NotFound} /> */}
          </MenuProvider>
        </Switch>
      </Router>
    </>
  );
}

export default App;
