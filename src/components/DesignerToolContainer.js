import React from "react";
import './DesignerToolContainer.css'
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function DesignerToolContainer(props) {
    useEffect(() => {
      }, []);

      const handleClose = () => {
          document.getElementById('settingsDrawer').style.display = 'none';
      }

      let activeStyle = {
        color: "#3b5aab",
        backgroundColor: "var(--bg-color-card)",
      }

      const [showHex, setShowHex] = useState(true);

      const handleShowHex = event => {
        setShowHex(true);
        setShowHsl(false);
        
      }

      const [showHsl, setShowHsl] = useState(false);

      const handleShowHsl = event => {
          setShowHsl(true);
          setShowHex(false);
      }

      var initialFontSizeString = props.initialFontSize;
      var newInitialFontSize = initialFontSizeString.replace("px", "");

    return (
        <div id="settingsDrawer" className="settings-drawer">
            <div className="settings-header">
                {/* <h5>TEAMS Designer</h5> */}
                <h4 className="settings-title">Customization</h4>
                <button className="settings-close-button" onClick={handleClose}>
                    <span class="material-symbols-outlined">close</span>
                </button>
            </div>
            <nav className="settings-nav-section">
                <div className="settings-nav-toggle-wrapper">
                    <NavLink to="/" className="nav-toggle" style={({ isActive }) =>
                        isActive ? activeStyle : undefined }>
                    Demo</NavLink>
                    <NavLink to="/specs" className="nav-toggle" style={({ isActive }) =>
                        isActive ? activeStyle : undefined }>
                    Specs</NavLink>
                </div>
            </nav>
            {/* <h4 className="settings-title">Customization</h4> */}

            <div className="settings-section darkmode-section">
                <label className="settings-label" style={{marginTop: 0}}>Dark Mode</label>
                <label className="switch">
                    <input id="darkModeInput" type='checkbox' name='darkMode' onChange={props.handleDarkMode}></input>
                    <span className="slider round"></span>
                </label>
            </div>

            <div className="settings-section">
                <h5 className="settings-subtitle">Typography</h5>
                <div>
                    <label className="settings-label">Base Font Size</label>
                    <input name='baseFontSize' min='8' max='80'type='range' defaultValue="16" step="0.01" onChange={props.handleSizeChange} />
                    <div className="settings-value-row">
                        <p className="settings-value">{newInitialFontSize}</p>
                        <p className="settings-value">px</p>
                    </div>
                </div>

                <div>
                    <label className="settings-label">Font Proportion</label>
                    <input name='factor' min='1' max='2'type='range' defaultValue="1.3" step="0.01" onChange={props.handleFactor} />
                    <div className="settings-value-row">
                        <p className="settings-value">{props.factor}</p>
                        <p className="settings-value">ratio</p>
                    </div>
                </div>
            </div>

            <div className="settings-section">
                <h5 className="settings-subtitle">Spacing</h5>
                <div>
                    <label className="settings-label">Linehieght</label>
                    <input name='lineheight' min='1' max='40' type='range' defaultValue="24" step="0.1" onChange={props.handleLineheight} />
                    <div className="settings-value-row">
                        <p className="settings-value">{props.lineheight}</p>
                        <p className="settings-value">px</p>
                    </div>
                </div>

                <div>
                    <label className="settings-label">Space Proportion</label>
                    <input name='lineheightIncrement' min='1' max='2' type='range' defaultValue="1.5" step="0.01" onChange={props.handleLineheightIncrement} />
                    <div className="settings-value-row">
                        <p className="settings-value">{props.lineheightIncrement}</p>
                        <p className="settings-value">ratio</p>
                    </div>
                </div>
            </div>

            <div className="settings-section">
                <div className="settings-subtitle-color">
                    <h5 className="settings-subtitle">Color</h5>
                    <div className="settings-color-toggle-wrapper">
                        <button id="hexButton" className={"settings-color-button"} style={ showHex ? activeStyle : undefined} onClick={handleShowHex}>HEX</button>
                        <button id="hlsButton" className={"settings-color-button"} style={ showHsl ? activeStyle : undefined} onClick={handleShowHsl}>HSL</button>
                    </div>
                </div>
                {showHex && (
                    <div className="settings-hex__section">
                        <label className="settings-label">Base Color</label>
                        <div className="settings-value-row">
                            <input type='text' placeholder="#3b5aab" onChange={props.handleColorChange}></input>
                        </div>
                    </div>
                )}
                
                {showHsl && (
                    <div className="settings-hsl__section">
                        <div>
                            <label className="settings-label">Hue</label>
                            <input name='hue' min='0' max='360'type='range' defaultValue="223" onChange={props.handleHue} />
                            <div className="settings-value-row">
                                <p className="settings-value">{props.hue}</p>
                                <p className="settings-value">°</p>
                            </div>
                        </div>

                        <div>
                            <label className="settings-label">Saturation</label>
                            <input name='saturation' min='0' max='100'type='range' defaultValue="49" onChange={props.handleSaturation} />
                            <div className="settings-value-row">
                                <p className="settings-value">{props.saturation}</p>
                                <p className="settings-value">%</p>
                            </div>
                        </div>

                        <div>
                            <label className="settings-label">Lightness</label>
                            <input name='lightness' min='0' max='100'type='range' defaultValue="45" onChange={props.handleLightness} />
                            <div className="settings-value-row">
                                <p className="settings-value">{props.lightness}</p>
                                <p className="settings-value">%</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className="settings-section">
                <h5 className="settings-subtitle">Layout</h5>
                <div>
                    <label className="settings-label">Border Radius</label>
                    <input name='borderRadius' min='0' max='100'type='range' defaultValue="8" step="0.01" onChange={props.handleBorderRadius} />
                    <div className="settings-value-row">
                        <p className="settings-value">{props.borderRadius}</p>
                        <p className="settings-value">px</p>
                    </div>
                </div>

                <div>
                    <label className="settings-label">Border</label>
                    <input name='border' min='0' max='3'type='range' defaultValue="1" step="0.1" onChange={props.handleBorder} />
                    <div className="settings-value-row">
                        <p className="settings-value">{props.border}</p>
                        <p className="settings-value">px</p>
                    </div>
                </div>
            </div>
        </div>
    );
}