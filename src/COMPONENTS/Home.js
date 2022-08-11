import React, { useContext } from "react";
import Navbar from "./Navbar";
import data from "../Data.js";
import "../CSS/Home.css";
import Cart from "./Cart";
import { UserContext } from "../App";

const Home = () => {
  const user = useContext(UserContext);

  const addToCart = (event) => {
    let btn_id = event.target.id;
    let obj = {};
    let flag = true;

    user.arr.map((item) => {
      if (btn_id == item.Id) {
        flag = false;
        item.quant++;

        item.Price = data[btn_id].price * item.quant;
      }
      user.setArr([...user.arr]);
    });

    if (flag) {
      data.forEach((item) => {
        if (btn_id == item.id) {
          obj.Title = item.title;
          obj.Price = item.price;
          obj.Rating = item.rating;
          obj.Img = item.images;
          obj.quant = 1;
          obj.Id = item.id;
        }
      });
      user.setArr([...user.arr, obj]);
    }

    // <===========other method=============>

    // if (data[btn_id])) {

    //   obj.Title = data[btn_id].title;
    //   obj.Price = data[btn_id].price;
    //   obj.Img = data[btn_id].images;
    //   obj.Rating = data[btn_id].rating;
    //   obj.Id = data[btn_id].id;

    //   setArr([...arr, obj]);

    // }
  };

  const increament = () => {};

  const decreament = () => {};

  return (
    <>
      <div>
        <Navbar />
        <div style={{ marginTop: "100px" }}>
          <marquee behavior="scroll" direction="left">
            <h1 style={{ color: "red" }}>
              50% off on all product hurry Up !!!!
            </h1>
          </marquee>
        </div>

        {/* <==============ADD TO CART PRODUCT DISPLAY ===========> */}

        <div className="card-container">
          {data.map((val) => {
            return (
              <>
                <div className="child-container">
                  <div>
                    <img
                      src={val.images}
                      alt=""
                      width="100%"
                      height="510px"
                      id="img"
                    />
                  </div>

                  <h1
                    style={{ textAlign: "center", fontSize: "22px" }}
                    id="title"
                  >
                    {val.title}
                  </h1>

                  <div
                    style={{ display: "flex", justifyContent: "space-around" }}
                  >
                    <h2 style={{ fontSize: "22px" }} id="price">
                      {`Price : ${val.price} ₹`}
                    </h2>
                    <h2 style={{ fontSize: "22px" }} id="rating">
                      {`Rating : ${val.rating} !!`}
                    </h2>
                  </div>

                  <div style={{ textAlign: "center" }}>
                    <button
                      id={val.id}
                      className="add_cart"
                      onClick={addToCart}
                    >
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
