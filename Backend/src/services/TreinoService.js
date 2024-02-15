const database = require("../models");

class WorkoutService {
  async findWorkouts() {
    try {
      const users = await database.Treino.findAll();
      return users;
    } catch (error) {
      throw new Error(error);
    }
  }

  async findWorkoutById(id) {
    const user = await database.Treino.findOne({
      where: {
        id: id,
      },
    });
    if (!user) {
      throw new Error("Treino informado não encontrado");
    }
    return user;
  }

  async register(dto) {
    try {
      const workout = await database.Treino.create({
        titulo: dto.titulo,
        descricao: dto.descricao,
        data: dto.data,
        tempo: dto.tempo,
      });

      return workout;
    } catch (error) {
      throw new Error(error);
    }
  }

  async edit(dto) {
    const workout = await database.Treino.findOne({
      where: {
        id: dto.id,
      },
    });

    if (!workout) {
      throw new Error("workout informado não cadastrada!");
    }

    try {
      workout.titulo = dto.titulo,
      workout.descricao = dto.descricao;
      workout.data = dto.data;
      workout.tempo = dto.tempo;

      await workout.save();

      return await workout.reload();
    } catch (error) {
      console.error("Message error: ", error.message);
      throw error;
    }
  }

  async delete(id) {
    await this.findUserById(id);
    try {
      await database.Treino.destroy({
        where: {
          id: id,
        },
      });
    } catch (error) {
      throw new Error("Erro ao tentar deletar o treino!");
    }
  }
}

module.exports = WorkoutService;
