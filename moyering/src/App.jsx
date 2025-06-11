import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ClassCalendar from './components/ClassCalendar';
import ClassRegisterPage from './components/ClassRegisterPage';
import DashboardLayout from './components/DashboardLayout';
import HostIntroPage from './components/HostIntroPage';
import HostProfile from './components/HostProfile';
import Inquiry from './components/Inquiry';
import Login from './components/Login';
import MainContent from './components/MainContent';
import StudentSearch from './components/StudentSearch';
import SettlementInfo from './components/settlementInfo';
import ClassList from './components/ClassList';
import ClassDetail from './components/ClassDetail/ClassDetail';
import ClassReview from './components/ClassReview';
import ClassSettlement from './components/ClassSettlement';
function App() {
   return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/intro" element={<HostIntroPage/>}/>
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<MainContent />} />
          <Route path="/profile" element={<HostProfile />} />
          <Route path="/register" element={<ClassRegisterPage />} />
          <Route path="/classList" element={<ClassList/>}/>
          <Route path="/students" element={<StudentSearch/>}/>
          <Route path="/settlementInfo" element={<SettlementInfo/>}/>
          <Route path="/inquiry" element={<Inquiry/>}/>
          <Route path="/calendar" element={<ClassCalendar/>}/>
          <Route path="/detail" element={<ClassDetail/>}/>
          <Route path="/classReview" element={<ClassReview/>}/>
          <Route path="/classSettlement" element={<ClassSettlement />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App