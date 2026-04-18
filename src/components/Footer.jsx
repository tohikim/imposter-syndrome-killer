import './Footer.css';
import ShareButton from './Sharebutton.jsx';


const Footer = () => {
    return (
        <>
            <div className="footer-container">
                <div className="socialtags-container">
                    <ShareButton text="Check out my job readiness score" url="http://localhost:5173/"/>
                </div>
                <div className="copyright-container">
                    <p>Tohi©2026</p>
                </div>
            </div>
        </>
    )
}

export default Footer; 