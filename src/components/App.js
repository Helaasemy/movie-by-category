import React from 'react';
import {Switch,Route} from "react-router-dom";
import './App.css';
import Home from "../components/Home/Home";
import Movies from "../components/Movies/Movies"

function App() {
  return (
    <>
    <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/movies" component={Movies} />
      </Switch>
    </>
  );
}

export default App;
