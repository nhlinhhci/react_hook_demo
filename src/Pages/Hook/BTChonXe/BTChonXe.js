import React, { useState } from "react";

export default function BTChonXe() {
  const [carImage, setCarImage] = useState("img/car/products/black-car.jpg");

  let handleButtonCar = (color) => {
    setCarImage(`img/car/products/${color}-car.jpg`);
  };
  return (
    <div className="container text-center mt-4">
      <h1 className="text-danger ">BÀI TẬP CHỌN XE</h1>
      <div className="row">
        <div className="col-6" style={{ height: 400 }}>
          <img className="w-100" src={carImage} />
        </div>
        <div className="row col-6" style={{ height: 400 }}>
          <div className="col-3">
            <button
              className="btn w-100"
              onClick={() => {
                handleButtonCar("black");
              }}
            >
              <img
                className="w-100"
                src="img/car/icons/icon-black.jpg"
                alt=""
              />
            </button>
          </div>
          <div className="col-3">
            <button
              className="btn w-100"
              onClick={() => {
                handleButtonCar("red");
              }}
            >
              <img className="w-100" src="img/car/icons/icon-red.jpg" alt="" />
            </button>
          </div>
          <div className="col-3">
            <button
              className="btn w-100"
              onClick={() => {
                handleButtonCar("silver");
              }}
            >
              <img
                className="w-100"
                src="img/car/icons/icon-silver.jpg"
                alt=""
              />
            </button>
          </div>
          <div className="col-3">
            <button
              className="btn w-100"
              onClick={() => {
                handleButtonCar("steel");
              }}
            >
              <img
                className="w-100"
                src="img/car/icons/icon-steel.jpg"
                alt=""
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
