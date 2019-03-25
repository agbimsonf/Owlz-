module.exports = function(sequelize, DataTypes) {
    var Search = sequelize.define("Search", {
      city: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1,30]
      },
      start_date: {
        type: DataTypes.DATE,
        allowNull: false,
        len: [1,30]
      },
      end_date: {
        type: DataTypes.DATE,
        allowNull: false,
        len: [1,30]
      },
      guests: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      interests: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [1,30]
      },
    });
    return Search;
  };
  