'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class powerModel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  powerModel.init({
    district: DataTypes.STRING,
    metreNo: DataTypes.STRING,
    address: DataTypes.STRING,
    monthlyMetreCount: DataTypes.INTEGER,
    chargePerCount: DataTypes.INTEGER,
    VAT: DataTypes.DECIMAL,
    monthlyDue: DataTypes.DECIMAL,
    amountPaid: DataTypes.DOUBLE,
    balance: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'powerModel',
  });
  return powerModel;
};