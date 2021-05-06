import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";
import getStore from "./store/Store";
import Routers from "./routers/Routers";
import React from "react";
import Header from './components/pages/Header';
import Footer from './components/pages/Footer';
export const store = getStore();

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Header/>
        <Routers/>
        <Footer/>
      </Provider>
    </div>
  );
};

export default App;
