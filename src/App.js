import './App.css';
import DesignerToolContainer from './components/DesignerToolContainer';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Demo from "../src/pages/Demo"
import Specs from "../pages/Specs"
import ErrorPage from "../pages/ErrorPage"

import * as React from "react";

import { useEffect, useState } from "react";

function App() {
  useEffect(() => {
  }, []);

  const [darkMode, setDarkMode] = useState(false);

  const handleDarkMode = (event) => {
    setDarkMode(event.target.checked);
    event.target.checked ? document.body.setAttribute('data-theme', 'dark') : document.body.removeAttribute('data-theme');
  }

  // Base Font Size
  const [initialFontSize, setinitialFontSize] = useState("16");

  function handleSizeChange (event) {
    document.documentElement.style.setProperty('--initialFontSize', event.target.value + 'px');
    setinitialFontSize(event.target.value);
  }

  // Font Proportion
  const [factor, setFactor] = useState('1.3');

  function handleFactor (event) {
    document.documentElement.style.setProperty('--initialRatio', event.target.value);
    document.documentElement.style.setProperty('--factorPixelValue', event.target.value + 'px')
    setFactor(event.target.value);
  }

  // Unit
  const [lineheight, setLineheight] = useState('16');

  const handleLineheight = (event) => {
    document.documentElement.style.setProperty('--initialLineheight', event.target.value + 'px');
    document.documentElement.style.setProperty('--lineheightPixelValue', event.target.value + 'px');
    setLineheight(event.target.value);
  }

  // Space Proportion
  const [lineheightIncrement, setLineheightIncrement] = useState('1.22');

  const handleLineheightIncrement = (event) => {
    document.documentElement.style.setProperty('--lineheightIncrement', event.target.value);
    document.documentElement.style.setProperty('--lineheightIncrementPixelValue', event.target.value + 'px');
    setLineheightIncrement(event.target.value);
  }

  // HEX Color
  const [baseColor, setBaseColor] = useState('#3b5cad');

  function handleColorChange (event) {
    document.documentElement.style.setProperty('--baseColor', event.target.value);
    setBaseColor(event.target.value);
  }


  // Hue
  const [hue, setHue] = useState('223');

  function handleHue (event) {
    document.documentElement.style.setProperty('--initiallightHue', event.target.value);
    document.documentElement.style.setProperty('--huePixelValue', event.target.value + 'px');
    setHue(event.target.value);
  }

  // Saturation
  const [saturation, setSaturation] = useState('49');

  const handleSaturation = (event) => {
    document.documentElement.style.setProperty('--initiallightSaturation', event.target.value + '%');
    document.documentElement.style.setProperty('--saturationPixelValue', event.target.value + 'px');
    setSaturation(event.target.value);
  }

  // Lightness
  const [lightness, setLightness] = useState('45');

  function handleLightness (event) {
    document.documentElement.style.setProperty('--initiallightLightness', event.target.value + '%');
    document.documentElement.style.setProperty('--lightnessPixelValue', event.target.value + 'px');
    setLightness(event.target.value);
  }

  // Border Radius
  const [borderRadius, setBorderRadius] = useState('0')

  function handleBorderRadius (event) {
    document.documentElement.style.setProperty('--initialBorderRadius', event.target.value + 'px');
    setBorderRadius(event.target.value);
  }

  // Border
  const [border, setBorder] = useState('1');

  function handleBorder (event) {
    document.documentElement.style.setProperty('--initialBorder', event.target.value + 'px');
    setBorder(event.target.value);
  }

  // Props from Designer Tool
  const [toolClosed, setToolClosed] = useState(false);

  const handleToolClose = () => {
    setToolClosed(true);
    document.getElementById('settingsDrawer').style.width = '0';
    document.getElementById('settingsDrawer').style.padding = '0';
    // document.getElementById('settingsDrawer').style.boxShadow = 'none';
  }

  const handleToolOpen = () => {
    setToolClosed(false);
    document.getElementById('settingsDrawer').style.width = '320px';
    document.getElementById('settingsDrawer').style.padding = '0 24px 36px 24px';
  }

  return (
    <div className="App app-container">
      <Router>
        <Routes>
          <Route path="/" element={<Demo
              toolClosed={toolClosed} />}>
          </Route>
          
          <Route path="/specs" element={
            <Specs
              initialFontSize={initialFontSize + 'px'}
              factor={factor}
              lineheight={lineheight + 'px'}
              lineheightIncrement={lineheightIncrement}
              baseColor={baseColor}
              hue={hue}
              saturation={saturation + '%'}
              lightness={lightness + '%'}
              borderRadius={borderRadius + 'px'}
              border={border + 'px'}
              toolClosed={toolClosed} />
            }>
          </Route>

          <Route path="*" element={<ErrorPage />}>
          </Route>
        </Routes>
        <DesignerToolContainer
          handleDarkMode={handleDarkMode.bind(this)}
          handleSizeChange={handleSizeChange.bind(this)} initialFontSize={initialFontSize + 'px'}
          handleFactor={handleFactor} factor={factor}
          handleLineheight={handleLineheight} lineheight={lineheight}
          handleLineheightIncrement={handleLineheightIncrement} lineheightIncrement={lineheightIncrement}
          handleColorChange={handleColorChange.bind(this)} baseColor={baseColor}
          handleHue={handleHue} hue={hue}
          handleSaturation={handleSaturation} saturation={saturation}
          handleLightness={handleLightness} lightness={lightness}
          handleBorderRadius={handleBorderRadius} borderRadius={borderRadius}
          handleBorder={handleBorder} border={border}
          handleToolClose={handleToolClose.bind(this)} />
      </Router>
      <button id='settingsDrawerOpen' className="settings-open-button" onClick={handleToolOpen}>
          <span class="material-symbols-outlined">arrow_back</span>
      </button>
    </div>
  );
}

export default App;