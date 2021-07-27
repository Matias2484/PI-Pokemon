import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { getPokemonByName } from "../../actions/actions";
import { getPokemons, filterPokemons } from "../../actions/actions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export default function NavBar() {
  const [pokemon, setPokemon] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  // let allPokemons = useSelector((state) => state.allPokemons);
  // let pokemonFilter = useSelector((state) => state.pokemonFilter);
  const [state, setState] = useState([]);

  useEffect(() => {
    dispatch(getPokemons());
    dispatch(filterPokemons());
  }, [dispatch]);

  const handleChange = (e) => {
    setPokemon(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getPokemonByName(pokemon.toLowerCase()));
    history.push(`/home/pokemon`);
  };
  //Filtrado por Tipo
  const typesFilter = (e) => {
    setState({ ...state, [e.target.id]: e.target.value });
    dispatch(filterPokemons(e.target.value));
  };

  return (
    <header className="header">
      <nav className="navBar">
        <ul>
          <Link to={"/home"}>
            <li className="">
              <span>Home</span>
            </li>
          </Link>
          <Link to={"/home/form"}>
            <li>
              <span className="link_crear">Crea tu propio Pokemon</span>
            </li>
          </Link>
          <Link to={"/"}>
            <li className="">
              <span>Inicio</span>
            </li>
          </Link>
          <Link to={"/home/form/pokemonCreated"}>
            <li className="">
              <span>Pokemones Creados</span>
            </li>
          </Link>
        </ul>

        {/* Filtrar por tipo */}
        <div className="select">
          <select id="botonFiltrado" onChange={typesFilter}>
            <option defaultValue>Fitrar por tipo... </option>
            <option className="Normal" value="Normal">
              Normal
            </option>
            <option className="Flying" value="Flying">
              Flying
            </option>
            <option className="Poison" value="Poison">
              Poison
            </option>
            <option className="Ground" value="Ground">
              Ground
            </option>
            <option className="Bug" value="Bug">
              Bug
            </option>
            <option className="Fire" value="Fire">
              Fire
            </option>
            <option className="Water" value="Water">
              Water
            </option>
            <option className="Grass" value="Grass">
              Grass
            </option>
            <option className="Electric" value="Electric">
              Electric
            </option>
            <option className="Fairy" value="Fairy">
              Fairy
            </option>
          </select>
        </div>
        <form>
          <div className="btn_search">
            <input
              type="text"
              autoComplete="on"
              placeholder="Busca por nombre..."
              onChange={handleChange}
            />
            <button onClick={handleSubmit}>Buscar</button>
          </div>
        </form>
      </nav>
    </header>
  );
}
