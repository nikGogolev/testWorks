import Icon from "@mui/material/Icon";
import React, { ReactNode, useState } from "react";
import "./widget.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
interface WidgetProps {
  title?: string;
  contentText?: string;
  expandable?: boolean;
  contentCildren?: ReactNode;
  controlChildren?: ReactNode;
  children?: ReactNode;
}
function Widget(props: WidgetProps) {
  const [fullScreen, setFullScreen] = useState(false);
  console.log(fullScreen);

  return (
    <>
      <div className={(fullScreen ? "full-screen " : "") + "container"}>
        <div className={(fullScreen ? "full-screen " : "") + "widget"}>
          <div className="widget-header">
            <h2 className="widget-title">
              {props.title ? props.title : "Widget title"}
            </h2>
            <div className="widget-controls">
              {props.controlChildren}
              <button
                disabled={!props.expandable}
                className="expand-compress-btn"
                onClick={() => {
                  setFullScreen(!fullScreen);
                }}
              >
                <FontAwesomeIcon
                  icon={fullScreen ? "compress" : "expand"}
                  className="fa-2xl"
                />
              </button>
            </div>
          </div>
          <div className="widget-content">
            <h2 className="widget-content-title">
              {props.contentText ? props.contentText : "Widget content title"}
            </h2>
            <div className="widget-content-data">{props.children}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Widget;
