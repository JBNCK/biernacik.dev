import './RepoList.css';
import { useEffect, useState } from 'react';

function RepoList() {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/JBNCK/repos', {
            method: 'GET',
            /* headers: {
                'Authorization': `Bearer GH_PAT`
            }, */
        })
            .then(response => response.json())
            .then(data => setRepos(data))
            .catch(error => console.error("Couldn't fetch repos"));
    }, []);

    return (
        <div id='repo-list'>
            {repos.map(repo => (
                <a key={repo.id} className="repo-item" href={repo.html_url}>
                    <h3>{repo.name}</h3>
                    <p>{repo.description || 'No description'}</p>
                </a>
            ))}
        </div>
    );
}

export default RepoList;