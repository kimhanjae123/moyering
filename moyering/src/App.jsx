import './App.css';
import HostProfile from './components/HostProfile';
import MainContent from './components/MainContent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardLayout from './components/DashboardLayout';
import ClassRegisterPage from './components/ClassRegisterPage';
function App() {
   return (
    <BrowserRouter>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<MainContent />} />
          <Route path="/profile" element={<HostProfile />} />
          <Route path="/register" element={<ClassRegisterPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App