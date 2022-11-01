import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Frame5 = () => {
  const navigate = useNavigate();
  const [btndata, setBtndata] = useState(0)

    const datafunction = () => {
      setBtndata(1)
    }

  const frameNavigate =  () =>{
    
    if(btndata==1){
      navigate("/frame5");
    }
    else {
      console.log("err")
    }
    }

    const frameNavigateBack = () => {
      navigate("/frame3");
    };
    
    console.log(btndata)
  const frame5_data = [
    {id:1,btn:"Black"},
    {id:2,btn:"Blond"},

    {id:3,btn:"Brunette"},

    {id:4,btn:"Red"},

    {id:5,btn:"Grey or silver"},

    {id:6,btn:"Fashion color (i.e pink)"},

  ]
  return (
    <div>
         <div class="shadow-sm p-3 mb-5  rounded" onClick={frameNavigateBack }>
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
              style={{ width: "72%" }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <h2 className="text-center">Which color describes your hair?</h2>
          <p className="text-center">choose the color that best fit your current hair</p>
          <h5 className="text-center">
            <a href="">WHY WE ASK</a>
          </h5>
        </div>
        <div className="col-sm-2"></div>
      </div>
      <div className="row text-center">
        <div className="col-sm-2"></div>
        <div className="col-sm-8">
        <div className="frame1Map ">
        {frame5_data.map((data)=>{
        
  const {id, btn} = data
return (
  
  <div className="frame1Mapinside col-sm-4 ">
  <button class="btn btn-outline-success btn_frame_no_5"
   onClick={datafunction}>{btn}</button>
  
</div>

)


})}</div>
         
          <div className='row'>
            <div className='col-sm-3'></div>
            <div className='col-sm-6'>
                <p><input type="checkbox"/>
                   i'd like a silicon-free formula</p>
                <h5>
                <a href="">WHY WE ASK</a>

                </h5>
                <button className = "btn btn-outline-green" id='next_btn' onClick={frameNavigate} >NEXT</button>
            </div>

            <div className='col-sm-3'></div>

          </div>
        </div>

        <div className="col-sm-2"></div>
      </div>
    </div>
  )
}

export default Frame5