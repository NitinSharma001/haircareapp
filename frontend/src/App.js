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
import Dummy from "./components/frame_10/dummy";

import { BrowserRouter, Routes, Link, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      {/* <Frame1 />
      <Frame2/>
      <Frame3 />
<Frame4 />
<Frame5 />
<Frame6/>
 <Frame7 /> 
 <Frame8/> */}
      <BrowserRouter>
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
      </BrowserRouter>
    </div>
  );
};

export default App;
