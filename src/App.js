import React, { Suspense } from 'react'; 
import './App.css';
import { NavBar } from './Components/NavBar/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Shop from './Components/Shop/Shop';
import Footer from './Components/Footer/Footer';
import  ThemeScene  from './Components/Home/ThemeScene';
import Shoe from './Components/Home/Logo'

import { OrbitControls, Stage, BakeShadows } from '@react-three/drei'

function App(props) {



  return (
    <div className="App">
      <section className="App-content">
     
      <BrowserRouter>


        <section className="NavBar">
          < NavBar  /> 
        </section>

        <section className="Routes">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="shop/*" element={<Shop />} />
          </Routes>
        </section>

        <Footer /> 

      </BrowserRouter>
      </section>


    </div>
  
  );
}

export default App;