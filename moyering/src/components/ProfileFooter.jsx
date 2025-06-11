import { useState } from 'react';
import './TabFooter.css';

const ProfileFooter = ({ activeTab }) => {
    const [isPreview, setIsPreview] = useState(false);
    return (
        <div className='footer'>
            <div className="footer-buttons">
                <button className="footer-btn save-btn">저장</button>
            </div>
        </div>
    );

};


export default ProfileFooter;
