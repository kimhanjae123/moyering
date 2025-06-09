import './TabBasicInfo.css';

const TabBasicInfo = ({ data, onChange }) => {
  

    return (
    <div>
      <h3 className="section-title">기본정보</h3>

      {/* 카테고리 */}
      <div className="form-section">
        <div className="label">카테고리</div>
        <div className="info-grid">
          <div className="form-group">
            <div className="label">1차카테고리</div>
            <select>
              <option>1차 카테고리 선택</option>
            </select>
          </div>
          <div className="form-group">
            <div className="label">2차카테고리</div>
            <select disabled>
              <option>2차카테고리 선택</option>
            </select>
          </div>
        </div>
      </div>

      {/* 클래스명 */}
      <div className="form-section">
        <div className="label">클래스 명</div>
        <input
          type="text"
          placeholder="클래스명을 입력해주세요."
          className="input"
        />
      </div>

      {/* 진행 장소 */}
      <div className="form-section">
        <div className="label">
          장소 <span style={{ color: "red" }}>* 진행장소</span>
        </div>

        <div className="location-box">
          <table className="location-table">
            <tbody>
              <tr>
                <td className="location-label">주소</td>
                <td>서울 강남구 논현123길 4-1</td>
              </tr>
              <tr>
                <td className="location-label">좌표</td>
                <td>위도 : 12.3456&nbsp;&nbsp;&nbsp;경도 : 12.3456</td>
              </tr>
            </tbody>
          </table>

          <div className="location-footer">
            <button className="location-add-btn">장소 등록</button>
            <button className="location-remove-btn">X</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabBasicInfo;
