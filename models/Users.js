module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define("User", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { len: [1, 20] }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { len: [1, 20] }
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { len: [1, 20] }
    },
    pwd: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { min: 6 }
    },
    income: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  });

  User.associate = models => {
    User.hasMany(models.Category, {
      onDelete: "cascade"
    });
  };

  return User;
};
