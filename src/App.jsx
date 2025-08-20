import { useState } from 'react'
import './App.css'
import './pages/LoginPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'
import HomePage from './pages/HomePage.jsx';
import MakeDiaryPage from './pages/MakeDiaryPage.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/make-diary" element={<MakeDiaryPage />} />
      </Routes>
    </Router>
  );
}

export default App
