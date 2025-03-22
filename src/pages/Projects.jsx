import fadeIn from "../scripts/fade-in";
import isGerman from "../scripts/is-german";
import PageHeader from "../components/PageHeader/PageHeader";
import RepoList from "../components/RepoList/RepoList";

function Projects() {
    fadeIn();

    const pageContent = isGerman() ? {
        pageTitle: "Projekte"
    } : {
        pageTitle: "Projects"
    } 

    return (
        <div className="page">
            <PageHeader pageTitle={pageContent.pageTitle} />
            <RepoList />
        </div>
    )
}

export default Projects;