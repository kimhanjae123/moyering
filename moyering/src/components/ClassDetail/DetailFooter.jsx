import { useState } from 'react';
import './DetailFooter.css';

const DetailFooter = ({ activeTab }) => {
    const [isPreview, setIsPreview] = useState(false);
    return (
        <div className='footer'>
            <div className="footer-buttons">
                <button className="footer-btn save-btn">수정</button>
            </div>
        </div>
    );

};


export default DetailFooter;
