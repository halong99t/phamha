import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";

import Loading from "./screens/LoadingPage";
const App = lazy(() => import("./App"));

const rootElement = document.getElementById("root");

function AppLoader() {
  return (
    <Suspense fallback={<Loading />}>
      <App />
    </Suspense>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <AppLoader />
  </React.StrictMode>,
  rootElement
);
