import { useState, useEffect } from 'react';
import DaumPostcode from 'react-daum-postcode';
import './TabBasicInfo.css';

const TabBasicInfo = ({ registerValidator }) => {
  const categoryMap = {
    '스포츠': ['실내 & 수상 스포츠', '실외 스포츠', '기타'],
    '음식': ['베이킹', '음료', '요리', '기타'],
    '공예/DIY': ['가죽', '도자기', '플라워', '비누/향수/캔들', '악세사리', '기타'],
    '뷰티': ['네일/패디', '마사지/스파', '헤어/메이크업', '기타'],
    '문화예술': ['미술', '연기', '노래/악기/작곡', '사진/영상', '기타'],
    '심리/상담': ['사주/타로', '심리검사', '명상', '기타'],
    '자유모임': ['여행', '게임', '파티', '기타']
  };

  const [primary, setPrimary] = useState('');
  const [secondary, setSecondary] = useState('');
  const [showLocation, setShowLocation] = useState(false);
  const [address, setAddress] = useState('');
  const [coordinates, setCoordinates] = useState({ lat: '', lng: '' });
  const [className, setClassName] = useState('');

  const handlePrimaryChange = (e) => {
    const selected = e.target.value;
    setPrimary(selected);
    setSecondary('');
  };

  const handleAddressSelect = (data) => {
    setAddress(data.address);
    setCoordinates({ lat: '12.3456', lng: '12.3456' }); // 임시 좌표
    setShowLocation(false);
  };

  // 유효성 검사 함수 (필수 항목: 1차카테고리, 2차카테고리, 클래스 명, 주소)
  const validate = () => {
    if (!primary) return false;
    if (!secondary) return false;
    if (!className.trim()) return false;
    if (!address) return false;
    return true;
  };

  // 부모 컴포넌트에 유효성 검사 함수 등록
  useEffect(() => {
    registerValidator(0, validate);
  }, [primary, secondary, className, address]);

  const secondaryOptions = categoryMap[primary] || [];

  return (
    <div className="class-info-box">
      <h3 className="section-title">기본정보</h3>
      <div className="form-section">
        <div className="inline-form-row">
          <label className="category-label"><span className="required-text-dot">*</span>카테고리</label>
          <div className="category-row">
            <div className="form-group">
              <label className="sub-label">1차카테고리</label>
              <select value={primary} onChange={handlePrimaryChange}>
                <option value="" disabled hidden>1차 카테고리 선택</option>
                {Object.keys(categoryMap).map((key) => (
                  <option key={key} value={key}>{key}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label className="sub-label">2차카테고리</label>
              <select value={secondary}
                onChange={(e) => setSecondary(e.target.value)}
                disabled={!primary}>
                <option value="" disabled hidden>2차카테고리 선택</option>
                {secondaryOptions.map((sub) => (
                  <option key={sub} value={sub}>{sub}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
      <hr/>

      {/* 클래스 명 */}
      <div className="form-section">
        <label className="class-label"><span className="required-text-dot">*</span>클래스 명</label>
        <input
          type="text"
          placeholder="클래스명을 입력해주세요."
          className="class-input"
          value={className}
          onChange={(e) => setClassName(e.target.value)}
        />
      </div>
      <hr />

      {/* 장소 */}
      <div className="form-section">
        <label className="label">
          장소 <span className="required-text"><span className="required-text-dot">*</span> 진행장소</span>
        </label>

        {!address ? (
          <div className="location-add-wrapper">
            <div className="location-relative">
              <button className="location-add-btn" onClick={() => setShowLocation(true)}>
                장소 등록
              </button>

              {showLocation && (
                <div className="postcode-popup">
                  <DaumPostcode onComplete={handleAddressSelect} />
                  <button className="postcode-close-btn" onClick={() => setShowLocation(false)}>닫기</button>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="location-wrapper">
            <div className="location-close-absolute">
              <button
                className="location-remove-btn"
                onClick={() => {
                  setAddress('');
                  setCoordinates({ lat: '', lng: '' });
                }}
              >
                ×
              </button>
            </div>
            <div className="location-box">
              <table className="location-table">
                <tbody>
                  <tr>
                    <td className="location-label">주소</td>
                    <td>{address}</td>
                  </tr>
                  <tr>
                    <td className="location-label">좌표</td>
                    <td>위도 : {coordinates.lat} &nbsp;&nbsp;&nbsp; 경도 : {coordinates.lng}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TabBasicInfo;
