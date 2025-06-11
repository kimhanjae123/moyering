import './App.css';
import HostProfile from './components/HostProfile';
import MainContent from './components/MainContent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardLayout from './components/DashboardLayout';
import ClassRegisterPage from './components/ClassRegisterPage';
import ClassDetail from './components/ClassDetail';
import StudentSearch from './components/StudentSearch';
import SettlementInfo from './components/settlementInfo';
import Inquiry from './components/Inquiry';
import ClassCalendar from './components/ClassCalendar';
function App() {
   return (
    <BrowserRouter>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<MainContent />} />
          <Route path="/profile" element={<HostProfile />} />
          <Route path="/register" element={<ClassRegisterPage />} />
          <Route path="/classDetail" element={<ClassDetail/>}/>
          <Route path="/students" element={<StudentSearch/>}/>
          <Route path="/settlementInfo" element={<SettlementInfo/>}/>
          <Route path="/inquiry" element={<Inquiry/>}/>
          <Route path="/calendar" element={<ClassCalendar/>}/>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App