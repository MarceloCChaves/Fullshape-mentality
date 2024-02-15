const AuthService = require("../services/AuthService");

const authService = new AuthService();

class AuthController {
  static async loginUser(req, res){
    const { email, password, name } =  req.body;

    try {
      const login = await authService.login({email, password, name});

      res.status(200).send(login);
    } catch (error) {
      res.status(401).send({ message: error.message });
    }
  }

  static async registerUser(req, res){
    const { email, password, name } = req.body;

    try {
      const register = await authService.register({email, password, name});

      res.status(200).send(register);
    } catch (error) {
      res.status(401).send({ message: error.message });
    }
  }
}

module.exports = AuthController;