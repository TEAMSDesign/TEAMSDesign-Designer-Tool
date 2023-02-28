import JSZip from "jszip";
import React from "react";
import { saveAs } from 'file-saver';
import JSZipUtils from "jszip-utils";
import './Specs.css'
// import { useState } from "react";

export default function Specs (props) {

    // const docStyle = getComputedStyle(document.documentElement);
    // const headerSize = docStyle.getPropertyValue('--test-header-size');

    // Download Zip File
    const zip = new JSZip();
    var zipFilename = "myexample.zip"
    var paths = [
        '../index.css',
        '../StarterKit/index.html'
    ];

    var stylesData = '../index.css';
    var fileImage = 'https://digitalisation-images.s3.eu-central-1.amazonaws.com/landscape-today1.svg';
    var remoteFile = '../StarterKit/index.html';

    // fileUrls.forEach((url) => {
    //     var filename = "filename";

    // })

    zip.file("Hello.txt", "Hello World");
    const cssFolder = zip.folder("css");
    // cssFolder.file("styles.css", stylesData, {base64: true});

    var promiseRemoteFile = new JSZip.external.Promise(function (resolve, reject) {
        JSZipUtils.getBinaryContent(stylesData, function (err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
    cssFolder.file("styles.css", promiseRemoteFile);

    // JSZipUtils.getBinaryContent('Specs.css', function (err, data) {
    //         if (err) {
    //             throw err;
    //         } 
    //         var zip = new JSZip();
    //         zip.file('../index.css', data);
    // });
    
    function generateZipFile() {
        zip.generateAsync({type:"blob"}).then(function(content) {
            saveAs(content, zipFilename);
        });
    }

    return (
        <div className="page-container">
            <div className="section__container">
                <h4 className="section-title">Typography</h4>
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
                <h4 className="section-title">Spacing</h4>
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
                <h4 className="section-title">Color</h4>
                <div className="snippet-section__container">
                    <div className="section-child-container demo-template__container">
                        <div className="color-scale__section color-light-scale">
                            <h5 className="color-scale-subtitle">Light Scale</h5>
                            {/* <div className="single-color__container">
                                <div className="demo-color color-light00"></div>
                                <div className="demo-color-text">Light 00</div>
                            </div> */}
                            <div className="single-color__container">
                                <div className="demo-color color-light-01"></div>
                                <div className="demo-color-text">Light -01</div>
                            </div>
                            <div className="single-color__container">
                                <div className="demo-color color-light00"></div>
                                <div className="demo-color-text">Light 00</div>
                            </div>
                            <div className="single-color__container">
                                <div className="demo-color color-light01"></div>
                                <div className="demo-color-text base-color">Light 01</div>
                            </div>
                            <div className="single-color__container">
                                <div className="demo-color color-light02"></div>
                                <div className="demo-color-text">Light 02</div>
                            </div>
                            <div className="single-color__container">
                                <div className="demo-color color-light03"></div>
                                <div className="demo-color-text">Light 03</div>
                            </div>
                            <div className="single-color__container">
                                <div className="demo-color color-light04"></div>
                                <div className="demo-color-text">Light 04</div>
                            </div>
                            <div className="single-color__container">
                                <div className="demo-color color-light05"></div>
                                <div className="demo-color-text">Light 05</div>
                            </div>
                            <div className="single-color__container">
                                <div className="demo-color color-light06"></div>
                                <div className="demo-color-text">Light 06</div>
                            </div>
                            <div className="single-color__container">
                                <div className="demo-color color-light07"></div>
                                <div className="demo-color-text">Light 07</div>
                            </div>
                            <div className="single-color__container">
                                <div className="demo-color color-light08"></div>
                                <div className="demo-color-text">Light 08</div>
                            </div>
                            <div className="single-color__container">
                                <div className="demo-color color-light09"></div>
                                <div className="demo-color-text">Light 09</div>
                            </div>
                        </div>
                        <div className="color-scale__section color-grey-scale">
                            <h5 className="color-scale-subtitle">Grey Scale</h5>
                            <div className="single-color__container">
                                <div className="demo-color color-grey00"></div>
                                <div className="demo-color-text">Grey 00</div>
                            </div>
                            <div className="single-color__container">
                                <div className="demo-color color-grey01"></div>
                                <div className="demo-color-text">Grey 01</div>
                            </div>
                            <div className="single-color__container">
                                <div className="demo-color color-grey02"></div>
                                <div className="demo-color-text">Grey 02</div>
                            </div>
                            <div className="single-color__container">
                                <div className="demo-color color-grey03"></div>
                                <div className="demo-color-text">Grey 03</div>
                            </div>
                            <div className="single-color__container">
                                <div className="demo-color color-grey04"></div>
                                <div className="demo-color-text">Grey 04</div>
                            </div>
                            <div className="single-color__container">
                                <div className="demo-color color-grey05"></div>
                                <div className="demo-color-text">Grey 05</div>
                            </div>
                            <div className="single-color__container">
                                <div className="demo-color color-grey06"></div>
                                <div className="demo-color-text">Grey 06</div>
                            </div>
                            <div className="single-color__container">
                                <div className="demo-color color-grey07"></div>
                                <div className="demo-color-text">Grey 07</div>
                            </div>
                            <div className="single-color__container">
                                <div className="demo-color color-grey08"></div>
                                <div className="demo-color-text">Grey 08</div>
                            </div>
                            <div className="single-color__container">
                                <div className="demo-color color-grey09"></div>
                                <div className="demo-color-text">Grey 09</div>
                            </div>
                            <div className="single-color__container">
                                <div className="demo-color color-grey10"></div>
                                <div className="demo-color-text">Grey 10</div>
                            </div>
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
                                <br />
                                --light1H: var(--initiallightHue);
                                --light2H: calc(var(--initiallightHue) - var(--lightscaleHueIncrement) * 1);<br />
                                --light3H: calc(var(--initiallightHue) - var(--lightscaleHueIncrement) * 2);<br />
                                --light4H: calc(var(--initiallightHue) - var(--lightscaleHueIncrement) * 3);<br />
                                --light5H: calc(var(--initiallightHue) - var(--lightscaleHueIncrement) * 4);<br />
                                --light6H: calc(var(--initiallightHue) - var(--lightscaleHueIncrement) * 5);<br />
                                --light7H: calc(var(--initiallightHue) - var(--lightscaleHueIncrement) * 6);<br />
                                --light8H: calc(var(--initiallightHue) - var(--lightscaleHueIncrement) * 7);<br />
                                --light9H: calc(var(--initiallightHue) - var(--lightscaleHueIncrement) * 8);<br />
                                --light1S: var(--initiallightSaturation);<br />
                                --light2S: calc(var(--initiallightSaturation) - var(--lightscaleSaturationIncrement) * 1);<br />
                                --light3S: calc(var(--initiallightSaturation) - var(--lightscaleSaturationIncrement) * 2);<br />
                                --light4S: calc(var(--initiallightSaturation) - var(--lightscaleSaturationIncrement) * 3);<br />
                                --light5S: calc(var(--initiallightSaturation) - var(--lightscaleSaturationIncrement) * 4);<br />
                                --light6S: calc(var(--initiallightSaturation) - var(--lightscaleSaturationIncrement) * 5);<br />
                                --light7S: calc(var(--initiallightSaturation) - var(--lightscaleSaturationIncrement) * 6);<br />
                                --light8S: calc(var(--initiallightSaturation) - var(--lightscaleSaturationIncrement) * 7);<br />
                                --light9S: calc(var(--initiallightSaturation) - var(--lightscaleSaturationIncrement) * 8);<br />
                                --light1L: var(--initiallightLightness);<br />
                                --light2L: calc(var(--initiallightLightness) - var(--lightscaleLightnessIncrement) * 1);<br />
                                --light3L: calc(var(--initiallightLightness) - var(--lightscaleLightnessIncrement) * 2);<br />
                                --light4L: calc(var(--initiallightLightness) - var(--lightscaleLightnessIncrement) * 3);<br />
                                --light5L: calc(var(--initiallightLightness) - var(--lightscaleLightnessIncrement) * 4);<br />
                                --light6L: calc(var(--initiallightLightness) - var(--lightscaleLightnessIncrement) * 5);<br />
                                --light7L: calc(var(--initiallightLightness) - var(--lightscaleLightnessIncrement) * 6);<br />
                                --light8L: calc(var(--initiallightLightness) - var(--lightscaleLightnessIncrement) * 7);<br />
                                --light9L: calc(var(--initiallightLightness) - var(--lightscaleLightnessIncrement) * 8);<br /> 
                                --light-01: hsl(var(--light1H), var(--light1S), var(--light1L));<br />
                                --light-02: hsl(var(--light2H), var(--light2S), var(--light2L));<br />
                                --light-03: hsl(var(--light3H), var(--light3S), var(--light3L));<br />
                                --light-04: hsl(var(--light4H), var(--light4S), var(--light4L));<br />
                                --light-05: hsl(var(--light5H), var(--light5S), var(--light5L));<br />
                                --light-06: hsl(var(--light6H), var(--light6S), var(--light6L));<br />
                                --light-07: hsl(var(--light7H), var(--light7S), var(--light7L));<br />
                                --light-08: hsl(var(--light8H), var(--light8S), var(--light8L));<br />
                                --light-09: hsl(var(--light9H), var(--light9S), var(--light9L));<br />
                            </code>
                        </pre>
                    </div>
                </div>
            </div>
            
            <div className="section__container">
                <h4 className="section-title">Layout</h4>
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
                <h4 className="section-title">Dark Mode</h4>
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

            <div className="section__container">
                <h4 className="section-title">Customized Variables</h4>
                <div className="snippet-section__container">
                    {/* <div className="section-child-container demo-template__container demo-layout__wrapper">
                        <div className="demo-layout-square"></div>
                        <div className="demo-layout-rect"></div>
                    </div> */}
                    <div className="section-child-container code__container">
                        <div className="code-remove__container">
                            <button className="variable-remove-button">-</button>
                            <code>--bg-color-primary-button: #3b5aab;</code>
                        </div>
                        <div className="code-remove__container">
                            <button className="variable-remove-button">-</button>
                            <code>--border-radius-primary-button: 8px;</code>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}