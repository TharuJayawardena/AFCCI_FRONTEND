import React from 'react';
import style from "../../styles/people.css"
const PeopleSay = () => {
  const customStyle = {
    '--delay': '-1s', // Set the value accordingly
    // other styles...
  };
  const customStyle1 = {
    '--delay': '0s', // Set the value accordingly
    // other styles...
  };
  const customStyle2 = {
    '--delay': '1s', // Set the value accordingly
    // other styles...
  };
  const customStyle3 = {
    '--delay': '2s', // Set the value accordingly
    // other styles...
  };
  return (
    <div class="container mt-5">
      <div class="row">
        <div class="col-lg-6">
          <h6><span style={{ color: "#005ea2" }}><b>Hear From Our Clients</b></span></h6>
          <p style={{ fontSize: "30px", fontWeight: "10px" }}><b>What People Say</b><span style={{ color: "#0a98ff" }}><b> About Us</b></span></p>
          <p>Discover what oure satisfied clients say about thier experience with <p>ACCFIN's exceptional service and support</p> </p>
          <img src="PeopleSay.svg" width="600px" hight="500px" alt='vector'></img>

        </div>
        <div class="col-lg-6">
          <div class="bd">
          <div class="wrapper">
            <div class="outer">
              <div class="card" style={customStyle}>
                <div class="content">
                  <div class="img"><img src="Avatar3.png" alt="" /></div>
                  <div class="details">
                    <span class="name">Sumit Kapoor</span>
                    <p>Frontend Developer</p>
                  </div>
                </div>
                <a href="#">Follow</a>
              </div>
              <div class="card" style={customStyle1}>
                <div class="content">
                  <div class="img"><img src="Avatar3.png" alt="" /></div>
                  <div class="details">
                    <span class="name">Andrew Neil</span>
                    <p>YouTuber & Blogger</p>
                  </div>
                </div>
                <a href="#">Follow</a>
              </div>
              <div class="card" style={customStyle2}>
                <div class="content">
                  <div class="img"><img src="Avatar3.png" alt="" /></div>
                  <div class="details">
                    <span class="name">Jasmine Carter</span>
                    <p>Freelancer & Vlogger</p>
                  </div>
                </div>
                <a href="#">Follow</a>
              </div>
              <div class="card" style={customStyle3}>
                <div class="content">
                  <div class="img"><img src="Avatar3.png" alt="" /></div>
                  <div class="details">
                    <span class="name">Justin Chung</span>
                    <p>Backend Developer</p>
                  </div>
                </div>
                <a href="#">Follow</a>
              </div>
              <div class="card" style={customStyle3}>
                <div class="content">
                  <div class="img"><img src="Avatar3.png" alt="" /></div>
                  <div class="details">
                    <span class="name">Adrina Calvo</span>
                    <p>Teacher & Advertiser</p>
                  </div>
                </div>
                <a href="#">Follow</a>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>

    </div>

  );

};

export default PeopleSay;