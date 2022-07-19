import React from "react";
import './Specs.css'
// import { useState } from "react";

export default function Specs (props) {

    // const docStyle = getComputedStyle(document.documentElement);
    // const headerSize = docStyle.getPropertyValue('--test-header-size');

    return (
        <div className="page-container">
            <div>
                <h3>Typography</h3>
                <div className="code-container">
                    <pre>
                        <code>
                            --baseFontSize: <span id="dinamicSize">{props.fontIncrement};</span><br />
                            --initialFactor: <span id="dynamicLightness">{props.factor};</span><br />
                            --initialLineheight: <span id="dynamicLightness">{props.lineheight};</span><br />
                        </code>
                    </pre>
                </div>
            </div>
            
            <div>
                <h3>Color</h3>
                <div className="code-container">
                    <pre role='img'>
                        <code>
                            --baseColor: <span id="dinamicSize">{props.baseColor};</span><br />
                            --initialHue: <span id="dynamicHue">{props.hue};</span><br />
                            --initialSaturation: <span id="dynamicSaturation">{props.saturation};</span><br />
                            --initialLightness: <span id="dynamicLightness">{props.lightness};</span><br />
                        </code>
                    </pre>
                </div>
            </div>
            
            <div>
                <h3>Layout</h3>
                <div className="code-container">
                    <pre role='img'>
                        <code>
                            --initialBorderRadius: <span id="dynamicLightness">{props.borderRadius};</span><br />
                            --initialBorder: <span id="dynamicLightness">{props.border};</span><br />
                        </code>
                    </pre>
                </div>
            </div>
        </div>
    )
}