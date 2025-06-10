import { useEffect, useState } from 'react';
import './TabExtraInfo.css';

const TabExtraInfo = ({ registerValidator }) => {
  const [file, setFile] = useState(null);
  const [tags, setTags] = useState([]);
  const [keywords, setKeywords] = useState('');
  const [coupon, setCoupon] = useState('');

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    setFile(uploadedFile);
  };

  const handleTagsChange = (e) => {
    const value = e.target.value;
    setTags(value.split(','));
  };

  const handleKeywordsChange = (e) => {
    setKeywords(e.target.value);
  };

  const handleCouponChange = (e) => {
    setCoupon(e.target.value);
  };

  // 유효성 검사 함수 (필수 항목: 파일, 태그, 키워드)
  const validate = () => {
    if (!file) return false;
    if (tags.length === 0) return false;
    if (!keywords.trim()) return false;
    if (!coupon.trim()) return false;
    return true;
  };

  // 부모 컴포넌트에 유효성 검사 함수 등록
  useEffect(() => {
    registerValidator(3, validate);
  }, [file, tags, keywords, coupon]);

  return (
    <div className="class-info-box">
      <h3 className="section-title">클래스 부가정보</h3>
      
      {/* 클래스 강의자료 */}
      <div className="form-section">
        <label className="file-label"><span className="required-text-dot">*</span>클래스 강의자료</label>
        <div className="file-upload-container">
          {file ? (
            <span>{file.name}</span>  // 선택한 파일 이름 표시
          ) : (
            <span className="file-placeholder">강의 자료를 클릭하여 업로드하세요</span>
          )}
          {/* 숨겨진 input[type="file"] */}
          <input
            type="file"
            className="file-input"
            onChange={handleFileChange}
            id="file-upload-input"
            hidden  // 기본 파일 input을 숨깁니다
          />
          {/* label로 클릭해서 파일을 업로드 */}
          <label htmlFor="file-upload-input" className="file-upload-button">
            파일 선택
          </label>
        </div>
      </div>

      {/* 태그 입력 */}
      <div className="form-section">
        <label className="tags-label"><span className="required-text-dot">*</span>포함 사항(선택)</label>
        <div className="tags-input-container">
          <input
            type="text"
            className="tags-input"
            placeholder="태그를 입력해주세요. (쉼표로 구분)"
            value={tags.join(',')}
            onChange={handleTagsChange}
          />
          <button className="tags-input-btn">등록</button>
        </div>
      </div>

      <div className="form-section">
        <label className="tags-label"><span className="required-text-dot">*</span>클래스 준비물(선택)</label>
        <div className="tags-input-container">
          <input
            type="text"
            className="tags-input"
            placeholder="태그를 입력해주세요. (쉼표로 구분)"
            value={tags.join(',')}
            onChange={handleTagsChange}
          />
          <button className="tags-input-btn">등록</button>
        </div>
      </div>

      {/* 검색 키워드 입력 */}
      <div className="form-section">
        <label className="keywords-label"><span className="required-text-dot">*</span>검색 키워드(선택)</label>
        <div className="keywords-input-container">
          <input
            type="text"
            className="keywords-input"
            placeholder="검색 키워드를 입력해주세요."
            value={keywords}
            onChange={handleKeywordsChange}
          />
          <button className="keywords-input-btn">등록</button>
        </div>
      </div>

      {/* 쿠폰 등록 */}
      <div className="form-section">
        <label className="coupon-label"><span className="required-text-dot">*</span>쿠폰 등록(선택)</label>
        <div className="coupon-input-container">
          <input
            type="text"
            className="coupon-input"
            placeholder="쿠폰 정보를 입력해주세요."
            value={coupon}
            onChange={handleCouponChange}
          />
        </div>
      </div>
    </div>
  );
};

export default TabExtraInfo;
