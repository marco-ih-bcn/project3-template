const axios = require("axios");
class Service {
  constructor(baseURL) { //baseUrl could be overwritten in the route that uses the API
    this.baseURL = baseURL
    this.service = axios.create(
      {
        baseURL: process.env.SERVICE_URL || this.baseURL
      }
    )
  }
  // CHANGE THE PATHS ACCORIDNG TO API DOCUEMNTATION
  getAll = () => this.service.get("/")
  getOne = (id)=> this.service.get(`/${id}`)
  createOne = (newEntityValues)=>this.service.post("/", newEntityValues)
  deleteOne = (id)=> this.service.delete(`/${id}`)
  updateOne = (id)=> this.service.put(`/${id}`)
  // etc...
}

module.exports = new Service;


