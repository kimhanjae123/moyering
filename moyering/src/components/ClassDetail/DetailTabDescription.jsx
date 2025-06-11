import './DetailTabDescription.css';

const DetailTabDescription = () => {
    return (
        <>
            <div className="description-tab-container">
                <h2 className="section-title">클래스 설명</h2>

                {/* 대표 이미지 */}
                <div className="image-section">
                    <div className="image-label">대표 이미지</div>
                    <div className="image-list">
                        <img
                            src="./detail1.png"
                            alt="대표 이미지1"
                        />
                        <img
                            src="./detail2.png"
                            alt="대표 이미지2"
                        />
                    </div>
                </div>

                <hr />

                {/* 상세 설명 */}
                <div className="detail-section">
                    <div className="detail-label">클래스 상세설명</div>
                    <div className="detail-content">
                        <p>안녕하세요!</p>
                        <p>티켓을 결제해주시면 문자로 반차장을 보내드릴게요!</p>
                        <p>여러 품목의 수업이 선착순으로 진행됩니다.</p>
                        <p>타임에 같은 수업으로 진행되오니 양해바랍니다.</p>

                        <p><strong>예)</strong></p>
                        <ul>
                            <li>모두 가능 = 모든 수업 가능</li>
                            <li>품목이 정해져있는 수업 = 해당 수업만 진행</li>
                        </ul>

                        <p>공방 수업 시간이 한눈에 보일 수 있도록 스케줄을 오픈합니다.</p>
                        <p>주말 수업은 보통 4-5주 전에 마감됩니다.</p>
                        <p>매달 1일, 다음달 예약이 시작됩니다.</p>

                        <p><strong>[빠른 예약방법]</strong></p>
                        <ol>
                            <li>예약할 날짜를 확인한다.</li>
                            <li>[문자로 전송] 성함 / 인원수 / 연락처 / 수업명 / 날짜, 요일, 시간</li>
                            <li>예약이 확정되었습니다. 다른 문자를 반드시 확인해주세요.</li>
                        </ol>

                        <p>스콘에 진심인 1인~5인에게 스폰만큼 만들어드려요! 레시피만 10개가 넘어요~ 😋</p>
                        <p className="hashtags">
                            #제이바나롤링리조트 #베이킹 #손맛 #요리카네이션
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailTabDescription;