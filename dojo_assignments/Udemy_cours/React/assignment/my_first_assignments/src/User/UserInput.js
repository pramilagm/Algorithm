import React from "react";
import "./user.css";
var input = props => {
  return (
    <div className="input">
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};
export default input;
