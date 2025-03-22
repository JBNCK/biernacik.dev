import fadeIn from "../scripts/fade-in";
import isGerman from "../scripts/is-german";
import PageHeader from "../components/PageHeader/PageHeader";
import GithubGraph from "../components/GithubGraph/GithubGraph";

function Home() {
    fadeIn();

    const pageContent = isGerman() ? {
        pageTitle: "biernacik.dev",
        underConstructionText: "Diese Website befindet sich noch im Aufbau. Bitte besuchen Sie stattdessen mein GitHub-Profil."
    } : {
        pageTitle: "biernacik.dev",
        underConstructionText: "This website is still under construction. Please visit my GitHub profile in the meantime."
    } 

    return (
        <div className="page">
            <PageHeader pageTitle={pageContent.pageTitle} />
            <GithubGraph />
        </div>
    )
}

export default Home;