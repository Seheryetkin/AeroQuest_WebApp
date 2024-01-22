import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginModal from './Components/LoginModal';
import Dashboard from './Panel/Dashboard';
import Nav from './Components/Nav';
import TestList from './Components/TestList';
import QuestionComponent from './Components/QuestionComponent';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className='relative bg-gray-200 h-screen w-screen text-black bg-[url(https://i.pinimg.com/originals/79/2d/80/792d80c7c31a1f0b4a5bfefcb26260c3.jpg)] bg-no-repeat bg-cover object-contain'>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginModal onLoginModal={() => setIsAuthenticated(true)} />} />
          <Route
            path="/dashboard"
            element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
          />
          <Route path="/nav" element={<Nav />} />
          <Route path="/test-list" element={<TestList />} />
          <Route path="/question" element={<QuestionComponent />} />
          <Route path="/" element={<Navigate to="/dashboard" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

