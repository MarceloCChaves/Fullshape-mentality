'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Treino, {
        foreignKey: 'id',
        onDelete: 'CASCADE'
      });
      User.hasMany(models.Comunidade, {
        foreignKey: 'id',
        onDelete: 'CASCADE'
      })
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
    tableName: 'user',
    defaultScope: {
      attributes: {
        exclude: ['password']
      }
    }
  });
  return User;
};