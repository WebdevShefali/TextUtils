import React from "react";

const Alert = (props) => {
  return (
    <div style={{height: '50px'}}>
      { props.alert &&  <div
        className="alert"
        role="alert"
        style={{
          backgroundImage:
            props.mode === "light"
              ? "linear-gradient( 109.6deg,  rgba(204,228,247,1) 11.2%, rgba(237,246,250,1) 100.2% )"
              : "linear-gradient( 76.3deg,  rgba(44,62,78,1) 12.6%, rgba(69,103,131,1) 82.8% )",
          color: props.mode === "light" ? "black" : "white",
        }}
      >
       {props.alert.msg}
      </div>}
    </div>
  );
};

export default Alert;
