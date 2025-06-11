import React from 'react';
import './MainContent.css';

export default function MainContent() {
  const stats = [
    { label: '전체 판매금액', value: '100,000,000' },
    { label: '이번달 판매금액', value: '250,000' },
    { label: '이번달 진행 클래스', value: '5' },
    { label: '전체 결제 건수', value: '20' },
    { label: '이번달 취소 건수', value: '1' },
    { label: '전체 후기수', value: '34' },
    { label: '평균 평점', value: '4.41' },
    { label: '문의 응답률', value: '91.12%' },
  ];

  return (
    <main className="main">
      <section className="dashboard">
        <table className="dashboard-table">
          <tbody>
            {[0, 1].map((row) => (
              <tr key={row}>
                {stats.slice(row * 4, row * 4 + 4).map((item, i) => (
                  <td key={i} className="dashboard-cell">
                    <div className="label">{item.label}</div>
                    <div className="value">{item.value}</div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="notice-board">
        <h2>공지사항</h2>
        {[...Array(4)].map((_, i) => (
          <div className="notice" key={i}>
            <span className="badge">공지</span>
            <span className="text">[6월] 모임 기획전 참여 호스트 모집 공고</span>
            <span className="date">2025-05-22</span>
          </div>
        ))}
      </section>
    </main>
  );
}