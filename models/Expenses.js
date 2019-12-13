module.exports = function (sequelize, DataTypes) {
    const Expense = sequelize.define("Expense", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            //Reevaluate length after html completed.
            validate: { len: [1, 50] }
        },
        amount: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: 0
        },
    });

    Expense.associate = models => {
        Expense.belongsTo(models.Category, {
            foreignKey: {
                defaultValue: null
            }
        });
    };

    return Expense;
};
