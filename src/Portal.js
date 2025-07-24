import React from "react";
import ReactDOM from "react-dom";
import ModalApp from "./Modal.js";

ReactDOM.createPortal(<ModalApp />, document.getElementById("modal"));
