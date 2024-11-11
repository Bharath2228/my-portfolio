import React from 'react';
import "./App.css";
import { Header } from './components/header/Header';
import { Home } from './components/home/Home';
import { About } from './components/about/About';
import { Skills } from './components/skills/Skills';
import { Certificates } from './components/certificates/Certificates';

function App() {
  return (
    <>
    <Header />
    
    <main className='main'>
      <Home />
      <About />
      <Skills />
      <Certificates />
    </main>
    </>
  );
}

export default App;
