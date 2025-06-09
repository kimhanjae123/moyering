import './TabBasicInfo.css';

const TabBasicInfo = ({ data, onChange }) => {
  

  return (
    <div className="basic-info-container">
      <h2>기본정보</h2>

      {/* 카테고리 */}
      <div className="form-row">
        <label>카테고리</label>
        <div className="category-selectors">
          <div>
            <label>1차카테고리</label>
            <select>
              <option>1차 카테고리 선택</option>
            </select>
          </div>
          <div>
            <label>2차카테고리</label>
            <select disabled>
              <option>2차카테고리 선택</option>
            </select>
          </div>
        </div>
      </div>

      {/* 클래스 명 */}
      <div className="form-row">
        <label>클래스 명</label>
        <input type="text" placeholder="클래스명을 입력해주세요." />
      </div>

      {/* 장소 */}
      <div className="form-row">
        <label>장소</label>
        <div>
          <label className="required">*진행장소</label>
          <table className="location-table">
            <thead>
              <tr>
                <th></th>
                <th>장소명</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>주소</td>
                <td>서울 강남구 논현로123길 4-1</td>
              </tr>
              <tr>
                <td>좌표</td>
                <td>위도 : 12.3456 경도 : 12.3456</td>
              </tr>
            </tbody>
          </table>
          <button className="register-button">장소 등록</button>
        </div>
      </div>
    </div>
  );
};

export default TabBasicInfo;
