import './PageHeader.css';
import isGerman from '../isGerman';
import { Link } from 'react-router';

function PageHeaderWithBack(pageTitle) {
    const buttonText = isGerman() ? "Startseite" : "Go Home";

    return (
        <div className='main-section'>
            
            <h1 className='main-section-title title'>{pageTitle.pageTitle}</h1>
            <Link className="back-button" to="/"><i className="bi bi-arrow-left"></i> {buttonText}</Link>
        </div>
    );
}

export default PageHeaderWithBack;