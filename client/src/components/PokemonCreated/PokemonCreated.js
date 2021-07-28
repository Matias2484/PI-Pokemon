import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPokemons } from "../../actions/actions";
import "./PokemonCreated.css";

export default function PokemonCreated() {
  let allPokemons = useSelector((state) => state.allPokemons);

  const [pokemonCreado, setPokemonCreado] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);
  useEffect(() => {
    if (allPokemons.length > 0) {
      setPokemonCreado(allPokemons.filter((e) => e.id));
    }
  }, [allPokemons]);

  if (pokemonCreado.length > 0) {
    return pokemonCreado.map((poke) => {
      return (
        <div className="poke_Detail">
          <div className="detalles">
            <p className="poke_nombre">{poke.nombre}</p>
            <img className="poke_img" src={poke.img} alt={poke.nombre}></img>
            <div className="poke_estadisticas">
              <p>Vida: {poke.vida}</p>
              <p>Fuerza: {poke.fuerza}</p>
              <p>Defensa: {poke.defensa}</p>
              <p>Velocidad: {poke.velocidad}</p>
              <p>Peso: {poke.peso}</p>
              <p>Altura: {poke.altura}</p>
              <p className="tipos_Poke">
                Tipos:
                <span className="nombre_tipos">
                  {poke.types.map(
                    (e) => e.name.charAt(0).toUpperCase() + e.name.slice(1)
                  )}
                </span>
              </p>
            </div>
          </div>
        </div>
      );
    });
  } else {
    return <h1>Cargando</h1>;
  }
}
