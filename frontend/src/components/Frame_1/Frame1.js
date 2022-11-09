import React from "react";
import { useNavigate } from "react-router-dom";

import "./frame_1.css";


const Frame1 = (props) => {
  // const navigate = useNavigate();

  const frameNavigate =  () =>{

    props.setCurrentPage(props.currentPage + 1)
  }
      const frame1_data = [
    {
      id: 1,
      image: "images/straight 1.svg",
      heading: "Straight",
      para: "no bend or curl",
    },
    {
      id: 2,
      image: "images/wavy 1.svg",
      heading: "Wavy",
      para: "like a loose S",
    },
    {
      id: 3,
      image: "images/curly_3A 1.svg",
      heading: "Curly",
      para: "defined curl/spiral",
    },
    {
      id: 4,
      image: "images/curly_3B 2.svg",
      heading: "Medium Curly",
      para: "bouncy ringlets",
    },
    {
      id: 5,
      image: "images/curly_3C 1.svg",
      heading: "Very Curly",
      para: "tight corkscrews",
    },
    {
      id: 6,
      image: "images/coil1.svg",
      heading: "Coily",
      para: "s shape,loosely packed",
    },
    {
      id: 7,
      image: "images/coily_4B-1 1.svg",
      heading: "Very Coily",
      para: "dense zig-zag pattern",
    },
    {
      id: 8,
      image: "images/coily_4C 1.svg",
      heading: "Tigth Coily",
      para: "spring zig-zag pattern",
    },
  ];
  return (
    <div id="frame_1">
      
      <div className="row">
        <div className="col-sm-2"></div>
        <div className="col-sm-8">
          {" "}
          <div class="progress">
            <div
              class="progress-bar"
              role="progressbar"
              style={{ width: "14.5%" }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <h2 className="text-center">What's your natural hair type?</h2>
          <p className="text-center">
            Your hair when its untreated or unstyled
          </p>
          <h5 className="text-center">
            <a href="">HOW TO ANSWER</a>
          </h5>
        </div>
        <div className="col-sm-2"></div>
      </div>


      <div className="row text-center">
        <div className="col-sm-2"></div>
        <div className="col-sm-8">

        <div className="option_1">
       
<div className="frame1Map">{frame1_data.map((data)=>{
  const {id, image, heading, para} = data
return (
  <div className="frame1Mapinside col-sm-3"  onClick={frameNavigate}>
     <img src={image} alt=""></img>
     <h3>{heading}</h3>
     <p>{para}</p>
  </div>
)


})}</div>
         
        </div>
        </div>
        <div className="col-sm-2"></div>
      
    </div>
    </div>
  );
};

export default Frame1;
