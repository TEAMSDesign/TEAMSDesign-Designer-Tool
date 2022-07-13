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

  const [fontIncrement, setFontIncrement] = useState("1");

  function handleSizeChange (event) {
    console.log(event.target.value);
    document.documentElement.style.setProperty('--test-header-size', event.target.value);
    setFontIncrement(event.target.value);
  }
  
  return (
    <div className="App" class="app-container">
      <Router>
        <Routes>
          <Route path="/" element={<Demo />}>
          </Route>
          
          <Route path="/specs" element={<Specs />}>
          </Route>

          <Route path="*" element={<ErrorPage />}>
          </Route>
        </Routes>
        <DesignerToolContainer handleSizeChange={handleSizeChange.bind(this)} fontIncrement={fontIncrement} />
      </Router>
    </div>
  );
}

export default App;