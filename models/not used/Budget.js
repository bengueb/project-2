module.exports = function(sequelize, DataTypes) {
  const Budget = sequelize.define("Budget", {
    amount: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  });

  Budget.associate = models => {
    Budget.hasOne(models.Category, {
      foreignKey: {
        defaultValue: false
      }
    });
  };

  return Budget;
};
