import React from 'react';
import Footer from './components/Footer';
import './App.css';
import Header2 from './components/Header2';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import JuegosPs3 from './WebLinks/Header/Juegos/Ps3Juegos';
import Homecontenido from './WebLinks/Home/Homecontenido';
import SearchResults from './components/SearchResults';
import ResultSearch from './WebLinks/Header/Juegos/ResultSearch';

function App() {
  return (
    <BrowserRouter>
      <main>
      <Header2 />
        <Routes>
        <Route path="/" element={<Homecontenido />} />
        {/* Menu Juegos */}
          <Route path="/JuegosPs3" element={<JuegosPs3 />} />
          <Route path="/JuegosPs4" element={<JuegosPs3 />} />
          <Route path="/JuegosPs5" element={<JuegosPs3 />} />
          <Route path="/JuegosXbox360" element={<JuegosPs3 />} />
          <Route path="/JuegosXboxOne" element={<JuegosPs3 />} />
          <Route path="/JuegosXboxSeriesX" element={<JuegosPs3 />} />
          <Route path="/JuegosPC" element={<JuegosPs3 />} />
          <Route path="/ResultSearch" element={<ResultSearch />} />
        </Routes>
        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default App;
