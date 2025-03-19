import isGerman from '../../scripts/is-german';
import './Navbar.css';
import { Link } from 'react-router';
import Home from '../../pages/Home';

function Navbar() {
    let menuOpen = false;

    const componentContent = isGerman() ? {
        homeLinkText: "Startseite"
    } : {
        homeLinkText: "Home"
    }

    function toggleMenu() {
        if (menuOpen) {
            document.getElementById("menu-darkener").style.height = "0";
            document.getElementById("menu").style.top = "-25px";
            menuOpen = false;
        } else {
            document.getElementById("menu-darkener").style.height = "100vh";
            document.getElementById("menu").style.top = "80px";
            menuOpen = true;
        }
    }

    return (
        <>
            <div id='navbar'>
                <div id='navbar-left'>
                    <i onClick={toggleMenu} className="bi bi-list"></i>
                    <Link to={Home}>{componentContent.homeLinkText}</Link>
                </div>
                <div id='navbar-right'>
                    <a href='https://github.com/JBNCK'><i className="bi bi-github"></i></a>
                </div>
            </div>
            <div id='menu'>
                <Link className='menu-link' onClick={toggleMenu} to={Home}>{componentContent.homeLinkText}</Link>
            </div>
            <div id='menu-darkener' onClick={toggleMenu}></div>
        </>
    )
}

export default Navbar;