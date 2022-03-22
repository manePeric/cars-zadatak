import React, { useState } from "react";

const years = () => {
  const array = [];
  const startYear = 1990;
  const endYear = 2018;

  for (let i = endYear; i >= startYear; i--) {
    array.push(<option value={i}>{i}</option>);
  }
  return array;
};

const engines = ["diesel", "petrol", "electric", "hybrid"];

function AddCar() {
  const [newCar, setNewCar] = useState({
    brand: "",
    model: "",
    year: years,
    maxSpeed: "",
    numberOfDoors: "",
    isAutomatic: false,
    engine: "",
  });

  return (
    <div>
      <h1>Add Car</h1>
      <form>
        <input
          value={newCar.brand}
          placeholder="Brand"
          onChange={({ target }) =>
            setNewCar({ ...newCar, brand: target.value })
          }
        />
        <input
          value={newCar.model}
          placeholder="Model"
          onChange={({ target }) =>
            setNewCar({ ...newCar, model: target.value })
          }
        />
        <br></br>
        <select
          style={{ width: 206 }}
          onChange={({ target }) =>
            setNewCar({ ...newCar, year: Number(target.value) })
          }
          value={newCar.year}
        >
          <option value="0">Year</option>
          {years()}
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
        <div style={{ flexDirection: "column" }}>
          <h4>Pick engine:</h4>
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
              {engine.toUpperCase()}
            </span>
          ))}
        </div>
        <button>Add Car</button>
      </form>
    </div>
  );
}

export default AddCar;
