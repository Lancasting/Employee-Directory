import React from "react";

function Container(props) {
    return <div className={`container${props.fluid ? "-fluid" : ""}`} />
}
export default Container;