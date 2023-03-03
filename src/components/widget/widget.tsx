import Icon from "@mui/material/Icon";
import React, { useState } from "react";
import "./widget.css";

function Widget() {
  const [fullScreen, setFullScreen] = useState(false);
  console.log(fullScreen);

  return (
    <>
      <div className={(fullScreen ? "full-screen " : "") + "container"}>
        <div className={(fullScreen ? "full-screen " : "") + "widget"}>
          <p>asd</p>
          <button
            onClick={() => {
              setFullScreen(!fullScreen);
            }}
          >
            Switch
          </button>
          <Icon baseClassName="fas" className="fa-plus-circle" />
        </div>
      </div>
    </>
  );
}

export default Widget;
