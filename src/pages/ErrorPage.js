import React from "react";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import './ErrorPage.css';

// const ErrorPage = ({props, handleToolClose}) => { 
    export default function ErrorPage (props) {
    useEffect(() => {
        // props.toolClosed = true;
        // console.log(props.toolClosed);
        // handleToolClose(true);
    });

    return (
        <div className="error-page__container" style={{width: props.toolClosed ? '100vw' : 'calc(100vw - 320px)'}}>
            <h1>404</h1>
            <p>Sorry, page not found</p>
            <NavLink to= '/' type="button" className="back-button">Back to Demo</NavLink>
        </div>
    )
}

// export default ErrorPage;