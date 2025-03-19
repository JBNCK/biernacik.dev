import RepoList from "./RepoList/RepoList";
import { useEffect } from "react";
import isGerman from "./isGerman";

function Projects() {
    useEffect(() => {
        window.scrollTo(0, 0);
          
        setTimeout(() => {
            document.getElementById("page").style.opacity = "1";
        }, 1);
    });

    const pageTitle = isGerman() ? "Projekte" : "Projects";

    return (
      <div id="page">
        <div className="main-section">
        <h1 className="main-section-title">{pageTitle}</h1>
        <RepoList />
        </div>
      </div>
    )
}
  
export default Projects;