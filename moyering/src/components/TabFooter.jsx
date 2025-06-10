import { useState } from 'react';
import './TabFooter.css';

const TabFooter = ({ activeTab }) => {
  const [isPreview, setIsPreview] = useState(false);

  // 각 탭에 따라 다른 버튼 표시
  const renderFooterButtons = () => {
    if (activeTab === 5) {
      // 마지막 탭 (검수 요청 탭)
      return (
        <div className="footer-buttons">
          <button className="footer-btn preview-btn" onClick={() => setIsPreview(!isPreview)}>
            미리보기
          </button>
          <button className="footer-btn save-btn">저장</button>
          <button className="footer-btn delete-btn">삭제</button>
          <button className="footer-btn review-request-btn">검수 요청</button>
        </div>
      );
    } else {
      // 다른 탭 (미리보기, 저장, 삭제 버튼)
      return (
        <div className="footer-buttons">
          <button className="footer-btn preview-btn" onClick={() => setIsPreview(!isPreview)}>
            미리보기
          </button>
          <button className="footer-btn save-btn">저장</button>
          <button className="footer-btn delete-btn">삭제</button>
        </div>
      );
    }
  };

  return <div className="footer">{renderFooterButtons()}</div>;
};

export default TabFooter;
