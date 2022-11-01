import React from 'react'
import { useNavigate } from 'react-router-dom';


const Frame3 = () => {
  const navigate = useNavigate();

  const frameNavigate =  () =>{
    navigate('/frame3')
    }
    const frameNavigateBack = () => {
      navigate("/frame1");
    };
  const frame3_data = [
    {  
      id: 1,
      image: "images/Third age/dry 1.svg",
      heading: "Dry",
      para: "scalp is itchy or flaky",
    },
    {  
      id: 2,
      image: "images/Third age/balanced 1.svg",
      heading: "Balanced",
      para: "hair is not dry or oily",
    },
    {  
      id: 3,
      image: "images/Third age/oily 1.svg",
      heading: "Oily",
      para: "roots are flat or greasy",
    },
  ]
  return (
    <div><div class="shadow-sm p-3 mb-5  rounded" onClick={frameNavigateBack}>
    <i class="fa-solid fa-arrow-left-long"> back</i>
  </div>
  <div className="row">
    <div className="col-sm-2"></div>
    <div className="col-sm-8">
      {" "}
      <div class="progress">
        <div
          class="progress-bar"
          role="progressbar"
          style={{ width: "44%"}}
        
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <h2 className="text-center">Do you color or treat your hair?</h2>
      <p className="text-center">
        Your scalp/roots the day after washing
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
    <div className="frame1Map">
        {frame3_data.map((data)=>{
  const {id, image, heading, para} = data
return (
  <div className="frame1Mapinside col-sm-4" onClick={frameNavigate}>
     <img src={image} alt=""></img>
     <h3>{heading}</h3>
     <p>{para}</p>
  </div>
)


})}</div>
    </div>

    <div className="col-sm-2"></div>
  </div></div>
  )
}

export default Frame3