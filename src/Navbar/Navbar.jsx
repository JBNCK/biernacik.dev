import './Navbar.css';
import { Link } from 'react-router';

function Navbar() {
    const homeLinkText = navigator.language === "de-DE" ? "Startseite" : "Home";
    const projectLinkText = navigator.language === "de-DE" ? "Projekte" : "Projects";
    let menuOpen = false;

    function menuToggle() {
        if (menuOpen) {
            document.getElementById("menu").style.display = "none";
            menuOpen = 0;
        } else {
            document.getElementById("menu").style.display = "block";
            menuOpen = 1;
        }
    }

    return(
        <div id='navbar'>
            <div className='navbar-element-wrapper' id='navbar-elements-left'>
                <Link className='navbar-link' to='/'>{homeLinkText}</Link>
                <Link className='navbar-link' to="/projects">{projectLinkText}</Link>
                <i onClick={menuToggle} className="bi bi-list social-link" id='menu-toggle'></i>
                <div id='menu' onClick={menuToggle}>
                    <Link className='menu-link' to='/'>{homeLinkText}</Link>
                    <Link className='menu-link' to="/projects">{projectLinkText}</Link>
                </div>
            </div>
            <div className='navbar-element-wrapper' id='navbar-elements-right'>
            <a className='navbar-link' href="https://www.github.com/JBNCK"><i className="bi bi-github social-link"></i></a>
            </div>
        </div>
    );
}

export default Navbar;