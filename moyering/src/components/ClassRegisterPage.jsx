import React, { useState } from 'react';
import TabBasicInfo from './TabBasicInfo';
import TabSchedule from './TabSchedule';
import TabDescription from './TabDescription';
import TabExtraInfo from './TabExtraInfo';
import TabTransaction from './TabTransaction';
import TabPortfolio from './TabPortfolio';
import './ClassRegisterPage.css';

const tabs = [
  '기본정보',
  '클래스 일정',
  '클래스 설명',
  '클래스 부가정보',
  '거래 정보',
  '포트폴리오 검수',
];

const ClassRegisterPage = () => {
  const [activeTab, setActiveTab] = useState(0);

  const renderTabContent = () => {
    switch (activeTab) {
      case 0: return <TabBasicInfo />;
      case 1: return <TabSchedule />;
      case 2: return <TabDescription />;
      case 3: return <TabExtraInfo />;
      case 4: return <TabTransaction />;
      case 5: return <TabPortfolio />;
      default: return null;
    }
  };

  return (
    <div className="register-page">
      <div className="class-info-box">
        <h3>클래스 상세</h3>
        <div className="info-grid">
          <div>
            <div className="label">클래스</div>
            <div>-</div>
          </div>
          <div>
            <div className="label">ID</div>
            <div>1234</div>
          </div>
          <div>
            <div className="label">상태</div>
            <div className="status current">현재</div>
          </div>
          <div>
            <div className="label">검수상태</div>
            <div className="status current">현재</div>
          </div>
        </div>
      </div>

      <div className="tab-menu">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab-item ${activeTab === index ? 'active' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </div>
        ))}
      </div>

      <div className="tab-content">{renderTabContent()}</div>
    </div>
  );
};

export default ClassRegisterPage;