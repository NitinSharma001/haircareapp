import React from "react";
import "./frame_4.css";

const Frame4 = (props) => {

   const frameNavigate =  (data) =>{
    props.setCurrentPage(props.currentPage + 1)
    props.setQuestionFour(props.questionFour+data)
    console.log(data)
  }

  //   const frameNavigateBack = () => {
  //     navigate("/frame2");
  //   };

  const frame4_data = [
    { id: 1, btn: "Balayaga" },
    { id: 2, btn: "Bleached" },
    { id: 3, btn: "Color" },
    { id: 4, btn: "Highlights" },
    { id: 5, btn: "Keratin" },
    { id: 6, btn: "Perm" },
    { id: 7, btn: "Relaxer" },
    { id: 8, btn: "None of these" },
    
  ];
  return (
    <div>
      
      <div className="row">
        <div className="col-sm-2"></div>
        <div className="col-sm-8">
          {" "}
          <div class="progress">
            <div
              class="progress-bar"
              role="progressbar"
              style={{ width: "58%" }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <h2 className="text-center">Do you color or treat your hair</h2>
          <p className="text-center">select all the apply</p>
          <h5 className="text-center">
            <a href="">WHY WE ASK</a>
          </h5>
        </div>
        <div className="col-sm-2"></div>
      </div>
      <div className="row text-center">
        <div className="col-sm-2"></div>
        <div className="col-sm-8">
        <div className="frame1Map">
        {frame4_data.map((data,key)=>{
  const {id, btn} = data
return (
  <div className="frame1Mapinside col-sm-3"key={key}>
  <button class="btn btn-outline-success "onClick={()=>frameNavigate(data)} >{btn}</button>
</div>
)


})}</div>
          <div className="option_1">
           

            <div className="row">
              
             
             
             
              <div className="col-sm-12">
                <button class="btn btn-outline-success" id="btn_no_9">
                  My hair is natural
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-2"></div>
      </div>
    </div>
  );
};

export default Frame4;
