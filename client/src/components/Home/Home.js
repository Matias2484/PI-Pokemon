import React from "react";
import { useEffect, useState } from "react";
import { getPokemons, filterPokemons } from "../../actions/actions";
import { useSelector, useDispatch } from "react-redux";
import "./Home.css";
import Pokemon from "../Pokemon/Pokemon";

export default function Home() {
  const dispatch = useDispatch();
  let allPokemons = useSelector((state) => state.allPokemons);
  let pokemonFilter = useSelector((state) => state.pokemonFilter);
  const [state, setState] = useState([]);

  useEffect(() => {
    dispatch(getPokemons());
    dispatch(filterPokemons());
  }, [dispatch]);

  //Filtado por BD
  // let allPokemonsNotBD = allPokemons.filter((e) => !e.id);
  // console.log(allPokemonsNotBD);
  // let allPokemonsBD = allPokemons.filter((e) => e.id);
  // console.log(allPokemonsBD);

  //Paginado de a 12

  const [currentPage, setCurrentPage] = useState(0);
  const pokemonsIniciales = allPokemons.slice(currentPage, currentPage + 12);

  const nextPage = () => {
    setCurrentPage(currentPage + 12);
  };
  const prevPage = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 12);
  };

  //Ordenado

  const selectOptionOrder = (e) => {
    setState({ ...state, [e.target.id]: e.target.value });
  };

  if (state.select === "A-Z") {
    allPokemons.sort((a, b) => {
      if (a.nombre < b.nombre) {
        return -1;
      }
      if (a.nombre > b.nombre) {
        return 1;
      }
      return 0;
    });
  }
  if (state.select === "Z-A") {
    allPokemons.sort((b, a) => {
      if (a.nombre < b.nombre) {
        return -1;
      }
      if (a.nombre > b.nombre) {
        return 1;
      }
      return 0;
    });
  }
  if (state.select === "Fuerza") {
    allPokemons.sort((b, a) => {
      if (a.ataque < b.ataque) {
        return -1;
      }
      if (a.ataque > b.ataque) {
        return 1;
      }
      return 0;
    });
  }
  if (state.select === "Debil") {
    allPokemons.sort((a, b) => {
      if (a.ataque < b.ataque) {
        return -1;
      }
      if (a.ataque > b.ataque) {
        return 1;
      }
      return 0;
    });
  }

  if (pokemonFilter.length > 0)
    return (
      <div className="home">
        <div className="pokemons">
          {pokemonFilter.map((e, index) => (
            <Pokemon
              key={index + 1}
              nombre={e.nombre}
              img={e.img}
              id={index + 1}
              tipos={e.types.map((type) => (
                <div>
                  <p>{type}</p>
                </div>
              ))}
            />
          ))}
        </div>
      </div>
    );

  if (pokemonsIniciales) {
    return (
      <header className="home">
        <div className="contenidoHome">
          <div className="botonesPaginadoOrdenado">
            {/* Ordenar por Nombre y Fuerza */}

            <div className="select">
              <select id="select" onChange={selectOptionOrder}>
                <option defaultValue>Ordenar por... </option>
                <option id="A-Z" value="A-Z">
                  A-Z
                </option>
                <option value="Z-A">Z-A</option>
                <option value="Fuerza">Mas Fuerte</option>
                <option value="Debil">Mas Debil</option>
              </select>
            </div>
            {/* Paginado */}
            {currentPage > 0 ? (
              <button className="botonPrev" onClick={prevPage}>
                Prev Page
              </button>
            ) : null}
            {currentPage < 36 ? (
              <button className="botonNext" onClick={nextPage}>
                Next Page
              </button>
            ) : null}
          </div>

          <div className="pokemons">
            {pokemonsIniciales.map((e, index) => (
              <Pokemon
                key={index + 1}
                nombre={e.nombre}
                img={e.img}
                id={index + 1}
                tipos={
                  e.types === undefined || e.types === [] ? (
                    <h1>Cargando</h1>
                  ) : (
                    e.types.map((type) => (
                      <div>
                        <p>{type}</p>
                      </div>
                    ))
                  )
                }
              />
            ))}
          </div>
        </div>
      </header>
    );
  } else {
    return <h1>Cargando</h1>;
  }
}
