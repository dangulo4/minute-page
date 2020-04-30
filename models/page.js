module.exports = function (sequelize, DataTypes) {
  var Page = sequelize.define('Page', {
    name: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [3],
      },
    },
    header: {
      type: DataTypes.STRING,
      allowNull: true,
      len: [3],
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
      len: [1],
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true,
      len: [3],
    },
    quote: {
      type: DataTypes.STRING,
      allowNull: true,
      len: [1],
    },
    pointOne: {
      type: DataTypes.STRING,
      allowNull: true,
      len: [15],
    },
    pointTwo: {
      type: DataTypes.STRING,
      allowNull: true,
      len: [15],
    },
    pointThree: {
      type: DataTypes.STRING,
      allowNull: true,
      len: [15],
    },
    pointFour: {
      type: DataTypes.STRING,
      allowNull: true,
      len: [15],
    },
    pointFive: {
      type: DataTypes.STRING,
      allowNull: true,
      len: [15],
    },
    logo: {
      type: DataTypes.BLOB,
      allowNull: true,
    },
    file: {
      type: DataTypes.BLOB,
      allowNull: true,
    },
    formDesc: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  Page.associate = function (models) {
    // We're saying that a Page should belong to a User
    // A Page can't be created without an User due to the foreign key constraint
    Page.belongsTo(models.User, {
      foreignKey: {
        allowNull: true,
      },
    });
  };

  return Page;
};
