import React from "react";
import '../index.css';
import './AppDemo.css';

const AppDemo = (props) => {
    return (
        <div id="container">
            <div className="meta-header">
                <div>Brand Logo</div>
                <div>
                    <button>Theme</button>
                    <button>Fullscreen</button>
                </div>
            </div>
            <div id="appScreen">
                <h1>App Demo</h1>
            </div>
        </div>
    )
}

export default AppDemo;