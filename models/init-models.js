var DataTypes = require("sequelize").DataTypes;
var _accounts = require("./accounts");
var _creationdetails = require("./creationdetails");
var _customers = require("./customers");
var _dishes = require("./dishes");
var _employees = require("./employees");
var _importvoucherdetails = require("./importvoucherdetails");
var _importvouchers = require("./importvouchers");
var _ingredients = require("./ingredients");
var _invoices = require("./invoices");
var _orders = require("./orders");
var _permissions = require("./permissions");
var _recipes = require("./recipes");

function initModels(sequelize) {
  var accounts = _accounts(sequelize, DataTypes);
  var creationdetails = _creationdetails(sequelize, DataTypes);
  var customers = _customers(sequelize, DataTypes);
  var dishes = _dishes(sequelize, DataTypes);
  var employees = _employees(sequelize, DataTypes);
  var importvoucherdetails = _importvoucherdetails(sequelize, DataTypes);
  var importvouchers = _importvouchers(sequelize, DataTypes);
  var ingredients = _ingredients(sequelize, DataTypes);
  var invoices = _invoices(sequelize, DataTypes);
  var orders = _orders(sequelize, DataTypes);
  var permissions = _permissions(sequelize, DataTypes);
  var recipes = _recipes(sequelize, DataTypes);

  employees.belongsTo(accounts, { as: "Account", foreignKey: "AccountID"});
  accounts.hasMany(employees, { as: "employees", foreignKey: "AccountID"});
  dishes.belongsTo(creationdetails, { as: "CreationDetail", foreignKey: "CreationDetailID"});
  creationdetails.hasMany(dishes, { as: "dishes", foreignKey: "CreationDetailID"});
  orders.belongsTo(customers, { as: "Customer", foreignKey: "CustomerID"});
  customers.hasMany(orders, { as: "orders", foreignKey: "CustomerID"});
  creationdetails.belongsTo(dishes, { as: "Dish", foreignKey: "DishID"});
  dishes.hasMany(creationdetails, { as: "creationdetails", foreignKey: "DishID"});
  recipes.belongsTo(dishes, { as: "Dish", foreignKey: "DishID"});
  dishes.hasMany(recipes, { as: "recipes", foreignKey: "DishID"});
  creationdetails.belongsTo(employees, { as: "Employee", foreignKey: "EmployeeID"});
  employees.hasMany(creationdetails, { as: "creationdetails", foreignKey: "EmployeeID"});
  orders.belongsTo(employees, { as: "Employee", foreignKey: "EmployeeID"});
  employees.hasMany(orders, { as: "orders", foreignKey: "EmployeeID"});
  importvoucherdetails.belongsTo(importvouchers, { as: "ImportVoucher", foreignKey: "ImportVoucherID"});
  importvouchers.hasMany(importvoucherdetails, { as: "importvoucherdetails", foreignKey: "ImportVoucherID"});
  importvoucherdetails.belongsTo(ingredients, { as: "Ingredient", foreignKey: "IngredientID"});
  ingredients.hasMany(importvoucherdetails, { as: "importvoucherdetails", foreignKey: "IngredientID"});
  recipes.belongsTo(ingredients, { as: "Ingredient", foreignKey: "IngredientID"});
  ingredients.hasMany(recipes, { as: "recipes", foreignKey: "IngredientID"});
  invoices.belongsTo(orders, { as: "Order", foreignKey: "OrderID"});
  orders.hasMany(invoices, { as: "invoices", foreignKey: "OrderID"});
  accounts.belongsTo(permissions, { as: "Permission", foreignKey: "PermissionID"});
  permissions.hasMany(accounts, { as: "accounts", foreignKey: "PermissionID"});

  return {
    accounts,
    creationdetails,
    customers,
    dishes,
    employees,
    importvoucherdetails,
    importvouchers,
    ingredients,
    invoices,
    orders,
    permissions,
    recipes,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
