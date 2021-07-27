const { DataTypes } = require("sequelize");

// Exportamos una funcion que define el modelo

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("pokemon", {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      unique: true,
    },

    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imagen: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    vida: {
      type: DataTypes.STRING,
    },
    fuerza: {
      type: DataTypes.STRING,
    },
    defensa: {
      type: DataTypes.STRING,
    },
    velocidad: {
      type: DataTypes.STRING,
    },
    altura: {
      type: DataTypes.STRING,
    },
    peso: {
      type: DataTypes.STRING,
    },
  });
};
