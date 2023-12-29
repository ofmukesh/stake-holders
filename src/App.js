import shapeImage from "./shape.svg";
import "./App.css";
import { useEffect } from "react";

function App() {
  const shapes = [{}, {}, {}, {}, {}, {}];
  const circleWidth = 600; // in px
  const shapeExtraWidth = 120;
  const shapeWidth = circleWidth / shapes.length + shapeExtraWidth;

  useEffect(() => {
    var items = document.getElementsByClassName("item");
    var angle = 360 / items.length;
    for (var i = 0; i < items.length; i++) {
      items[i].style.transform = `rotate(${angle * i}deg)`;
    }
  }, []);
  return (
    <>
      <div
        className="main"
        style={{ width: circleWidth + "px", height: circleWidth + "px" }}
      >
        {shapes.map((item, idx) => {
          return (
            <div key={idx} className="item">
              <img src={shapeImage} width={shapeWidth} height={shapeWidth} />
              <p className="item-text">Hlo</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
