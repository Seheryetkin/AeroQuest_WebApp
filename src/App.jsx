import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginModal from './Components/LoginModal';
import RegisterModal from './Components/RegisterModal';

import UserLists from './Panel/UserLists';
import Profile from './Panel/Profile';
import ScoreLists from './Panel/ScoreLists';
import Testtt from './Panel/QuestionList'
import Dashboard from './Panel/Dashboard';
import Nav from './Components/Nav';
import TestList from './Components/TestList';
import QuestionComponent from './Components/QuestionComponent';

function App() {
  const [modal,setModal] = useState(true);
  const [registermodal,setRegisterModal] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className='relative bg-gray-200 h-screen w-screen text-black bg-[url(https://i.pinimg.com/originals/79/2d/80/792d80c7c31a1f0b4a5bfefcb26260c3.jpg)] bg-no-repeat bg-cover object-contain'>
      <Router>
        <Routes>
          <Route path="/login" element={ <LoginModal isAuthenticated={isAuthenticated} modal={modal} setModal={setModal} setRegisterModal={setRegisterModal} registermodal={registermodal} setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/register" element={ <RegisterModal setModal={setModal}  setRegisterModal={setRegisterModal} registermodal={registermodal} />} />
          <Route
            path="/dashboard"
            element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
          />
          <Route path="/nav" element={<Nav isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/test-list" element={<TestList />} />
          <Route path="/question" element={<QuestionComponent />} />

          <Route path="/Soruekle" element={isAuthenticated && <Dashboard/>} />
          <Route path="/Uyeler" element={isAuthenticated && <UserLists/>} />
          <Route path="/Profile" element={isAuthenticated && <Profile />} />
          <Route path="/Score" element={isAuthenticated && <ScoreLists />} />
          <Route path="/QuestionList/:params" element={isAuthenticated && <Testtt />} />
          <Route path="/" element={ !isAuthenticated && <Navigate to="/nav" /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

