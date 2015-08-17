module.exports = function(sequelize, Datatypes){
  var Pet = sequelize.define('pet', {
    id: {
      type: Datatypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: Datatypes.STRING,
      allowNull: false
    },
    species: {
      type: Datatypes.STRING,
      allowNull: false
    },
    breed: {
      type: Datatypes.STRING,
      allowNull: true
    }
  }, {
    classMethods: {
      associate: function(models){
        Pet.belongsTo(models.Person, { foreignKey: {allowNull: true} });
      }
    }
  });

  return Pet;
};
