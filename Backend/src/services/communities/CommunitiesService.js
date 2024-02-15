const database = require("../../models");

class CommunityService {
  async findCommunities() {
    try {
      const communities = await database.Comunidade.findAll();
      return communities;
    } catch (error) {
      throw new Error(error);
    }
  }

  async findCommunitiesById(id) {
    const community = await database.Comunidade.findOne({
      where: {
        id: id,
      },
    });
    if (!community) {
      throw new Error("Comunidade informada não encontrada");
    }
    return community;
  }

  async register(dto) {
    try {
      const community = await database.Comunidade.create({
        nome: dto.nome,
        descricao: dto.descricao,
      });

      return community;
    } catch (error) {
      throw new Error(error);
    }
  }

  async edit(dto) {
    const community = await database.Comunidade.findOne({
      where: {
        id: dto.id,
      },
    });

    if (!community) {
      throw new Error("comunidade informada não cadastrada!");
    }

    try {
      community.nome = dto.nome,
      community.descricao = dto.descricao;

      await community.save();

      return await community.reload();
    } catch (error) {
      console.error("Message error: ", error.message);
      throw error;
    }
  }

  async delete(id) {
    await this.findCommunitiesById(id);
    try {
      await database.Comunidade.destroy({
        where: {
          id: id,
        },
      });
    } catch (error) {
      throw new Error("Erro ao tentar deletar a comunidade!");
    }
  }
}

module.exports = CommunityService;
