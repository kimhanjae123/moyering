import Sidebar from '../components/Sidebar';
import Header from '../components/Headers';
import { Outlet } from 'react-router-dom';
import './DashboardLayout.css'; // 스타일 따로 관리

export default function DashboardLayout() {
  return (
    <div className="app-wrapper">
      <Sidebar />
      <div className="main-area">
        <Header />
        <div className="main-content">
          <Outlet /> {/* 여기에 각 페이지 컴포넌트가 렌더링됨 */}
        </div>
      </div>
    </div>
  );
}