import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPokemons } from "../../actions/actions";

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
            <img className="poke_img" src={poke.imagen} alt={poke.nombre}></img>
            <div className="poke_estadisticas">
              <p>Vida: {poke.vida}</p>
              <p>Fuerza: {poke.fuerza}</p>
              <p>Defensa: {poke.defensa}</p>
              <p>Velocidad: {poke.velocidad}</p>
              <p>Peso: {poke.peso}</p>
              <p>Altura: {poke.altura}</p>
              <p className="tipos_Poke">
                Tipos:
                {poke.types.map((e) => e.nombre)}
              </p>
            </div>
          </div>
        </div>
      );
    });
  } else {
    return <h1>No existe el Pokemon buscado</h1>;
  }
}
