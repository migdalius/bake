import React from "react";
import Featured from "../../components/featured/Featured";

import TrustedBy from "../../components/trustedBy/TrustedBy";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>Lorem e Lorem of Lorem us Lorem and Lorem</h1>
            <div className="title">
              <img src="./img/check.png" alt="" />
              The Lorem for Lorem Lorem
            </div>
            <p>
              Lorem of Lorem Lorem and Lorem if Lorem. And Lorem and, Lorem if
              Lorem and Lorem.
            </p>

            <div className="title">
              <img src="./img/check.png" alt="" />
              The Lorem for Lorem Lorem
            </div>
            <p>
              Lorem of Lorem Lorem and Lorem if Lorem. And Lorem and, Lorem if
              Lorem and Lorem.
            </p>

            <div className="title">
              <img src="./img/check.png" alt="" />
              The Lorem for Lorem Lorem
            </div>
            <p>
              Lorem of Lorem Lorem and Lorem if Lorem. And Lorem and, Lorem if
              Lorem and Lorem.
            </p>
          </div>
          <div className="item">
            <video src=".img/video.mp4" controls></video>
          </div>
        </div>
      </div>

      <div className="features">
        <div className="container">
          <div className="item">
            <h1>Lorem e Lorem of Lorem us Lorem and Lorem</h1>
            <div className="title">
              <img src="./img/check.png" alt="" />
              The Lorem for Lorem Lorem
            </div>
            <p>
              Lorem of Lorem Lorem and Lorem if Lorem. And Lorem and, Lorem if
              Lorem and Lorem.
            </p>

            <div className="title">
              <img src="./img/check.png" alt="" />
              The Lorem for Lorem Lorem
            </div>
            <p>
              Lorem of Lorem Lorem and Lorem if Lorem. And Lorem and, Lorem if
              Lorem and Lorem.
            </p>

            <div className="title">
              <img src="./img/check.png" alt="" />
              The Lorem for Lorem Lorem
            </div>
            <p>
              Lorem of Lorem Lorem and Lorem if Lorem. And Lorem and, Lorem if
              Lorem and Lorem.
            </p>
          </div>
          <div className="item">
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_585,dpr_1.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624769/business-desktop-585-x1.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
