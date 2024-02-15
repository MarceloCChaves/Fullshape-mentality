'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Treino extends Model {
    static associate(models) {
      Treino.belongsTo(models.user, {
        foreignKey: 'id',
        onDelete: 'CASCADE'
      });
    }
  }
  Treino.init({
    titulo: DataTypes.STRING,
    descricao: DataTypes.STRING,
    data: DataTypes.DATEONLY,
    tempo: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Treino',
  });
  return Treino;
};