module.exports = function(sequelize, DataTypes) {
    var Message = sequelize.define("Message", {
      music: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      occasion: {
        type: DataTypes.TEXT,
      },
      message: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1,30]
      }
    });
    return Message;
  };
  