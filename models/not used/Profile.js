module.exports = function(sequelize, DataTypes) {
  const Profile = sequelize.define("Profile", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { len: [1, 20] }
    },
    pwd: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { min: 6 }
    }
  });

  Profile.associate = models => {
    Profile.hasOne(models.User, {
      onDelete: "cascade"
    });
  };

  return Profile;
};
