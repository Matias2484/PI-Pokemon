const { Pokemon, conn } = require("../../src/db.js");
const { expect } = require("chai");

// describe('Pokemon model', () => {
//   before(() => conn.authenticate()
//     .catch((err) => {
//       console.error('Unable to connect to the database:', err);
//     }));
//   describe('Validators', () => {
//     beforeEach(() => Pokemon.sync({ force: true }));
//     describe('name', () => {
//       it('should throw an error if name is null', (done) => {
//         Pokemon.create({})
//           .then(() => done(new Error('It requires a valid name')))
//           .catch(() => done());
//       });
//       it('should work when its a valid name', () => {
//         Pokemon.create({ name: 'Pikachu' });
//       });
//     });
//   });
// });
describe("Validators", () => {
  beforeEach(() => Pokemon.sync({ force: true }));
  describe("id", () => {
    it("Debe responder con error si el ID no es una Primary Key", (done) => {
      Pokemon.create({})
        .then(() => done(new Error("Debe ser una Primary Key")))
        .catch(() => done());
    });
  });
});
