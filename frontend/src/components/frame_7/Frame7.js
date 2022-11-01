import React from 'react'
import { useNavigate } from 'react-router-dom';

// import pic from "./images/Rectangle 20 (1).jpg"
const Frame7 = () => {
  const navigate = useNavigate();

  const frameNavigate =  () =>{
    navigate('/frame7')
    }

    const frameNavigateBack = () => {
      navigate("/frame5");
    };


  const frame7_btn = [
    {id:1,btn:"Light"},
    {id:2,btn:"Medium"},
    {id:3,btn:"Strong"},

  ]
  const frame7_data = [
    {  
      id: 1,
      image: "images/Rectangle 20 (1).jpg",
      heading: "FLORAT",
      italic: "for the daydreammer",
    para:"fresh,floral,rose,gardenia with earthy sandalwood"
    },
    {  
      id: 2,
      image: "images/Rectangle 20 (1).jpg",
      heading: "FLORAT",
      italic: "for the daydreammer",
    para:"fresh,floral,rose,gardenia with earthy sandalwood"
    },
    {  
      id: 3,
      image: "images/Rectangle 20 (1).jpg",
      heading: "FLORAT",
      italic: "for the daydreammer",
    para:"fresh,floral,rose,gardenia with earthy sandalwood"
    },
    {  
      id: 4,
      image: "images/Rectangle 20 (1).jpg",
      heading: "FLORAT",
      italic: "for the daydreammer",
    para:"fresh,floral,rose,gardenia with earthy sandalwood"
    },
    {  
      id: 5,
      image: "images/Rectangle 20 (1).jpg",
      heading: "FLORAT",
      italic: "for the daydreammer",
    para:"fresh,floral,rose,gardenia with earthy sandalwood"
    },
    {  
      id: 6,
      image: "images/Rectangle 20 (1).jpg",
      heading: "FLORAT",
      italic: "for the daydreammer",
    para:"fresh,floral,rose,gardenia with earthy sandalwood"
    },
  ]
  return (
    <div>
        <div class="shadow-sm p-3 mb-5  rounded" onClick={frameNavigateBack}>
        <i class="fa-solid fa-arrow-left-long"> back</i>
        {/* <h4>Back</h4> */}
      </div>
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8">
          {" "}
          <div class="progress">
            <div
              class="progress-bar"
              role="progressbar"
              style={{ width: "100%" }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <h2 className="text-center">Choose your fragrance</h2>
          
        </div>
        <div className="col-2"></div>
      </div>
      <div className="row text-center">
        <div className="col-2"></div>
        <div className="col-8">
        <div className="frame1Map ">
        {frame7_data.map((data)=>{
  const {id, image, heading,italic,para} = data
return (
  
  <div className="frame7Mapinside col-sm-6 ">
    <div class="card mb-3" frame7_inside>
  <div class="row g-0 shadow-lg  bg-body rounded">
    
    <div class="col-md-6">
      <div class="card-body">
        <h5 class="card-title">{heading}</h5>
        <i class="card-text">{italic}.</i>
        <p class="card-text"><small class="text-muted">{para}</small></p>
      </div>
    </div>
    <div class="col-md-6">
      <img src={image} class="img-fluid rounded-start float-end" alt="..." />
    </div>
  </div>
</div>
</div>

)


})}</div>
<div className='row'>
<div className='col-sm-3'></div>

<div className="frame1Mapinside col-sm-6 ">
    <div class="card mb-3" frame7_inside>
  <div class="row g-0 shadow-lg  bg-body rounded">
    
    <div class="col-md-12">
      <div class="card-body">
        <h5 class="card-title">FRAGRENCE FREE</h5>
        <i class="card-text">for sensitive scalp</i>
       
      </div>
    </div>
   
  </div>
</div>
</div>
<div className='col-3'></div>
</div>


          <div className="row">
            <h1>Fragrance strength</h1>
            <div className="frame1Map">
        {frame7_btn.map((data)=>{
  const {id, btn} = data
return (
  <div className="frame1Mapinside col-sm-4">
       <button class="btn btn-outline-success btn_frame_no_5">{btn}</button>

  </div>
  
)




})}
</div>
<div className="row">
            <div className="col-3"></div>
            <div className="col-6">
              <button className="btn" onClick={frameNavigate} id="btn_frame_6">NEXT</button>
            </div>

            <div className="col-3"></div>
          </div>
          </div>
        </div>

        <div className="col-2">d</div>
      </div>
    </div>
  )
}

export default Frame7