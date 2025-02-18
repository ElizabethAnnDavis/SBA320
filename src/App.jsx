import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import MainPage from './pages/MainPage.jsx';
import DetailsPage from './pages/DetailsPage.jsx';
import Nav from './components/Nav/Nav.jsx';
import './App.css';

export default function App() {
  //const [index, setIndex] = useState(0);

  const savedIndex = localStorage.getItem('imageIndex');
  const [index, setIndex] = useState(savedIndex && !isNaN(parseInt(savedIndex)) ? parseInt(savedIndex) : 0);

  useEffect(() => {
    localStorage.setItem('imageIndex', index);
  }, [index]);

  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<MainPage index={index} setIndex={setIndex} />} />
        <Route path="/details/:title" element={<DetailsPage index={index} setIndex={setIndex}/>} />
      </Routes>
    </div>
  );
}