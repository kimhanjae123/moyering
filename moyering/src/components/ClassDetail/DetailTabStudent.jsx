import { useState } from "react";
import './DetailTabStudent.css';

const DetailTabStudent = () => {
    const [selectedStudentId, setSelectedStudentId] = useState(null);

    const students = [
        {
            id: 1,
            name: '망구',
            phone: '010-1234-5678',
            email: 'manggu1@example.com',
            attendance: {
                subject: '수학 기초',
                current: 8,
                total: 12,
                date: '목, 14:00~16:00',
                todayStatus: '출석 완료',
            },
        },
        {
            id: 2,
            name: '망구',
            phone: '010-7894-4561',
            email: 'manggu2@example.com',
            attendance: {
                subject: '영어 회화',
                current: 9,
                total: 10,
                date: '목, 10:00~12:00',
                todayStatus: '출석 대기',
            },
        },
    ];

    const toggleStudent = (id) => {
        setSelectedStudentId((prevId) => (prevId === id ? null : id));
    };

    return (
        <div className="student-class-container">
            <h3>수강생 정보</h3>

            {students.map((student, index) => (
                <div key={student.id} className="student-card">
                    <div className="student-basic" onClick={() => toggleStudent(student.id)}>
                        <div>No. {index + 1}</div>
                        <div className="student-name clickable">{student.name}</div>
                        <div>{student.phone}</div>
                        <div>{student.email}</div>
                    </div>

                    {selectedStudentId === student.id && (
                        <div className="class-section">
                            <div className="class-block">
                                <p className="class-title">{student.attendance.subject}</p>
                                <div className="progress-container">
                                    <span>출석 진행</span>
                                    <div className="progress-bar-bg">
                                        <div
                                            className="progress-bar-fill"
                                            style={{
                                                width: `${(student.attendance.current / student.attendance.total) * 100}%`,
                                            }}
                                        ></div>
                                    </div>
                                    <div className="class-count">
                                        {student.attendance.current} / {student.attendance.total}회
                                    </div>
                                </div>
                                <div className="today-status">
                                    오늘 출석 상태: {student.attendance.todayStatus}
                                </div>
                                <div className="attendance-button-wrapper">
                                    <button className="attendance-button">출석 체크</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default DetailTabStudent;