import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import SingleCar from "../components/SingleCar";
import carService from "../services/CarService";
function AppCars() {
  const [cars, setCars] = useState([]);
  const history = useHistory()
  
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
            edit={handleEdit}
          />
        ))}
      </ul>
    </div>
  );
}

export default AppCars;
