module.exports = function(sequelize, DataTypes) {
    const Goal = sequelize.define("Goal", {
        id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
        },
        amount: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        defaultValue: 0
      }
    });
  
    Goal.associate = models => {
      Goal.belongsTo(models.Category, {
        foreignKey: {
          defaultValue: false
        }
      });
    };
  
    return Goal;
  };
  
