import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./bootstrap.min.css";
import store from "./components/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <h1>THIS IS RESTAURANTS</h1>
        <Provider store={store}>
            <App />
        </Provider> 
    </React.StrictMode>
);
