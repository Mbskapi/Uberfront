import React from "react";
import Header from "./component/Header";
import pix from "../src/Images/uber-lady.jpg";



function Home() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="card">
          <div className="top">
            <div className="topContent">
              <img src={pix} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
