import React from "react";

function SingleCar({
  id,
  brand,
  model,
  year,
  maxSpeed,
  isAutomatic,
  engine,
  numberOfDoors,
  editCallback,
  deleteCallback,
}) {
  return (
    <div
      style={{
        border: "1px solid black",
        marginBottom: 10,
        padding: 5,
        width: 200,
        marginLeft: 5,
      }}
    >
      <span>Brand: {brand}</span>
      <span>Model: {model}</span>
      <span>Year: {year}</span>
      <span>Max Speed: {maxSpeed}</span>
      <span>This Car {isAutomatic ? "is" : "is not"} Automatic </span>
      <span>Engine: {engine}</span>
      <span>Number Of Doors {numberOfDoors}</span>
      <button onClick={() => editCallback(id)}>Edit</button>
      <button onClick={() => deleteCallback(id)}>Delete</button>
    </div>
  );
}

export default SingleCar;
