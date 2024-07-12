import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { ShopProvider } from "./Context/ShopContext";
import { Provider } from "react-redux";
import appStore from "./Utils/store/appStore";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={appStore}>
      <ShopProvider>
        <App />
      </ShopProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
