'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Cards', [{
      title: 'Whitewater Rafting',
      piority_selection : 'yes',
      status: 'Done',
      created_by: 'BB',
      assign_to: 'Tessa',
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      title: 'Slay the dragons',
      piority_selection : 'no',
      status: 'Doing',
      created_by: 'Bryan',
      assign_to: 'Tessa',
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      title: 'Camp/Disc Golf',
      piority_selection : 'yes',
      status: 'Todo',
      created_by: 'Peterson',
      assign_to: 'Tschantre',
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      title: 'Mtn Bike Overnight',
      piority_selection : 'no',
      status: 'Todo',
      created_by: 'Peterson',
      assign_to: 'Tschantre',
      createdAt : new Date(),
      updatedAt : new Date()
    },
     {
      title: 'Play Nokia Disc Golf Course',
      piority_selection : 'no',
      status: 'Todo',
      created_by: 'Peterson',
      assign_to: 'Tschantre',
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      title: 'Visit Montana',
      piority_selection : 'yes',
      status: 'Doing',
      created_by: 'Deejay',
      assign_to: 'Peterson',
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      title: 'Live in a Van',
      piority_selection : 'yes',
      status: 'Done',
      created_by: 'Bryan',
      assign_to: 'Peterson',
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      title: 'Practice Coding',
      piority_selection : 'yes',
      status: 'Doing',
      created_by: 'Bryan',
      assign_to: 'Peterson',
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      title: 'Build a Tiny House',
      piority_selection : 'yes',
      status: 'Done',
      created_by: 'Bryan',
      assign_to: 'Peterson',
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      title: 'Study Programming',
      piority_selection : 'yes',
      status: 'Doing',
      created_by: 'Bryan',
      assign_to: 'Peterson',
      createdAt : new Date(),
      updatedAt : new Date()
    }

    ], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
