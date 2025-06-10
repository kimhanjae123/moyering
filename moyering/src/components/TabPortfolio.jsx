import { useEffect, useState } from 'react';
import './TabPortfolio.css';

const TabPortfolio = ({ registerValidator }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    setFile(uploadedFile);
  };

  // 유효성 검사 함수 (필수 항목: 파일)
  const validate = () => {
    if (!file) return false;
    return true;
  };

  // 부모 컴포넌트에 유효성 검사 함수 등록
  useEffect(() => {
    registerValidator(5, validate);
  }, [file]);

  return (
    <div className="class-info-box">
      <h3 className="section-title">포트폴리오 검수</h3>

      <div className="form-section">
        <label className="portfolio-label"><span className="required-text-dot">*</span>포트폴리오 업로드</label>
        <div className="file-upload-container">
          {file ? (
            <span>{file.name}</span>  // 선택한 파일 이름 표시
          ) : (
            <span className="file-placeholder">포트폴리오 파일을 클릭하여 업로드하세요</span>
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
            포트폴리오 업로드
          </label>
        </div>
      </div>

      <p className="portfolio-info-text">
        클래스 등록 전 검증을 위한 포트폴리오입니다. 주의해서 업로드해주세요!
      </p>
    </div>
  );
};

export default TabPortfolio;
