const CommunityService = require("../../services/communities/CommunitiesService");

const communityService = new CommunityService();

class CommunityController {
  static async getAllCommunities(req, res) {
    try {
      const communityList = await communityService.findCommunities();
      return res.status(200).json(communityList);
    } catch (error) {
      console.error(error);
    }
  }

  static async getCommunityById(req, res) {
    try {
      const { id } = req.params;
      const community = await communityService.findCommunitiesById(id);
      res.status(200).json(community);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  static async registerCommunity(req, res) {
    const { nome, descricao } = req.body;

    try {
      const user = await communityService.register({ nome, descricao });

      res.status(201).send(user);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  static async editCommunity(req, res) {
    const { id } = req.params;
    const { nome, descricao } = req.body;

    try {
      const user = await communityService.edit({ id, nome, descricao });

      res.status(200).json(user);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  static async deleteCommunity(req, res) {
    const { id } = req.params;
    try {
      await communityService.delete(id);
      res.status(200).send({ message: "Comunidade deletada com sucesso!" });
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }
}

module.exports = CommunityController;
