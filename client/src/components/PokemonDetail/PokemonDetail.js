import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getPokemonDetail } from "../../actions/actions";
import "./PokemonDetail.css";

export default function PokemonDetail() {
  const dispatch = useDispatch();
  const pokemonDetail = useSelector((state) => state.pokemonDetail);

  useSelector((state) => state.types);

  const { id } = useParams();

  useEffect(() => {
    dispatch(getPokemonDetail(id));
  }, [dispatch, id]);

  if (pokemonDetail.nombre) {
    const tipos = pokemonDetail.types.map((e) => e);
    var tiposPoke = tipos.map((e) => e.charAt(0).toUpperCase() + e.slice(1));
  }

  if (pokemonDetail.nombre) {
    return (
      <div className="poke_Detail">
        <div className="detalles">
          <p className="poke_Id">
            ID: <span className="poke_Id_nro">{pokemonDetail.id}</span>
          </p>
          <img
            className="poke_img"
            src={pokemonDetail.img}
            alt={pokemonDetail.nombre}
          ></img>
          <div class="container_stats">
            <p className="poke_nombre">{pokemonDetail.nombre.toUpperCase()}</p>
            <div className="poke_estadisticas">
              <p>Vida: {pokemonDetail.estadistica.vida}</p>
              <p>Fuerza: {pokemonDetail.estadistica.fuerza}</p>
              <p>Defensa: {pokemonDetail.estadistica.defensa}</p>
              <p>Velocidad: {pokemonDetail.estadistica.velocidad}</p>
              <p>Peso: {pokemonDetail.peso} kg</p>
              <p>Altura: {pokemonDetail.altura} m</p>
              <div className="tipos">
                Tipos: <span className="tipos_nombre">{tiposPoke}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <h1>Cargando</h1>;
  }
}
