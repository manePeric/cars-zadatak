import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import SingleCar from "../components/SingleCar";
import carService from "../services/CarService";
function AppCars() {
  const [cars, setCars] = useState([]);
  const history = useHistory();

  const handleDelete = async (carId) => {
    const response = prompt(
      "Are you sure you want to delte this car ?\n Enter 'Yes' if you are"
    );

    if (response !== "Yes") {
      return;
    }

    const data = await carService.delete(carId);

    if (data.count > 0) {
      setCars(cars.filter(({ id }) => id !== carId));
    }
  };

  const handleEdit = (id) => {
    history.push(`edit/${id}`);
  };

  useEffect(() => {
    const getCars = async () => {
      const data = await carService.getAll();
      setCars(data);
    };
    getCars();
  }, []);

  return (
    <div>
      <h3>Cars</h3>
      <ul>
        {cars.map((car) => (
          <SingleCar
            key={car.id}
            id={car.id}
            brand={car.brand}
            model={car.model}
            year={car.year}
            maxSpeed={car.maxSpeed}
            isAutomatic={car.isAutomatic}
            engine={car.engine}
            numberOfDoors={car.numberOfDoors}
            editCallback={handleEdit}
            deleteCallback={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
}

export default AppCars;
