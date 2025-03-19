import RepoList from "./RepoList/RepoList";
import PageHeader from "./PageHeader/PageHeader";
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
        <PageHeader pageTitle={pageTitle} />
        <div className="main-section">
        <RepoList />
        </div>
      </div>
    )
}
  
export default Projects;