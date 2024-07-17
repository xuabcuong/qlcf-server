const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('importvoucherdetails', {
    ImportVoucherDetailID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ImportVoucherID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'importvouchers',
        key: 'ImportVoucherID'
      }
    },
    IngredientID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ingredients',
        key: 'IngredientID'
      }
    },
    Quantity: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Price: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'importvoucherdetails',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ImportVoucherDetailID" },
        ]
      },
      {
        name: "ImportVoucherID",
        using: "BTREE",
        fields: [
          { name: "ImportVoucherID" },
        ]
      },
      {
        name: "IngredientID",
        using: "BTREE",
        fields: [
          { name: "IngredientID" },
        ]
      },
    ]
  });
};
