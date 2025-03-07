import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import {store} from "./app/store";
import App from "./App";
import './index.css';
import { BrowserRouter as Router } from "react-router-dom"; 

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Root element not found");

const root = ReactDOM.createRoot(rootElement);
root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
