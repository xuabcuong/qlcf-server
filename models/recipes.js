const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('recipes', {
    RecipeID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    DishID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'dishes',
        key: 'DishID'
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
    }
  }, {
    sequelize,
    tableName: 'recipes',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "RecipeID" },
        ]
      },
      {
        name: "DishID",
        using: "BTREE",
        fields: [
          { name: "DishID" },
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
