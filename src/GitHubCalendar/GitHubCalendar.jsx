import './GitHubCalendar.css';
import isGerman from '../isGerman';

function GitHubCalendar() {
    const profileText = isGerman() ? "GitHub-Profil" : "GitHub Profile";

    return (
        <>
            <div className='github-calendar-wrapper'>
                <img className="github-calendar" src="http://ghchart.rshah.org/JBNCK" alt="Jan Biernacik's Github chart" />
            </div>
            <a href='https://github.com/JBNCK' className='profile-link'><i className="bi bi-arrow-right-circle-fill"></i> {profileText}</a>
        </>
    );
}

export default GitHubCalendar;