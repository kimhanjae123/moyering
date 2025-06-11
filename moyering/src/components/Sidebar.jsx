import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Sidebar.css';

export default function Sidebar() {
  const [openSection, setOpenSection] = useState(null);
  const navigate = useNavigate();

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <aside className="sidebar">
      <div className="logo" onClick={() => navigate('/')}>
        <img src="/logo.png" alt="로고" className="logo-img" />
      </div>
      <div className="button-row">
        <button className="btn" onClick={() => handleNavigation('/register')}>클래스등록</button>
        <button className="btn" onClick={() => handleNavigation('/classDetail')}>클래스목록</button>
      </div>
      <nav>
        <ul>
          <li onClick={() => toggleSection('info')} className="menu-title">내 정보
            <svg
              className={`arrow-icon ${openSection === 'info' ? 'open' : ''}`}
              width="12"
              height="12"
              viewBox="0 0 24 24"
            >
              <path d="M8 5l8 7-8 7" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </li>
          <ul className={`submenu ${openSection === 'info' ? 'open' : ''}`}>
            <li onClick={() => handleNavigation('/profile')}>프로필 관리</li>
            <li onClick={() => handleNavigation('/settlementInfo')}>정산정보관리</li>
          </ul>
          <li onClick={() => toggleSection('class')} className="menu-title">클래스 관리
            <svg
              className={`arrow-icon ${openSection === 'class' ? 'open' : ''}`}
              width="12"
              height="12"
              viewBox="0 0 24 24"
            >
              <path d="M8 5l8 7-8 7" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </li>
          <ul className={`submenu ${openSection === 'class' ? 'open' : ''}`}>
            <li onClick={() => handleNavigation('/classDetail')}>클래스목록</li>
            <li onClick={() => handleNavigation('/students')}>수강생관리</li>
            <li onClick={() => handleNavigation('/inquiry')}>문의관리</li>
            <li onClick={() => handleNavigation('/calendar')}>일정캘린더</li>
            <li onClick={() => handleNavigation('/coupons')}>쿠폰관리</li>
          </ul>

          <li onClick={() => toggleSection('settlement')} className="menu-title">정산관리
            <svg
              className={`arrow-icon ${openSection === 'settlement' ? 'open' : ''}`}
              width="12"
              height="12"
              viewBox="0 0 24 24"
            >
              <path d="M8 5l8 7-8 7" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </li>
          <ul className={`submenu ${openSection === 'settlement' ? 'open' : ''}`}>
            <li onClick={() => handleNavigation('/settlement-account')}>정산계좌</li>
          </ul>
        </ul>
      </nav>
    </aside>
  );
}
