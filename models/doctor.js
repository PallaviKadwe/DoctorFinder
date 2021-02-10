'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Doctor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Doctor.belongsTo(models.Speciality, { foreignKey: "specId" });
      Doctor.belongsToMany(models.Patient, {
        through: "DoctorPatient",
        foreignKey: "doctorId",
        otherKey: "patientId",
      });
    }
  };
  Doctor.init({
    fName: DataTypes.STRING,
    lName: DataTypes.STRING,
    addr1: DataTypes.STRING,
    addr2: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    specId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Doctor',
  });
  return Doctor;
};