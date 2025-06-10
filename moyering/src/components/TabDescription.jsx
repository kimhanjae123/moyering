import { useState } from 'react';
import './TabDescription.css';

const TabDescription = () => {
    const [description, setDescription] = useState('');
    const [images, setImages] = useState([null, null, null, null, null]);

    const handleImageChange = (e, index) => {
        const file = e.target.files[0];
        if (file) {
            const updatedImages = [...images];
            updatedImages[index] = URL.createObjectURL(file);
            setImages(updatedImages);
        }
    };

    return (
        <div className="class-info-box">
            <div className="image-upload-container">
                <h3>이미지 업로드</h3>
                <div className="image-box-container">
                    {images.map((image, index) => (
                        <div key={index} className="image-box">
                            <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => handleImageChange(e, index)}
                                id={`image-input-${index}`}
                                style={{ display: 'none' }}
                            />
                            <label htmlFor={`image-input-${index}`} className="image-box-label">
                                {image ? (
                                    <img src={image} alt={`이미지 ${index + 1}`} className="image-box-img" />
                                ) : (
                                    <div className="plus-icon">+</div>
                                )}
                            </label>
                        </div>
                    ))}
                </div>
                <p className="info-text">
                    텍스트를 사용한 대표이미지는 노출이 불가합니다.
                </p>
                <p className="img-info-text">
                    권장 사이즈 : 가로 1000px * 세로 1000px<br/>
                    최소 사이즈 : 가로 600px * 세로 600px<br/>
                    용량 : 10MB이하, 파일유형 : JPG,PNG, 최소 1장 - 최대 5장 등록가능
                </p>
            </div>
            <hr/>
            <h3 className="section-title">클래스 설명</h3>
            <div className="form-section">
                <label className="description-label">
                    <span className="required-text-dot">*</span>클래스 상세설명
                </label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="클래스에 대한 설명을 작성해주세요."
                    className="description-textarea"
                    maxLength="2000"
                />
                <div className="footer">
                    <span>{description.length} / 2000</span>
                </div>
            </div>


        </div>
    );
};

export default TabDescription;
