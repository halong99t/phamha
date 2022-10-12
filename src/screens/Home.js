import React, { useContext } from "react";
import Button from "../components/Button";
import MenuContext from "../provider/Menu";
function App() {
  const { menuOpen, toggleMenu } = useContext(MenuContext);
  return (
    <>
      <div className="App">
        <div className="App-text">
          <h1 className="App-text__title">Pham Phai Ha</h1>
          <h2 className="App-text__body">Webcome to my CV !</h2>
          <h2 className="App-text__body">I am a front-end developer</h2>
          <span
            onClick={() => {
              toggleMenu(!menuOpen);
            }}
          >
            <Button />
          </span>
        </div>
      </div>
    </>
  );
}

export default App;
