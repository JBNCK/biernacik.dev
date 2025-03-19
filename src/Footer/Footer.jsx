import { Link } from "react-router";
import isGerman from "../isGerman";
import "./Footer.css";

function Footer() {
    const sourceCodeLink = isGerman() ? "Quelltext" : "Source Code";
    const privacyName = isGerman() ? "Datenschutz" : "Privacy";

    return (
        <div id="footer" className="main-section">
            <a className="footer-link block" href="https://github.com/JBNCK/biernacik.dev">{sourceCodeLink}</a>
            <Link className="footer-link block" to="/privacy">{privacyName}</Link>
        </div>
    );
}

export default Footer;