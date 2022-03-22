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
  edit 
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
      <button onClick={() => edit(id)}>Edit</button>
    </div>
  );
}

export default SingleCar;
