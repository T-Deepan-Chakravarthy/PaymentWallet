import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";
import store from "./store/Store";
import Routers from "./routers/AppRouters"
import React from "react";

const App = () => {
  return (
    <div>
      <Provider store={store()}>
        <Routers/>
      </Provider>
    </div>
  );
};

export default App;
