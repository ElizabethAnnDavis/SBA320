import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import MainPage from './pages/MainPage.jsx';
import DetailsPage from './pages/DetailsPage.jsx';
import Nav from './components/Nav/Nav.jsx';
import './App.css';

export default function App() {
  const [index, setIndex] = useState(0);

  // function nextImg() {
  //   setIndex((prevIndex) => (prevIndex + 1) % apiData.length);
  // }

  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<MainPage index={index} setIndex={setIndex} />} />
        <Route path="/details" element={<DetailsPage />} />
      </Routes>
    </div>
  );
}