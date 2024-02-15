const database = require("../models");
const { compare, hash } = require('bcryptjs');
const { sign } = require('jsonwebtoken');
const jsonSecret = require('../config/jsonSecret');
const uuid = require("uuid");

class AuthService {
  async login(dto){
    const user = await database.user.findOne({
      attributes: ['id', 'email', 'password', 'name'],
      where: {
        email: dto.email
      }
    });

    if(!user) {
      throw new Error("Usuário não cadastrado");
    }

    const matchedPasswords = await compare(dto.password, user.password)

    if(!matchedPasswords){
      throw new Error("Usuário ou senha inválido");
    }

    const accessToken = sign({
      id: user.id,
      email: user.email,
      name: user.name
    }, jsonSecret.secret, {
      expiresIn: 86400
    });

    return { accessToken }

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
      const passwordHash = await hash(dto.password, 10);

      const newUser = await database.user.create({
        id: uuid.v4(),
        name: dto.name,
        email: dto.email,
        password: passwordHash,
      });

      return newUser;
    } catch (error) {
      throw new Error("Erro ao registrar usuário");
    }
  }
}

module.exports = AuthService;