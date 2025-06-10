import './App.css';
import HostProfile from './components/HostProfile';
import MainContent from './components/MainContent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardLayout from './components/DashboardLayout';
import ClassRegisterPage from './components/ClassRegisterPage';
import ClassDetail from './components/ClassDetail';
import StudentSearch from './components/StudentSearch';
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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App