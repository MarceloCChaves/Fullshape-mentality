const UserService = require("../../services/user/UserService");

const userService = new UserService();

class UserController {
  static async getAllUsers(req, res) {
    try {
      const usersList = await userService.findUsers();
      return res.status(200).json(usersList);
    } catch (error) {
      console.error(error);
    }
  }

  static async getUserById(req, res) {
    try {
      const { id } = req.params;
      const user = await userService.findUserById(id);
      res.status(200).json(user);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  static async registerUser(req, res) {
    const { name, email, password } = req.body;

    try {
      const user = await userService.register({ name, email, password });

      res.status(201).send(user);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  static async editUser(req, res) {
    const { id } = req.params;
    const { name, email } = req.body;

    try {
      const user = await userService.edit({ id, name, email });

      res.status(200).json(user);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  static async deleteUser(req, res) {
    const { id } = req.params;
    try {
      await userService.delete(id);
      res.status(200).send({ message: "Usuario deletado com sucesso!" });
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }
}

module.exports = UserController;
