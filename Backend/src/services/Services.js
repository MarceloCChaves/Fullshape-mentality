const dataSource = require("../models/");

class Services {
  constructor(model) {
    this.model = model;
  }

  async getAllRecords() {
    return dataSource[this.model].findAll();
  }

  async getRecordById(id) {
    return dataSource[this.model].findByPk(id);
  }

  async createRecord(data) {
    return dataSource[this.model].create(data);
  }

  async updateRecord(updatedData, id) {
    const updatedList = dataSource[this.model].update(
      updatedData,
      {
        where: { id: id },
      }
    );
    if (updatedList[0] === 0) {
      return false;
    }
    return true;
  }

  async deleteRecord(id) {
    return dataSource[this.model].destroy({ where: { id: id } });
  }
}

module.exports = Services;
