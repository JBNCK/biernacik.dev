import RepoList from "./RepoList/RepoList";
import isGerman from "./isGerman";

function Projects() {
    const pageTitle = isGerman() ? "Projekte" : "Projects";

    return (
      <div className="page">
        <div className="main-section">
        <h1 className="main-section-title">{pageTitle}</h1>
        <RepoList />
        </div>
      </div>
    )
}
  
export default Projects;