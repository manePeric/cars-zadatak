import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import carService from "../services/CarService";
const years = () => {
  const array = [];
  const startYear = 1990;
  const endYear = 2018;

  for (let i = endYear; i >= startYear; i--) {
    array.push(i);
  }
  return array;
};

const engines = ["diesel", "petrol", "electric", "hybrid"];

function AddCar() {
  const { id } = useParams();
  const history = useHistory();

  const [newCar, setNewCar] = useState({
    brand: "",
    model: "",
    year: years()[0],
    maxSpeed: "",
    numberOfDoors: "",
    isAutomatic: false,
    engine: "",
  });

  const handleNewCarSubmit = async (event) => {
    event.preventDefault();
    if (!id) {
      await carService.add(newCar);
    } else {
      await carService.edit(id, newCar);
    }

    history.push("/cars");
  };

  const resetForm = () => {
    setNewCar({
      brand: "",
      model: "",
      year: years()[0],
      maxSpeed: "",
      numberOfDoors: "",
      isAutomatic: false,
      engine: "",
    });
  };

  const previewForm = () => {
    alert(`
      Brand: ${newCar.brand} 
      Model: ${newCar.model} 
      Year: ${newCar.year} 
      Max speed: ${newCar.maxSpeed} 
      Number of doors: ${newCar.numberOfDoors} 
      Is Automatic: ${newCar.isAutomatic ? "Yes" : "No"}
      Engine: ${newCar.engine} 
    `);
  };

  useEffect(() => {
    const getCar = async () => {
      const { id: _, ...restData } = await carService.get(id);

      setNewCar({ ...restData });
    };
    if (id) {
      getCar();
    }
  }, [id]);

  return (
    <div>
      <h1>{id ? "Edit Car" : "Add Car"}</h1>
      <form onSubmit={handleNewCarSubmit}>
        <input
          value={newCar.brand}
          placeholder="Brand"
          required
          minLength={2}
          onChange={({ target }) =>
            setNewCar({ ...newCar, brand: target.value })
          }
        />
        <input
          value={newCar.model}
          placeholder="Model"
          required
          minLength={2}
          onChange={({ target }) =>
            setNewCar({ ...newCar, model: target.value })
          }
        />
        <br></br>
        <select
          style={{ width: 206 }}
          value={newCar.year}
          required
          onChange={({ target }) =>
            setNewCar({ ...newCar, year: Number(target.value) })
          }
        >
          {years().map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <input
          value={newCar.maxSpeed}
          placeholder="Max speed"
          onChange={({ target }) =>
            setNewCar({ ...newCar, maxSpeed: target.value })
          }
        />
        <input
          value={newCar.numberOfDoors}
          placeholder="Number of door"
          required
          onChange={({ target }) =>
            setNewCar({ ...newCar, numberOfDoors: target.value })
          }
        />
        <br></br>
        <span>
          <label>Is car Automatic</label>
          <input
            type="checkbox"
            checked={newCar.isAutomatic}
            onChange={({ target }) => {
              setNewCar({ ...newCar, isAutomatic: target.checked });
            }}
          />
        </span>
        <div style={{ flexDirection: "column", display: "flex" }}>
          <h5>Pick engine:</h5>
          {engines.map((engine, index) => (
            <span key={index}>
              <input
                type="radio"
                name="engine"
                required
                checked={engine === newCar.engine}
                value={engine}
                onChange={() => setNewCar({ ...newCar, engine })}
              />
              {engine.toLowerCase()}
            </span>
          ))}
        </div>
        <button>{id ? "Edit" : "Add new"}</button>
        <br></br>
        <button type="button" onClick={resetForm}>
          Reset Form
        </button>
        <br></br>
        <button type="button" onClick={previewForm}>
          Preview Form
        </button>
      </form>
    </div>
  );
}

export default AddCar;
