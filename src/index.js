import React from "react";
import { render } from 'react-dom';
import Router from "./components/Router"
import "./css/style.css"

render(<Router />, document.querySelector('#main'));

//export default StorePicker
// This index file is the main javascript file for our html page, our script tag, more or less.
// index.js calls on App.js