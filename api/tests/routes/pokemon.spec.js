/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require("chai");
const session = require("supertest-session");
const app = require("../../src/app.js");
const { Pokemon, conn } = require("../../src/db.js");

const agent = session(app);
const pokemon = {
  name: "Pikachu",
};

// describe('Pokemon routes', () => {
//   before(() => conn.authenticate()
//   .catch((err) => {
//     console.error('Unable to connect to the database:', err);
//   }));
//   beforeEach(() => Pokemon.sync({ force: true })
//     .then(() => Pokemon.create(pokemon)));
//   describe('GET /pokemons', () => {
//     it('should get 200', () =>
//       agent.get('/pokemons').expect(200)
//     );
//   });
// });
describe("GET /pokemons/:id", () => {
  it("Debe responder con 200", () => agent.get("/pokemons/1").expect(200));
  it("Debe responder trayendo 1 Pokemon", () =>
    agent.get("/pokemons/1").then((res) => {
      expect(res.body.nombre).to.be.equal("bulbasaur");
    }));

  describe("GET /pokemons/", () => {
    it("Debe responder con 200", () => agent.get("/pokemons").expect(200));
    it("Debe haber 40 Pokemones", () =>
      agent.get("/pokemons/").then((res) => {
        expect(res.body).to.have.lengthOf(40);
      }));
  });
});
