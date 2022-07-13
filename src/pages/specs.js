import React from "react";
import './Specs.css'
// import { useState } from "react";

export default function Specs () {

    // const [headerSize, setHeaderSize] = useState('');
    const docStyle = getComputedStyle(document.documentElement);
    const headerSize = docStyle.getPropertyValue('--test-header-size');

    // constructor super props here from parent to child componente (from parent to child)

    return (
        <div class="page-container">
            <h3>Typography</h3>
            <div class="code-container">
                <pre>
                    <code>
                        --test-header-size: <span id="dinamicSize">{headerSize}</span>
                    </code>
                </pre>
            </div>
            <h3>Color</h3>
            <div class="code-container">
                <pre>
                    <code>
                        --test-header-color: <span id="dinamicSize">blue</span>
                    </code>
                </pre>
            </div>
        </div>
    )
}