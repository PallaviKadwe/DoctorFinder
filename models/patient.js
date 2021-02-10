'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Patient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Patient.belongsToMany(models.Doctor, {
        through: "DoctorPatient",
        foreignKey: "patientId",
        otherKey: "doctorId",
      });
    }
  };
  Patient.init({
    fName: DataTypes.STRING,
    lName: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    addr1: DataTypes.STRING,
    addr2: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Patient',
  });
  return Patient;
};