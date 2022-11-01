import React from "react";
// import img1 from '../images/Second Page/coarse 1.svg'
// import img2 from '../images/Second Page/medium 1.svg'
// import img3 from '../images/Second Page/thin 1.svg'
// import logo from "../images/Better-removebg-preview (1) 1/Better-removebg-preview (1) 1.png"
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Frame2 = () => {
  const navigate = useNavigate();

  const frameNavigate = () => {
    navigate("/frame2");
  };

  const frameNavigateBack = () => {
    navigate("/");
  };
  const frame2_data = [
    {
      id: 1,
      image: "images/thin 1.svg",
      heading: "Fine",
      para: "thinner than thread",
    },
    {
      id: 2,
      image: "images/medium 1.svg",
      heading: "Medium",
      para: "as thick as thread",
    },
    {
      id: 3,
      image: "images/coarse 1.svg",
      heading: "Coarse",
      para: "thicker than thread",
    },
  ];

  // const navigate = useNavigate();

  // const changePage = async (id) =>{
  //   navigate(`/`)
  //   }

  return (
    <div>
      <div class="shadow-sm p-3 mb-5  rounded" onClick={frameNavigateBack}>
        <i class="fa-solid fa-arrow-left-long"> back </i>
      </div>
      <div className="row">
        <div className="col-sm-2"></div>
        <div className="col-sm-8">
          {" "}
          <div class="progress">
            <div
              class="progress-bar"
              role="progressbar"
              style={{ width: "29%" }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <h2 className="text-center">What's your hair structure</h2>
          <p className="text-center">
            What does a singal strand of hair feel like?
          </p>
          <h5 className="text-center">
            <a href="">HOW TO ANSWER</a>
          </h5>
        </div>
        <div className="col-sm-2"></div>
      </div>
      <div className="row text-center">
        <div className="col-sm-3"></div>
        <div className="col-sm-6">
          <div className="frame1Map">
            {frame2_data.map((data) => {
              const { id, image, heading, para } = data;
              return (
                <div
                  className="frame1Mapinside col-sm-4"
                  onClick={frameNavigate}
                >
                  <img src={image} alt=""></img>
                  <h3>{heading}</h3>
                  <p>{para}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="col-sm-3"></div>
    </div>
  );
};

export default Frame2;
