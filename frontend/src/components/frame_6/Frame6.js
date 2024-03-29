import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Frame10 from "../frame_10/Frame10";
const Frame6 = (props) => {
  // const navigate = useNavigate();
  

  const dataFuntion = (data) => {
    if (props.hairGoals.includes(data.id)) {
      // props.setHairGoals();
      props.setHairGoals((current) => current.filter((x) => x !== data.id));
     
      
    } else {
      props.setHairGoals((prevState) => [...prevState, data.id]);

      
    }
    props.setBtnData(props.btnData + 1);
    console.log(props.hairGoals)
  };

  const frameNavigate = () => {
    if (props.hairGoals.length > 0 && props.hairGoals.length <= 5) {
      props.setCurrentPage(props.currentPage + 1)
    } else {
      alert(`select upto 5 -----you select only ${props.hairGoals.length}`);
    }
  };

  // const frameNavigateBack = () => {
  //   navigate("/frame4");
  // };

  // const  focusfnc  = () =>{}

  const frame6_data = [
    { id: 1, btn: "Anti-frizz" },
    { id: 2, btn: "Color protection" },

    { id: 3, btn: "Curl defination" },
    { id: 4, btn: "Deep condition" },
    { id: 5, btn: "Fix split ends" },
    { id: 6, btn: "Hydrate" },
    { id: 7, btn: "Lengthen" },
    { id: 8, btn: "Nourish roots" },
    { id: 9, btn: "Rejuvenate" },
    { id: 10, btn: "Replenish hair" },
    { id: 11, btn: "Shine" },
    { id: 12, btn: "Brunette" },
    { id: 13, btn: "Scoothe scalp" },
    { id: 14, btn: "Stengthen hair" },
    { id: 15, btn: "Thermal protection" },
  ];
  // const [isActive, setIsActive] = useState(false);

  // const handleClick = () => {
  //   setIsActive((current) => !current);
  // };

  return (
    <div>
      
      <div className="row">
        <div className="col-sm-2"></div>
        <div className="col-sm-8  frameSixProgressBar">
          {" "}
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: "86%" }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <h2 className="text-center">Select your hair goals</h2>
          <p className="text-center">choose up to 5</p>
          <h6 className="text-center">
            <i className="fa-solid fa-heart" id="heart"></i> = RECOMMENDED GOALS
            BASED ON YOUR SELECTION
          </h6>
        </div>
        <div className="col-sm-8"></div>
      </div>
      <div className="row text-center">
        <div className="col-2"></div>
        <div className="col-8">
          <div className="frame1Map ">
            {frame6_data.map((data, key) => {
              const { id, btn } = data;
              return (
                <div className="frame1Mapinside col-sm-4 " key={key}>
                  <button
                    className={
                      props.hairGoals.includes(data.id)
                        ? "btn btn-outline-success btn_frame_no_5 selected"
                        : "btn btn-outline-success btn_frame_no_5"
                    }
                    onClick={function (event) {
                      dataFuntion(data);
                  
                    }}
                  >
                    {btn}
                  </button>
                </div>
              );
            })}
          </div>
          <div className="row">
            <div className="col-1"></div>
            <div className="col-10">
              <button className="btn" id="btn_frame_6" onClick={frameNavigate}>
                NEXT
              </button>
            </div>

            <div className="col-1"></div>
          </div>
        </div>

        <div className="col-2"></div>
      </div>
    </div>
  );
};

export default Frame6;
