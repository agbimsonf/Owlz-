module.exports = function(sequelize, DataTypes) {
    var Promoter = sequelize.define("Promoter", {
      first_name: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [1,30]
        }
      },
      last_name: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1,30]
      },
      handle: {
        type: DataTypes.TEXT,
        len: [1,50]
      },
      descriptions: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1,255]
      },
      city: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1,50]
      },
      languages: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1,30]
      },
      phone_number: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1,30]
      },
      email: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1,50]
      },
      instagram: {
        type: DataTypes.TEXT,
        len: [1,50]
      },
    });
    Promoter.associate = function(models) {
        // Associating Promoter with Message
        // When an Promoter is deleted, also delete any associated Message
        Promoter.hasMany(models.Search, {
          onDelete: "cascade",
        });
      };
    return Promoter;
  };
  