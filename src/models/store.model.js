const storeModel = (sequelize, DataTypes) => {
  const Store = sequelize.define("store", {
    id_store: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name_store: {
      type: DataTypes.STRING(250),
      allowNull: false,
    },
    address_store: {
      type: DataTypes.STRING(250),
      allowNull: false,
    },
  });

  // Define la relación de uno a muchos entre Store y User
  //Store.hasMany(sequelize.models.User, { foreignKey: { name: "id_store", allowNull: false }, sourceKey: "id_users" });

  // Define la relación de uno a muchos entre Store y ProductStore
  //Store.hasMany(sequelize.models.ProductStore, { foreignKey: { name: "id_products_stores", allowNull: false } });

  return Store;
};

module.exports = storeModel;