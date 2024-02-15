const WorkoutService = require("../services/TreinoService");

const workoutService = new WorkoutService();

class WorkoutController {
  static async getAllWorkouts(req, res) {
    try {
      const workoutList = await workoutService.findWorkouts();
      return res.status(200).json(workoutList);
    } catch (error) {
      console.error(error);
    }
  }

  static async getUserById(req, res) {
    try {
      const { id } = req.params;
      const workout = await workoutService.findWorkoutById(id);
      res.status(200).json(workout);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  static async registerWorkout(req, res) {
    const { titulo, descricao, data, tempo } = req.body;

    try {
      const workout = await workoutService.register({ titulo, descricao, data, tempo });

      res.status(201).send(workout);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  static async editWorkout(req, res) {
    const { id } = req.params;
    const { titulo, descricao, data, tempo } = req.body;

    try {
      const workout = await workoutService.edit({ titulo, descricao, data, tempo });

      res.status(200).json(workout);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  static async deleteWorkout(req, res) {
    const { id } = req.params;
    try {
      await workoutService.delete(id);
      res.status(200).send({ message: "Workout deletado com sucesso!" });
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }
}

module.exports = WorkoutController;
