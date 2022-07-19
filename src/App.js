import './App.css';
import DesignerToolContainer from './components/DesignerToolContainer';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Demo from "./pages/Demo"
import Specs from "./pages/Specs"
import ErrorPage from "./pages/ErrorPage"

import * as React from "react";

import { useEffect, useState } from "react";

function App() {
  useEffect(() => {
  }, []);

  const [fontIncrement, setFontIncrement] = useState("16");

  function handleSizeChange (event) {
    document.documentElement.style.setProperty('--baseFontSize', event.target.value);
    setFontIncrement(event.target.value);
  }

  const [factor, setFactor] = useState('1.5');

  function handleFactor (event) {
    document.documentElement.style.setProperty('--initialFactor', event.target.value);
    setFactor(event.target.value);
  }

  const [lineheight, setLineheight] = useState('24');

  const handleLineheight = (event) => {
    document.documentElement.style.setProperty('--initialLineheight', event.target.value);
    setLineheight(event.target.value);
  }

  const [baseColor, setBaseColor] = useState('#3b5cad');

  function handleColorChange (event) {
    document.documentElement.style.setProperty('--baseColor', event.target.value);
    setBaseColor(event.target.value);
  }

  const [hue, setHue] = useState('223');

  function handleHue (event) {
    document.documentElement.style.setProperty('--initialHue', event.target.value);
    setHue(event.target.value);
  }

  const [saturation, setSaturation] = useState('49');

  const handleSaturation = (event) => {
    document.documentElement.style.setProperty('--initialSaturation', event.target.value);
    setSaturation(event.target.value);
  }

  const [lightness, setLightness] = useState('45');

  function handleLightness (event) {
    document.documentElement.style.setProperty('--initialLightness', event.target.value);
    setLightness(event.target.value);
  }

  const [borderRadius, setBorderRadius] = useState('0')

  function handleBorderRadius (event) {
    document.documentElement.style.setProperty('--initialBorderRadius', event.target.value);
    setBorderRadius(event.target.value);
  }

  const [border, setBorder] = useState('1');

  function handleBorder (event) {
    document.documentElement.style.setProperty('--initialBorder', event.target.value);
    setBorder(event.target.value);
  }

  return (
    <div className="App app-container">
      <Router>
        <Routes>
          <Route path="/" element={<Demo />}>
          </Route>
          
          <Route path="/specs" element={
            <Specs
              fontIncrement={fontIncrement + 'px'}
              factor={factor}
              lineheight={lineheight + 'px'}
              baseColor={baseColor}
              hue={hue}
              saturation={saturation + '%'}
              lightness={lightness + '%'}
              borderRadius={borderRadius + 'px'}
              border={border + 'px'} />
            }>
          </Route>

          <Route path="*" element={<ErrorPage />}>
          </Route>
        </Routes>
        <DesignerToolContainer 
          handleSizeChange={handleSizeChange.bind(this)} fontIncrement={fontIncrement}
          handleFactor={handleFactor} factor={factor}
          handleLineheight={handleLineheight} lineheight={lineheight} 
          handleColorChange={handleColorChange.bind(this)} baseColor={baseColor}
          handleHue={handleHue} hue={hue}
          handleSaturation={handleSaturation} saturation={saturation}
          handleLightness={handleLightness} lightness={lightness}
          handleBorderRadius={handleBorderRadius} borderRadius={borderRadius}
          handleBorder={handleBorder} border={border} />
      </Router>
    </div>
  );
}

export default App;