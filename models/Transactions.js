module.exports = function (sequelize, DataTypes) {
    const Transaction = sequelize.define("Transaction", {
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

    Transaction.associate = models => {
        Transaction.belongsTo(models.Category, {
            foreignKey: {
                defaultValue: null
            }
        });
    };

    return Transaction;
};
