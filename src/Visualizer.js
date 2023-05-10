import React, { useEffect } from "react";
import "./Visualizer.css";
import { useSelector } from "react-redux";

const Visualizer = () => {
  const fibonacciNumbers = useSelector((state) => state.fibonacci.value);

  useEffect(() => {
    const directions = ["right", "down", "left", "up", ];

    fibonacciNumbers?.forEach((num, fibIndex) => {
      const currentBox = document.getElementById(`fibonacci__box--${fibIndex}`);

      if (num === 0 || currentBox === null) {
        return;
      }

      currentBox.style.height = `${num * 10}px`;
      currentBox.style.width = `${num * 10}px`;

      let currentDirectionIndex = fibIndex % 4;
      switch (directions[currentDirectionIndex]) {
        case "left":
          let distanceLeft = num;
          for (let i = fibIndex - 4; i > 0; i -= 4) {
            
            distanceLeft += fibonacciNumbers[i];
          }
          currentBox.style.left = `calc(50% - ${distanceLeft * 10}px)`;
          console.log(currentBox.style.left)
          break;

        default:
          break;
      }
    });
  }, [fibonacciNumbers]);

  return (
    <div id="visualizer">
      <div className="visualizer__container">
        {fibonacciNumbers?.map((num, i) => {
          if (num === 0) {
            return null;
          }

          return (
            <div
              className="fibonacci__box"
              id={`fibonacci__box--${i}`}
              key={i}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Visualizer;
