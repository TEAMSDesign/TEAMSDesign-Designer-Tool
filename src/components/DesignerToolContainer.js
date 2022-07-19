import React from "react";
import './DesignerToolContainer.css'
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function DesignerToolContainer(props) {
    useEffect(() => {
        // const size = getComputedStyle(document.documentElement).getPropertyValue('--test-header-size');
        // console.log(size);
      }, []);

      let activeStyle = {
        color: "#3b5aab",
        backgroundColor: "white",
      }

    //   const testStyle = (event) => ({
    //       background : "linearGradient(90deg, blue 0%, blue " + props.fontIncrement + ", hsla(0,0%,100%,0.2) "+ props.fontIncrement +")",
    //   })

    // const colorSettingsStyle = () => {
    //     --td-baseColor: #3b5aab;
    // }

      const [showHex, setShowHex] = useState(true);

      const [activeButton, setActiveButton] = useState(true);

      const handleShowHex = event => {
        setShowHex(true);
        setShowHsl(false);
        setActiveButton(activeButton => !activeButton);
        
      }

      const [showHsl, setShowHsl] = useState(false);

      const handleShowHsl = event => {
          setShowHsl(true);
          setShowHex(false);
          setActiveButton(activeButton => !activeButton);
      }

    return (
        <div className="settings-drawer">
            {/* <div className="settings-header">
                <h4>TEAMS Designer</h4>
            </div> */}
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
            <h4 className="settings-title">Customization</h4>

            <div className="settings-section darkmode-section">
                <label className="settings-label" style={{marginTop: 0}}>Dark Mode</label>
                <label className="switch">
                    <input type='checkbox'></input>
                    <span className="slider round"></span>
                </label>
            </div>

            <div className="settings-section">
                <h5 className="settings-subtitle">Typography</h5>
                <div>
                    <label className="settings-label">Base Font Size</label>
                    <input name='baseFontSize' min='1' max='100'type='range' defaultValue="16" step="0.01" onChange={props.handleSizeChange} />
                    <div className="settings-value-row">
                        <p className="settings-value">{props.fontIncrement}</p>
                        <p className="settings-value">px</p>
                    </div>
                </div>

                <div>
                    <label className="settings-label">Factor</label>
                    <input name='factor' min='1' max='3'type='range' defaultValue="1" step="0.01" onChange={props.handleFactor} />
                    <div className="settings-value-row">
                        <p className="settings-value">{props.factor}</p>
                        <p className="settings-value">radio</p>
                    </div>
                </div>

                <div>
                    <label className="settings-label">Linehieght</label>
                    <input name='lineheight' min='1' max='50'type='range' defaultValue="1" step="0.01" onChange={props.handleLineheight} />
                    <div className="settings-value-row">
                        <p className="settings-value">{props.lineheight}</p>
                        <p className="settings-value">px</p>
                    </div>
                </div>
            </div>

            <div className="settings-section">
                <div className="settings-subtitle-color">
                    <h5 className="settings-subtitle">Color</h5>
                    <div className="settings-color-toggle-wrapper">
                        <button id="hexButton" className={"settings-color-button"} style={ showHex ? activeStyle : undefined} onClick={handleShowHex}>HEX</button>
                        <button id="hlsButton" className={"settings-color-button"} style={ showHsl ? activeStyle : undefined} onClick={handleShowHsl}>HLS</button>
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
                    <input name='borderRadius' min='0' max='100'type='range' defaultValue="1" step="0.01" onChange={props.handleBorderRadius} />
                    <div className="settings-value-row">
                        <p className="settings-value">{props.borderRadius}</p>
                        <p className="settings-value">%</p>
                    </div>
                </div>

                <div>
                    <label className="settings-label">Border</label>
                    <input name='border' min='0' max='5'type='range' defaultValue="1" step="0.01" onChange={props.handleBorder} />
                    <div className="settings-value-row">
                        <p className="settings-value">{props.border}</p>
                        <p className="settings-value">px</p>
                    </div>
                </div>
            </div>
        </div>
    );
}