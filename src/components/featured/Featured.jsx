import React from "react";
import "./Featured.scss";

const Featured = () => {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>Lorem the Lorem Lorem Lorem for Lorem Lor Lorem</h1>
          <div className="search">
            <div className="searchInput">
              <img src="./img/search.png" alt="" />
              <input type="text" placeholder="Szukaj swojej piekarni" />
            </div>
            <button>Szukaj</button>
          </div>
          <div className="popular">
            <span>Popularne miasta:</span>
            <button>Warszawa</button>
            <button>Kraków</button>
            <button>Poznań</button>
            <button>Godów</button>
          </div>
        </div>
        <div className="right">
          <img src="./img/man.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Featured;
