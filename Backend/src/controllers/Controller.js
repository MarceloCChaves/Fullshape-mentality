class Controller {
  constructor(entity) {
    this.entity = entity;
  }

  async getAll(req, res) {
    try {
      const recordList = await this.entity.getAllRecords();
      return res.status(200).json(recordList);
    } catch (error) {
      console.error(error);
    }
  }

  async getById(req, res) {
    const { id } = req.params;
    try {
      const record = await this.entity.getRecordById(
        Number(id)
      );
      return res.status(200).json(record);
    } catch (erro) {
      console.error(error);
    }
  }

  async create(req, res) {
    const dadosParaCriacao = req.body;
    try {
      const novoRegistroCriado = await this.entity.createRecord(
        dadosParaCriacao
      );
      return res.status(200).json(novoRegistroCriado);
    } catch (erro) {
      console.error(error);
    }
  }

  async update(req, res) {
    const { id } = req.params;
    const dadosAtualizados = req.body;
    try {
      //isUpdated
      const foiAtualizado = await this.entity.updateRecord(
        dadosAtualizados,
        Number(id)
      );
      if (!foiAtualizado) {
        return res
          .status(400)
          .json({ mensagem: "registro não foi atualizado" });
      }
      return res.status(200).json({ mensagem: "Atualizado com sucesso" });
    } catch (erro) {
      console.error(error);
    }
  }

  async delete(req, res) {
    const { id } = req.params;
    try {
      await this.entity.deleteRecord(Number(id));
      return res.status(200).json({ mensagem: `id ${id} deletado` });
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = Controller;
