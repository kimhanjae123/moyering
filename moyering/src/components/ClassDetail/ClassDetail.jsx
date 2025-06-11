import { useState, useEffect, useRef } from 'react';
import DetailTabBasicInfo from './DetailTabBasicInfo';
import DetailTabSchedule from './DetailTabSchedule';
import DetailTabDescription from './DetailTabDescription';
import DetailTabExtraInfo from './DetailTabExtraInfo';
import DetailTabStudent from './DetailTabStudent';
import DetailFooter from './DetailFooter';

const tabs = [
  '기본정보',
  '클래스 일정',
  '클래스 설명',
  '클래스 부가정보',
  '수강생 정보',
];

const ClassDetail = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [classData, setClassData] = useState(null); // 서버로부터 받은 클래스 데이터
  const validators = useRef([]);

  useEffect(() => {
    // 클래스 데이터 로딩 예시 (수정용)
    const fetchData = async () => {
      const mock = {
        title: "예시 클래스",
        status: "진행중",
        id: 1234,
        reviewStatus: "검토완료",
        // 나머지 데이터...
      };
      setClassData(mock);
    };
    fetchData();
  }, []);

  const registerValidator = (index, validateFn) => {
    validators.current[index] = validateFn;
  };

  const handleTabClick = async (nextIndex) => {
    const validate = validators.current[activeTab];
    if (validate) {
      const valid = await validate();
      if (!valid) return;
    }
    setActiveTab(nextIndex);
  };

  const renderTabContent = () => {
    const props = { registerValidator, classData, isEditMode: true };
    switch (activeTab) {
      case 0: return <DetailTabBasicInfo />;
      case 1: return <DetailTabSchedule />;
      case 2: return <DetailTabDescription />;
      case 3: return <DetailTabExtraInfo />;
      case 4: return <DetailTabStudent />;
      default: return null;
    }
  };

  return (
    <div className="register-page">
      {classData && (
        <>
          <div className="class-info-box">
            <h3>클래스 상세</h3>
            <div className="info-grid">
              <div><div className="label">클래스</div><div>{classData.title}</div></div>
              <div><div className="label">ID</div><div>{classData.id}</div></div>
              <div><div className="label">상태</div><div className="status current">{classData.status}</div></div>
              <div><div className="label">검수상태</div><div className="status current">{classData.reviewStatus}</div></div>
            </div>
          </div>

          <div className="tab-menu">
            {tabs.map((tab, index) => (
              <div
                key={index}
                className={`tab-item ${activeTab === index ? 'active' : ''}`}
                onClick={() => handleTabClick(index)}
              >
                {tab}
              </div>
            ))}
          </div>

          <div className="tab-content">{renderTabContent()}</div>
        </>
      )}
      <DetailFooter/>
    </div>
  );
};

export default ClassDetail;
