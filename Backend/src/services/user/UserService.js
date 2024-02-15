const database = require("../../models");
const { hash } = require("bcryptjs");
const uuid = require("uuid");

class UserService {
  async findUsers() {
    try {
      const users = await database.user.findAll({
        include: [{ model: database.Treino }, { model: database.Comunidade }],
      });
      return users;
    } catch (error) {
      throw new Error("Erro ao buscar usuários");
    }
  }

  async findUserById(id) {
    try {
      const user = await database.user.findOne({
        where: { id },
        include: [{ model: database.Treino }, { model: database.Comunidade }],
      });
  
      if (!user) {
        throw new Error("Usuario informado não cadastrado!");
      }
  
      return user;
    } catch (error) {
      throw new Error("Erro ao buscar usuário com treinos: " + error.message);
    }
  }

  async register(dto) {
    const user = await database.user.findOne({
      where: {
        email: dto.email,
      },
    });
    if (user) {
      throw new Error("Usuário já cadastrado!");
    }

    try {
      const passwordHash = await hash(dto.password, 8);

      const newUser = await database.user.create({
        id: uuid.v4(),
        name: dto.name,
        email: dto.email,
        password: passwordHash,
      });

      return newUser;
    } catch (error) {
      throw new Error("Erro ao cadastrar usuário");
    }
  }

  async edit(dto) {
    const user = await this.findUserById(dto.id);

    try {
      user.name = dto.name;
      user.email = dto.email;

      await user.save();

      return user;
    } catch (error) {
      throw new Error("Erro ao editar usuario!");
    }
  }

  async delete(id) {
    await this.findUserById(id);
    try {
      await database.user.destroy({
        where: {
          id: id,
        },
      });
    } catch (error) {
      throw new Error("Erro ao tentar deletar o usuario!");
    }
  }
}

module.exports = UserService;
