import axios from "axios";

class CarService {
  constructor() {
    this.cars = axios.create({
      dbURL: "http://localhost:3000",
    });
  }

  async getAll() {
    try {
      const { data } = await this.cars.get("cars");
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new CarService();
