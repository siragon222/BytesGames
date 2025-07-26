import React from 'react';
import Footer from './components/Footer';
import './App.css';
import Header2 from './components/Header2';
import { HashRouter, Route, Routes } from 'react-router-dom';
import JuegosPs3 from './WebLinks/Header/Juegos/Ps3Juegos';
import Homecontenido from './WebLinks/Home/Homecontenido';
import ResultSearch from './WebLinks/Header/Juegos/ResultSearch';
import VerDetallesComponente from './components/VerDetallesComponente/VerDetallesComponente';
import VerDetallesDLC from './components/VerDetallesDLC/VerDetallesDLC';
import { GameProvider } from './context/GameContext';
import { CurrencyProvider } from './context/CurrencyContext';
import PreguntasFrecuentes from './components/PreguntasFrecuentes/PreguntasFrecuentes';
import ScrollToTop from './components/ScrollToTop';
import Separator from './components/Separator';
import MembresiasPlaystationPlus from './components/MembresiasPlaystationPlus';
import VentanaMantenimiento from './components/VentanaMantenimiento/VentanaMantenimiento';

function App() {
  return (
    <CurrencyProvider>
      <HashRouter>
        <ScrollToTop />
        <GameProvider>
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
              {/* Nueva ruta para VerDetallesComponente */}
              <Route path="/ver-detalles" element={<VerDetallesComponente />} />
              {/* Nueva ruta para VerDetallesDLC */}
              <Route path="/VerDetallesDLC" element={<VerDetallesDLC />} />
              <Route path="/PreguntasFrecuentes" element={<PreguntasFrecuentes />} />
              <Route path="/playstation-plus" element={<MembresiasPlaystationPlus />} /> 
              <Route path="/mantenimiento" element={<VentanaMantenimiento />} />
            </Routes>
            <Footer />
          </main>
        </GameProvider>
      </HashRouter>
    </CurrencyProvider>
  );
}

export default App;
