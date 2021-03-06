import React from 'react'
import { render } from 'react-dom'
import Main from './components/main/Main.jsx'
import "toastify-js/src/toastify.css"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'animate.css';
import 'rc-slider/assets/index.css';

import './assets/scss/style.scss';

import { BrowserRouter as Router } from "react-router-dom";

import { Provider } from 'react-redux'
import Store from './.store/store'
import ScrollToTop from "./components/shared/ScrollToTop";

// Since we are using HtmlWebpackPlugin WITHOUT a template, we should create our own root node in the body element before rendering into it
let root = document.createElement('div')

root.id = 'root'
document.body.appendChild(root);

// Now we can render our application into it
render(
    <Provider store={Store}>
        <Router>
            <ScrollToTop />
            <Main />
        </Router>
    </Provider>
    ,
    document.getElementById('root')
)
 