module.exports = function (sequelize, DataTypes) {
  var Page = sequelize.define('Page', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [30],
      },
    },
    header: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [30],
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [100],
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [30],
    },
    quote: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [10],
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
  });

  Page.associate = function (models) {
    // We're saying that a Page should belong to a User
    // A Page can't be created without an User due to the foreign key constraint
    Page.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Page;
};
