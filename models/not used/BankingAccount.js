module.exports = function (sequelize, DataTypes) {
  const BankingAccount = sequelize.define("BankingAccount", {
    accountNumber: {
      type: DataTypes.BIGINT,
      validate: { len: [10, 10] },
      primaryKey: true
    },
    fundsAvailable: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  });

  BankingAccount.associate = models => {
    BankingAccount.belongsTo(models.User, {
      foreignKey: {
        defaultValue: null
      }
    });
  };

  BankingAccount.associate = models => {
    BankingAccount.hasMany(models.Transaction, {
      onDelete: "cascade"
    });
  };

  return BankingAccount;
};
