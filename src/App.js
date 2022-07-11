import './App.css';
import DesignerToolContainer from './components/DesignerToolContainer';
import { useEffect } from "react";

function App() {

  useEffect(() => {
    // const size = getComputedStyle(document.documentElement).getPropertyValue('--test-header-size');
    // console.log(size);
  }, []);

  function setColor (newColor) {
    document.documentElement.style.setProperty('--test-header-color', newColor);
  }

  function handleSizeChange (event) {
    console.log(event.target.value);
    document.documentElement.style.setProperty('--test-header-size', event.target.value);
  }

  return (
    <div className="App">
      <button onClick={() => setColor('blue')}>Blue</button>
      <button onClick={() => setColor('purple')}>Purple</button>
      <input name='size' min='1' max='5'type='range' defaultValue="1" step="0.01" onChange={handleSizeChange} />
      <hr />
      <h1>hey yoo!</h1>
      <DesignerToolContainer />
    </div>
  );
}

export default App;