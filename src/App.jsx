import isGerman from "./isGerman";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
      
    setTimeout(() => {
      document.getElementById("page").style.opacity = "1";
    }, 1);
  });

  const pageTitle = "biernacik.dev";
  const pageDesc = isGerman() ? "Diese website befindet sich noch im Aufbau" : "This website is still under construction";
  return (
    <div id="page">
      <div className="main-section">
      <h1>{pageTitle}</h1>
      <p>{pageDesc}</p>
      </div>
    </div>
  )
}

export default App;