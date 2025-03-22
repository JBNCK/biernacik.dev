import './GithubGraph.css';
import isGerman from '../../scripts/is-german';

function GithubGraph() {
    const componentContent = isGerman() ? {
        ghLink: "Mein GitHub-Profil"
    } : {
        ghLink: "My GitHub Profile"
    }

    return (
        <div className='gh-component-wrapper'>
            <div className='gh-graph-wrapper'>
                <img className='gh-graph' src="http://ghchart.rshah.org/JBNCK" alt="My Github chart" />
            </div>
            <a className='link' href='https://github.com/JBNCK'>{componentContent.ghLink} <i className="bi bi-arrow-up-right-circle-fill"></i></a>
        </div>
    )
}

export default GithubGraph;