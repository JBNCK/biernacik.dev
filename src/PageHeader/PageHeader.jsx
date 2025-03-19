import './PageHeader.css';
import isGerman from '../isGerman';

function PageHeader(pageTitle) {
    return (
        <div className='main-section'>
            <h1 className='main-section-title'>{pageTitle.pageTitle}</h1>
        </div>
    );
}

export default PageHeader;