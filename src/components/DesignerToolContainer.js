import React from "react";
import './DesignerToolContainer.css'
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function DesignerToolContainer(props) {
    useEffect(() => {
        // const size = getComputedStyle(document.documentElement).getPropertyValue('--test-header-size');
        // console.log(size);
      }, []);

      function handleColorChange (event) {
          document.documentElement.style.setProperty('--test-header-color', event.target.value);
      }
    
    return (
        <div class="settings-drawer">
            <nav class="settings-header">
                <Link to="/">Demo</Link>
                <Link to="/specs">Specs</Link>
            </nav>
            <h4>Customization</h4>
            <h5>Typography</h5>
            <div>
                <label>Font Increment</label>
                <div class="settings-value-row">
                    <p>{props.fontIncrement}px</p>
                    <input name='size' min='1' max='5'type='range' defaultValue="1" step="0.01" onChange={props.handleSizeChange} />
                </div>
            </div>
            <br></br>
            <h5>Color</h5>
            <div>
                <label>Primary Color</label>
                <div class="settings-value-row">
                    <input type='color' defaultValue="#0000ff" onChange={handleColorChange} />
                    <input type='text'></input>
                </div>
            </div>
        </div>
    );
}