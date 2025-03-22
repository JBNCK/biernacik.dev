import isGerman from "../../scripts/is-german";
import './Footer.css';

function Footer() {
    const componentContent = isGerman ? {
        sourceLinkText: "Quelltext"
    } : {
        sourceLinkText: "Source Code"
    }

    return (
        <div id="footer">
            <a className="link" href="https://github.com/JBNCK/biernacik.dev">{componentContent.sourceLinkText}</a>
        </div>
    )
}

export default Footer;