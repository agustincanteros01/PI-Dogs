import './App.css';
import Dogs from './componentes/dogs';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Inicio from './componentes/inicio';
import Detalles from './componentes/detalles';

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Inicio />} />
      <Route exact path='/dogs' element={<Dogs />} />
      <Route exact path='/detalles' element={<Detalles />} />
    </Routes>
  );
}

export default App;
