import React from 'react';
import ReactDOM from 'react-dom';
import AppComponent from './components/app.component';
import { store } from "./store";
import Provider from "react-redux/es/components/Provider";
import unregister from './services/fetch-intercept';
import queryString from 'query-string';
import './scss/_global.scss';
import './scss/_scroll.scss';
import 'bootstrap/dist/css/bootstrap.css';

window.sessionStorage.setItem("queryParam", JSON.stringify(queryString.parse(window.location.search)));

ReactDOM.render(
    <Provider store={store}>
        <AppComponent />
    </Provider>, 
    document.getElementById("root")
);
