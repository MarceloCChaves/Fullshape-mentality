'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('treinos', [
      {
        id: 1,
        titulo: "Treino de Corrida",
        descricao: "Treino de corrida leve",
        data: "2024-01-21",
        tempo: 30,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        titulo: "Treino de Musculação",
        descricao: "Treino para fortalecimento muscular",
        data: "2024-01-22",
        tempo: 60,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        titulo: "Treino de Yoga",
        descricao: "Sessão de yoga para relaxamento",
        data: "2024-01-23",
        tempo: 80,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('treinos', null, {});
  }
};
