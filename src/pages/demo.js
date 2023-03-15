import React from "react";
import './Demo.css'
import '../index.css'
// import '../StarterKit/header.css'
import Microsite from "../components/Microsite";

const Demo = (props) => {
    return (
      <div>
        <Microsite toolClosed={props.toolClosed}></Microsite>
      </div>
    )
}

export default Demo;