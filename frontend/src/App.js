// KAL PAPER BHARNE HAI

import "./App.css";
import React from "react";

import Frame1 from "./components/Frame_1/Frame1";
import Frame2 from "./components/Frame_2/Frame2";
import Frame3 from "./components/Frame_3/Frame3";
import Frame4 from "./components/Frame_4/Frame4";
import Frame5 from "./components/frame_5/Frame5";
import Frame6 from "./components/frame_6/Frame6";
import Frame7 from "./components/frame_7/Frame7";
import Frame8 from "./components/frame_7/frame_8/Frame8";
import Frame9 from "./components/frame_9/Frame9";
import Frame10 from "./components/frame_10/Frame10";
// import Frame11 from "./frame_11/Frame11";
import Frame11 from "./components/frame_11/Frame11";

import { BrowserRouter, Routes, Link, Route } from "react-router-dom";
import { useState } from "react";
const App = () => {
  const [btnData, setBtnData] = useState(0);
  const [hairGoals, setHairGoals] = useState([]);
  const [currentPage, setCurrentPage] = useState(1)
  const [question, setQuestion] = useState()
  const [questionTwo, setQuestionTwo] = useState()
  const [questionThree, setQuestionThree] = useState()
  const [questionFour, setQuestionFour] = useState()
  const [questionFive, setQuestionFive] = useState()
  const [questionSix, setQuestionSix] = useState()







  const prev =()=>{
  if (currentPage===1){
alert("work under construction")
  }else{
    setCurrentPage(currentPage - 1)

  }
  }
  return (

    <div className="App">
      <div className="shadow-sm p-3 mb-5  rounded" onClick={prev} id="frame_1_navbar">
        <i className="fa-solid fa-arrow-left-long"> back</i>
      </div>
      {currentPage===1 &&(
        <>
        <Frame1 currentPage={currentPage} setCurrentPage={setCurrentPage} question={question} setQuestion={setQuestion} /></>
      )}
      {currentPage===2 &&(
        <>
        <Frame2 currentPage={currentPage} setCurrentPage={setCurrentPage}
        questionTwo={questionTwo} setQuestionTwo={setQuestionTwo}/></>
      )}
      {currentPage===3 &&(
        <>
        <Frame3 currentPage={currentPage} setCurrentPage={setCurrentPage}
        questionThree={questionThree} setQuestionThree={setQuestionThree}/></>
      )}
      {currentPage===4 &&(
        <>
        <Frame4 currentPage={currentPage} setCurrentPage={setCurrentPage}
        questionFour={questionFour} setQuestionFour={setQuestionFour}/></>
      )}
           {currentPage===5 &&(
        <>
        <Frame5 currentPage={currentPage} setCurrentPage={setCurrentPage}
        questionFive={questionFive} setQuestionFive={setQuestionFive}/></>
      )}
      {currentPage===6 &&(
        <>
        <Frame6 currentPage={currentPage} setCurrentPage={setCurrentPage }
        hairGoals={hairGoals} setHairGoals={setHairGoals}
        btnData={btnData} setBtnData={setBtnData}/></>
      )}
      {currentPage===7&&(
        <>
        <Frame7 currentPage={currentPage} setCurrentPage={setCurrentPage}/></>
      )}
      {currentPage===8 &&(
        <>
        <Frame8 currentPage={currentPage} setCurrentPage={setCurrentPage}/></>
      )}
{currentPage===9 &&(
        <>
        <Frame9 currentPage={currentPage} setCurrentPage={setCurrentPage}/></>
      )}
      {currentPage===10 &&(
        <>
        <Frame10 currentPage={currentPage} setCurrentPage={setCurrentPage}/></>
      )}
      {currentPage===11 &&(
        <>
        <Frame11 currentPage={currentPage} setCurrentPage={setCurrentPage}/></>
      )}
     

      {/* <Frame1 />
      <Frame2/>
      <Frame3 />
<Frame4 />
<Frame5 />
<Frame6/>
 <Frame7 /> 
 <Frame8/> */}
      {/* <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Frame1 />} />

          <Route exact path="/frame1" element={<Frame2 />} />
          <Route exact path="/frame2" element={<Frame3 />} />

          <Route exact path="/frame3" element={<Frame4 />} />

          <Route exact path="/frame4" element={<Frame5 />} />

          <Route exact path="/frame5" element={<Frame6 />} />

          <Route exact path="/frame6" element={<Frame7 />} />
          <Route exact path="/frame7" element={<Frame8 />} />
          <Route exact path="/frame8" element={<Frame9 />} />
          <Route exact path="/frame9" element={<Frame10 />} />
          <Route exact path="/frame10" element={<Dummy />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
};

export default App;
