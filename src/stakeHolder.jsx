import React, { useEffect } from "react";
import shapeImage from "../src/shape.svg";

function StakeHolder({ entries }) {
  const shapes = entries;
  const circleWidth = 1000; // in px
  const shapeExtraWidth = 220;
  const shapeWidth = circleWidth / shapes.length + shapeExtraWidth;

  useEffect(() => {
    var items = document.getElementsByClassName("item");
    // var icons = document.getElementsByClassName("item-icon");
    var angle = 360 / items.length;
    for (var i = 0; i < items.length; i++) {
      items[i].style.transform = `rotate(${angle * i}deg)`;
    //   icons[i].style.transform = `rotate(${angle * i}deg)`;
    }
  }, []);
  return (
    <div
      className="main"
      style={{ width: circleWidth + "px", height: circleWidth + "px" }}
    >
      {shapes.map((item, idx) => {
        return (
          <div key={idx} className="item">
            <img src={shapeImage} width={shapeWidth} height={shapeWidth} />
            <i
              key={idx}
              className={` fa-solid fa-3x ${item.icon}`}
            ></i>
          </div>
        );
      })}
      {/* <div className="icons">
        {shapes.map((item, idx) => {
          return (
            <i key={idx} className={`item-icon fa-solid fa-3x ${item.icon}`} >
            </i>
          );
        })}
      </div> */}
    </div>
  );
}

export default StakeHolder;
