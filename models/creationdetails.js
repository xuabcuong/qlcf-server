const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('creationdetails', {
    CreationDetailID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    EmployeeID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'employees',
        key: 'EmployeeID'
      }
    },
    DishID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'dishes',
        key: 'DishID'
      }
    }
  }, {
    sequelize,
    tableName: 'creationdetails',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "CreationDetailID" },
        ]
      },
      {
        name: "EmployeeID",
        using: "BTREE",
        fields: [
          { name: "EmployeeID" },
        ]
      },
      {
        name: "DishID",
        using: "BTREE",
        fields: [
          { name: "DishID" },
        ]
      },
    ]
  });
};
