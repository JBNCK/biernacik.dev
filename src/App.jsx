import isGerman from "./isGerman";
import { useEffect } from "react";
import PageHeader from "./PageHeader/PageHeader";
import GitHubCalendar from "./GitHubCalendar/GitHubCalendar";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
      
    setTimeout(() => {
      document.getElementById("page").style.opacity = "1";
    }, 1);
  });

  const pageContent = isGerman() ? {
    pageTitle: "biernacik.dev",
    pageDesc: "Diese Seite befindet sich noch im Aufbau. Bitte besuchen Sie stattdessen mein GitHub-Profil."
  } : {
    pageTitle: "biernacik.dev",
    pageDesc: "This website is currently under construction. Please visit my GitHub profile in the meantime."
  }

  return (
    <div id="page">
      <PageHeader pageTitle={pageContent.pageTitle} />
      <div className="main-section">
        <GitHubCalendar />
      </div>
      <div className="main-section">
        <p>{pageContent.pageDesc}</p>
      </div>
    </div>
  )
}

export default App;