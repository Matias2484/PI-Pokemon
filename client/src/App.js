import React from "react";
import Navbar from "./components/NavBar/NavBar.js";
import { Route } from "react-router-dom";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import PokemonCreated from "./components/PokemonCreated/PokemonCreated.js";
import PokemonDetail from "./components/PokemonDetail/PokemonDetail.js";
import LandingPage from "./components/LandingPage/LandingPage.js";
import Form from "./components/Form/Form.js";
import PokemonSearched from "./components/PokemonSearched/PokemonSearched.js";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={LandingPage} />
      <Route path="/home" component={Navbar} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/home/form" component={Form} />
      <Route exact path="/home/pokemon" component={PokemonSearched} />
      <Route
        exact
        path="/home/form/pokemoncreated"
        component={PokemonCreated}
      />
      <Route exact path="/home/pokemon/:id" component={PokemonDetail} />
    </BrowserRouter>
  );
}

export default App;
