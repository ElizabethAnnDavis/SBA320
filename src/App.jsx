import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage.jsx';
import DetailsPage from './pages/DetailsPage.jsx';
import Nav from './components/Nav/Nav.jsx';
import './App.css';

export default function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/details" element={<DetailsPage />} />
      </Routes>
    </div>
  )
}