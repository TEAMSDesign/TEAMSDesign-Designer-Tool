import React from "react";
import './DesignerToolContainer.css'
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function DesignerToolContainer() {
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
        <div>
            <div>
                <button>Demo</button>
                <button>Specs</button>
                {/* <Link to="/specs">specs</Link>
                <Link to="/">demo</Link> */}
            </div>
            <br></br>
            <button onClick={() => setColor('blue')}>Blue</button>
            <button onClick={() => setColor('purple')}>Purple</button>
            <br></br>
            <div>
                <label>Font Increment</label>
                <input name='size' min='1' max='5'type='range' defaultValue="1" step="0.01" onChange={handleSizeChange} />
            </div>
            <hr />
        </div>
    );
}

// export default DesignerToolContainer;