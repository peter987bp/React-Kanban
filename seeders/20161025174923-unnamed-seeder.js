'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Cards', [{
      title: 'Where the booze at?',
      piority_selection : 'yes',
      status: 'completed',
      created_by: 'BB',
      assign_to: 'Tessa',
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      title: 'Slay the dragons',
      piority_selection : 'no',
      status: 'not quite done',
      created_by: 'Bryan',
      assign_to: 'Tessa',
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      title: 'Camp/Disc Golf',
      piority_selection : 'yes',
      status: 'still dreamin',
      created_by: 'Peterson',
      assign_to: 'Tschantre',
      createdAt : new Date(),
      updatedAt : new Date()
    }

    ], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
