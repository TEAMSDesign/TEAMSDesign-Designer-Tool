import React from "react";
import './Specs.css'
// import { useState } from "react";

export default function Specs (props) {

    // const docStyle = getComputedStyle(document.documentElement);
    // const headerSize = docStyle.getPropertyValue('--test-header-size');

    return (
        <div className="page-container">
            <div className="section__container">
                <h4>Typography</h4>
                <div className="snippet-section__container">
                    <div className="section-child-container demo-template__container">
                        <div className="demo-font-group__wrapper">
                            <h1 style={{fontWeight:700}}>H1-Abc123</h1>
                            <h1>Milky Way</h1>
                        </div>
                        <div className="demo-font-group__wrapper">
                            <h2 style={{fontWeight:700}}>H2-Abc123</h2>
                            <h2>Milky Way</h2>
                        </div>
                        <div className="demo-font-group__wrapper">
                            <h3 style={{fontWeight:700}}>H3-Abc123</h3>
                            <h3>Milky Way</h3>
                        </div>
                        <div className="demo-font-group__wrapper">
                            <h4 style={{fontWeight:700}}>H4-Abc123</h4>
                            <h4>Milky Way</h4>
                        </div>
                        <div className="demo-font-group__wrapper">
                            <h5 style={{fontWeight:700}}>H5-Abc123</h5>
                            <h5>Milky Way</h5>
                        </div>
                        <div className="demo-font-group__wrapper">
                            <h6 style={{fontWeight:700}}>H6-Abc123</h6>
                            <h6>Milky Way</h6>
                        </div>
                        <div className="demo-font-group__wrapper">
                            <p style={{fontWeight:700}}>p-Abc123</p>
                            <p>Milky Way</p>
                        </div>
                    </div>
                    <div className="section-child-container code__container">
                        <pre>
                            <code>
                                --initialFontSize: <span id="dinamicSize">{props.initialFontSize};</span><br />
                                --initialRatio: <span id="dynamicLightness">{props.factor};</span><br />
                                <br />
                                --text-0: calc(var(--baseFontSize) / var(--initialRatio));<br />
                                --text-1: var(--initialFontSize);<br />
                                --text-2: calc(var(--text-1) * var(--initialRatio));<br />
                                --text-3: calc(var(--text-2) * var(--initialRatio));<br />
                                --text-4: calc(var(--text-3) * var(--initialRatio));<br />
                                --text-5: calc(var(--text-4) * var(--initialRatio));<br />
                                --text-6: calc(var(--text-5) * var(--initialRatio));<br />
                            </code>
                        </pre>
                    </div>
                </div>
            </div>

            <div className="section__container">
                <h4>Spacing</h4>
                <div className="snippet-section__container">
                    <div className="section-child-container demo-template__container">
                        <div className="demo-space demo-space-1"></div>
                        <div className="demo-space demo-space-2"></div>
                        <div className="demo-space demo-space-3"></div>
                        <div className="demo-space demo-space-4"></div>
                        <div className="demo-space demo-space-5"></div>
                        <div className="demo-space demo-space-6"></div>
                        <div className="demo-space demo-space-7"></div>
                    </div>
                    <div className="section-child-container code__container">
                        <pre>
                            <code>
                                --initialLineheight: <span id="dynamicLightness">{props.lineheight};</span><br />
                                --lineheightIncrement: <span id="dynamicLightness">{props.lineheightIncrement};</span><br />
                                <br />
                                --space-1: calc(var(--initialLineheight));<br />
                                --space-2: calc( var(--space-1) * var(--lineheightIncrement));<br />
                                --space-3: calc(var(--space-2) * var(--lineheightIncrement));<br />
                                --space-4: calc(var(--space-3) * var(--lineheightIncrement));<br />
                                --space-5: calc(var(--space-4) * var(--lineheightIncrement));<br />
                                --space-6: calc(var(--space-5) * var(--lineheightIncrement));<br />
                                --space-7: calc(var(--space-6) * var(--lineheightIncrement));<br />
                            </code>
                        </pre>
                    </div>
                </div>
            </div>
            
            <div className="section__container">
                <h4>Color</h4>
                <div className="snippet-section__container">
                    <div className="section-child-container demo-template__container">
                        <div className="color-scale__section color-light-scale">
                            <h5>Light Scale</h5>
                            <div className="demo-color color-light01">Light 01</div>
                            <div className="demo-color color-light02">Light 02</div>
                            <div className="demo-color color-light03">Light 03</div>
                            <div className="demo-color color-light04">Light 04</div>
                            <div className="demo-color color-light05">Light 05</div>
                            <div className="demo-color color-light06">Light 06</div>
                            <div className="demo-color color-light07">Light 07</div>
                            <div className="demo-color color-light08">Light 08</div>
                            <div className="demo-color color-light09">Light 09</div>
                        </div>
                        <div className="color-scale__section color-grey-scale">
                            <h5>Grey Scale</h5>
                            <div className="single-color__container">
                                <div className="demo-color color-grey01"></div>
                                <div className="demo-color-text">Grey 01</div>
                            </div>
                            <div className="single-color__container">
                                <div className="demo-color color-grey02"></div>
                                <div>Grey 02</div>
                            </div>
                            <div className="demo-color color-grey03">Grey 03</div>
                            <div className="demo-color color-grey04">Grey 04</div>
                            <div className="demo-color color-grey05">Grey 05</div>
                            <div className="demo-color color-grey06">Grey 06</div>
                            <div className="demo-color color-grey07">Grey 07</div>
                            <div className="demo-color color-grey08">Grey 08</div>
                            <div className="demo-color color-grey09">Grey 09</div>
                        </div>
                    </div>
                    <div className="section-child-container code__container">
                        <pre role='img'>
                            <code>
                                {/* --baseColor: <span id="dinamicSize">{props.baseColor};</span><br /> */}
                                --baseColor: hsl(var(--lightscaleHueIncrement), var(--lightscaleSaturationIncrement), var(--lightscaleLightnessIncrement));<br />
                                --initiallightHue: <span id="dynamicHue">{props.hue};</span><br />
                                --initiallightSaturation: <span id="dynamicSaturation">{props.saturation};</span><br />
                                --initiallightLightness: <span id="dynamicLightness">{props.lightness};</span><br />
                                <br />
                                --lightscaleHueIncrement: 4;<br />
                                --lightscaleSaturationIncrement: 0%;<br />
                                --lightscaleLightnessIncrement: 7%;<br />
                            </code>
                        </pre>
                    </div>
                </div>
            </div>
            
            <div className="section__container">
                <h4>Layout</h4>
                <div className="snippet-section__container">
                    <div className="section-child-container demo-template__container demo-layout__wrapper">
                        <div className="demo-layout-square"></div>
                        <div className="demo-layout-rect"></div>
                    </div>
                    <div className="section-child-container code__container">
                        <pre role='img'>
                            <code>
                                --initialBorderRadius: <span id="dynamicLightness">{props.borderRadius};</span><br />
                                --initialBorder: <span id="dynamicLightness">{props.border};</span><br />
                            </code>
                        </pre>
                    </div>
                </div>
            </div>

            <div className="section__container">
                <h4>Dark Mode</h4>
                <div className="snippet-section__container">
                    {/* <div className="section-child-container demo-template__container demo-layout__wrapper">
                        <div className="demo-layout-square"></div>
                        <div className="demo-layout-rect"></div>
                    </div> */}
                    <div className="section-child-container code__container">
                        <pre role='img'>
                            <code>
                                --initialBorderRadius: <span id="dynamicLightness">{props.borderRadius};</span><br />
                                --initialBorder: <span id="dynamicLightness">{props.border};</span><br />
                            </code>
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    )
}