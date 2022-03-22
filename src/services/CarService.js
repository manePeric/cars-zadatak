import axios from "axios";

class CarService {
  constructor() {
    this.cars = axios.create({
      baseURL: "http://localhost:3000/api",
    });
  }

  async getAll() {
    try {
      const { data } = await this.cars.get("cars");
      return data;
    } catch (error) {
      console.log(error);
    }
    return [];
  }

  async add(newCar) {
    try {
      const { data } = await this.cars.post("cars", newCar);
      return data;
    } catch (error) {
      console.log(error);
    }

    return null;
  }
}

export default new CarService();
