// 'use strict';
// module.exports = (sequelize, DataTypes) => {
//   var Todo = sequelize.define('Todo', {
//     title: DataTypes.STRING

//   }, {
//       classMethods: {
//         associate: function (models) {
//           // associations can be defined here
//         }
//       }
//     });
//   return Todo;
// };
module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define('Todo', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Todo.associate = (models) => {
    Todo.hasMany(models.TodoItem, {
      foreignKey: 'todoId',
      as: 'todoItems',
    });
  };

  return Todo;
};
