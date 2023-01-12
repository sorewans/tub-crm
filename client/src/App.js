import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Sidenav from './components/Sidenav';
import Home from "./pages/Home";
import Clients from "./pages/Clients";
import AddClient from "./pages/AddClient";
import Dashboard from "./pages/Dashboard";
import ClientDetail from './pages/ClientDetail';

function App() {
  return (
    <div className="App">
      <Sidenav/>
      <main>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/clients" element={<Clients />} />
        <Route path="/addclient" element={<AddClient />}/>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/clients/:id" element={<ClientDetail />} />
      </Routes>
      </main>
     
    </div>
  );
}

export default App;