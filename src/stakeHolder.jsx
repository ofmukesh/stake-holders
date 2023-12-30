import React, { useEffect } from "react";
import shapeImage from "../src/shape.svg";

const shapeWidths = {
  3: 150,
  4: 110,
  5: 230,
  6: 220,
  7: 230,
  8: 240,
};

function StakeHolder({ entries }) {
  const circleWidth = 1000;
  const shapeExtraWidth = shapeWidths[entries.length];
  const shapeWidth = circleWidth / entries.length + shapeExtraWidth;

  useEffect(() => {
    var items = document.getElementsByClassName("item");
    var angle = 360 / items.length;
    for (var i = 0; i < items.length; i++) {
      items[i].style.transform = `rotate(${angle * i}deg)`;
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
              <i className={`fa-solid fa-3x ${item.icon} item-icon`}></i>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default StakeHolder;
