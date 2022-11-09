import React from "react";
import { useNavigate } from "react-router-dom";
// import shape from 'images/shape.png'

const Frame8 = (props) => {

  const frameNavigate = () => {
    // navigate("/frame6");

  };
  const orderbooking = () => {
    props.setCurrentPage(props.currentPage + 1)

  };


  const frame8_data = [
    { id: 1, image: "images/shampoo.png", heading: "Shampoo", price: 1234 },
    {
      id: 2,
      image: "images/purpleShampoo.png",
      heading: "Purple Shampoo",
      price: 1234,
    },

    { id: 3, image: "images/shampoo.png", heading: "Conditinor", price: 1234 },

    { id: 4, image: "images/shampoo.png", heading: "Shampoo", price: 1234 },

    {
      id: 5,
      image: "images/purpleShampoo.png",
      heading: "Purple Shampoo",
      price: 1234,
    },

    { id: 6, image: "images/shampoo.png", heading: "Conditinor", price: 1234 },
  ];

  return (
    <div>
    

<div className="row">
  <div className="col-sm-2"></div>
  <div className="col-sm-8">

  <div className="row shadow-sm p-3 mb-5 rounded frame_8_main_div">
        <div className="col-sm-2"></div>
        <div className="col-sm-8 text-center ">
          <img src={`images/shape.png`} alt="logo" className="frame8img" />
          <h2 className="mt-3">this is hair care web application</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            consectetur labore quae provident dolor beatae? Facere explicabo
            tempora iure rem?
          </p>
        </div>
        <div className="row">
        <div className="col-sm-1"></div>
        <div className="col-sm-10">
          <div className="frame1Map ">
            {frame8_data.map((data) => {
              const { id, image, heading, price } = data;
              return (
                <div className="frame7Mapinside col-sm-4 text-center ">
                  <div>
                    <img
                      src={image}
                      class="img-fluid rounded-start float-end shadow-sm p-3  rounded frame8_images"
                      alt="..."
                    />
                  </div>
                  <div className="">
                    {" "}
                    <button className="btn btn-outline-success" id="frame8_btn" onClick={orderbooking}>
                      {heading}${price}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="row">
            <div className="col-sm-4"></div>
            <div className="col-sm-4 text-center">
              <div>
                <button
                  className="btn btn-outline-success text-center mt-5"
                  id="frame8_btn_footer"
                >
                  $1234
                </button>
              </div>
            </div>
          </div>

          <div className="col-sm-4"></div>
        </div>

        <div className="col-sm-1"></div>
        </div>

        <div className="col-sm-2"></div>
      </div>

  </div>

  <div className="col-sm-2"></div>

</div>



     
    </div>
  );
};

export default Frame8;
