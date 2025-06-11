import './DetailTabBasicInfo.css';

const DetailTabBasicInfo = () => {
    return (
        <>
            <div className="class-detail-container">
                <div className="section">
                    <h3 className="section-title">기본정보</h3>

                    <div className="row">
                        <label className='category1'>1차 카테고리</label>
                        <label className='category2'>2차 카테고리</label>
                        <div className="category-box">
                            <input value="음식" readOnly />
                            <input value="베이킹" readOnly />
                        </div>
                    </div>

                    <div className="row">
                        <label>클래스 명</label>
                        <input className="full-input" value="밤을 굽자" readOnly />
                    </div>

                    <div className="row">
                        <label>장소</label>
                        <div className="location-table">
                            <table>
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
                                        <td>위도: 12.3456 경도: 12.3456</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailTabBasicInfo;