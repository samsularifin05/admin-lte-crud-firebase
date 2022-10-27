import React from "react";

const Row = (props) => {
  return (
    <div className={`row ${props.className ? props.className:''}`} style={props.style}>
        {props.children}
    </div>
  );
};

export default Row;
