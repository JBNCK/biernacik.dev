import isGerman from '../../scripts/is-german';
import './Navbar.css';
import { Link } from 'react-router';
import Projects from '../../pages/Projects';
import Home from '../../pages/Home';

function Navbar() {
    let menuOpen = false;

    const componentContent = isGerman() ? {
        homeLinkText: "Startseite",
        projectLinkText: "Projekte"
    } : {
        homeLinkText: "Home",
        projectLinkText: "Projects"
    }

    function toggleMenu() {
        if (menuOpen) {
            document.getElementById("menu-darkener").style.height = "0";
            document.getElementById("menu").style.top = "-9px";
            document.body.style.overflow = "auto";
            menuOpen = false;
        } else {
            document.getElementById("menu-darkener").style.height = "100vh";
            document.getElementById("menu").style.top = "80px";
            document.body.style.overflow = "hidden";
            menuOpen = true;
        }
    }

    return (
        <>
            <div id='navbar'>
                <div id='navbar-left'>
                    <i onClick={toggleMenu} className="bi bi-list"></i>
                    <Link to="/">{componentContent.homeLinkText}</Link>
                    <Link to="/projects">{componentContent.projectLinkText}</Link>
                </div>
                <div id='navbar-right'>
                    <a href='https://github.com/JBNCK'><i className="bi bi-github"></i></a>
                </div>
            </div>
            <div id='menu'>
                <Link className='menu-link' onClick={toggleMenu} to="/">{componentContent.homeLinkText}</Link>
                <Link className='menu-link' onClick={toggleMenu} to="/projects">{componentContent.projectLinkText}</Link>
            </div>
            <div id='menu-darkener' onClick={toggleMenu}></div>
        </>
    )
}

export default Navbar;