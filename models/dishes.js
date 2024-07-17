const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dishes', {
    DishID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    DishName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CreationDetailID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'creationdetails',
        key: 'CreationDetailID'
      }
    }
  }, {
    sequelize,
    tableName: 'dishes',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "DishID" },
        ]
      },
      {
        name: "fk_CreationDetailID",
        using: "BTREE",
        fields: [
          { name: "CreationDetailID" },
        ]
      },
    ]
  });
};
