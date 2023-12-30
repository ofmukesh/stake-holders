import React, { useEffect } from "react";
import shapeImage from "../src/shape.svg";

const shapeWidths = {
  3: 150,
  4: 200,
  5: 230,
  6: 220,
  7: 230,
  8: 220,
  9: 190,
  8: 180,
};

function StakeHolder({ entries }) {
  const circleWidth = 1000;
  const shapeExtraWidth = shapeWidths[entries.length];
  const shapeWidth = circleWidth / entries.length + shapeExtraWidth;

  useEffect(() => {
    var items = document.getElementsByClassName("item");
    var text_items = document.getElementsByClassName("image-text");
    var icons = document.getElementsByClassName("icons");
    var angle = 360 / items.length;
    for (var i = 0; i < items.length; i++) {
      items[i].style.transform = `rotate(${angle * i}deg)`;
      text_items[i].style.transform = `rotate(-${angle * i}deg)`;
      icons[i].style.transform = `rotate(-${angle * i}deg)`;
    }
  }, []);

  return (
    <div
      className="main"
      style={{ width: circleWidth + "px", height: circleWidth + "px" }}
    >
      {entries.map((item, idx) => {
        return (
          <div key={idx} className="item">
            <div
              className="image-div"
              style={{ width: shapeWidth + "px", height: shapeWidth + "px" }}
            >
              <img
                src={shapeImage}
                alt={`shape-${idx}`}
                width={shapeWidth}
                height={shapeWidth}
              />
              <div className="image-text">
                <b>{item.role}</b>
                <br />
                {item.description}
              </div>
              <i className={`icons fa-solid fa-3x ${item.icon} item-icon`}></i>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default StakeHolder;
