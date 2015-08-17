module.exports = function(sequelize, Datatypes){
  var Person = sequelize.define('person', {
    id: {
      type: Datatypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    firstName: {
      type: Datatypes.STRING,
      allowNull: false
    },
    lastName: {
      type: Datatypes.STRING,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: function(models){
        Person.hasMany(models.Pet, {onDelete: "cascade"});
      }
    },
  });

  return Person;
};
