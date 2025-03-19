import './Navbar.css';
import { Link } from 'react-router';

function Navbar() {
    const homeLinkText = navigator.language === "de-DE" ? "Startseite" : "Home";
    const projectLinkText = navigator.language === "de-DE" ? "Projekte" : "Projects";
    let menuOpen = false;

    function menuToggle() {
        if (menuOpen) {
            document.getElementById("navbar").style.boxShadow = "0 0 10px 10px var(--background-alt)";
            document.getElementById("menu-back").style.display = "none";
            document.getElementById("menu").style.top = "-40px";
            document.body.classList.remove("no-scroll");
            menuOpen = 0;
        } else {
            document.body.classList.add("no-scroll");
            document.getElementById("navbar").style.boxShadow = "none";
            document.getElementById("menu-back").style.display = "block";
            document.getElementById("menu").style.top = "80px";
            menuOpen = 1;
        }
    }

    return(
        <>
            <div id='navbar'>
                <div className='navbar-element-wrapper' id='navbar-elements-left'>
                    <Link className='navbar-link' to='/'>{homeLinkText}</Link>
                    <Link className='navbar-link' to="/projects">{projectLinkText}</Link>
                    <i onClick={menuToggle} className="bi bi-list social-link" id='menu-toggle'></i>
                </div>
                <div className='navbar-element-wrapper' id='navbar-elements-right'>
                <a className='navbar-link' href="https://www.github.com/JBNCK"><i className="bi bi-github social-link"></i></a>
                </div>
            </div>
            <div id='menu-back' onClick={menuToggle}></div>
            <div id='menu'>
                <Link className='menu-link' to='/' onClick={menuToggle}>{homeLinkText}</Link>
                <Link className='menu-link' to="/projects" onClick={menuToggle}>{projectLinkText}</Link>
            </div>
        </>
        
    );
}

export default Navbar;