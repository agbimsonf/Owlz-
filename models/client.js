module.exports = function(sequelize, DataTypes) {
    var Client = sequelize.define("Client", {
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1,30]
        }
      },
      last_name: {
        type: DataTypes.TEXT,
        allowNull: false,
          validate: {
          len: [1,30]
        }
      },
      phone_number: {
        type: DataTypes.TEXT,
        allowNull: false,
          validate: {
          len: [1,20]
        }
      },
      email: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [1,50]
        }
      }
    });

    Client.associate = function(models) {
        // Associating Client with Search
        // When an Client is deleted, also delete any associated Searchs
        Client.hasMany(models.Search, {
          onDelete: "cascade"
        }); 
      };
    
    return Client;
  };
  