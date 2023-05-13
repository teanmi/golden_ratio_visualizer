import React, { useEffect } from "react";
import "./Visualizer.css";
import { useSelector } from "react-redux";

const Visualizer = ({ scaleFactor }) => {
  const fibonacciNumbers = useSelector((state) => state.fibonacci.value);

  useEffect(() => {
    const directions = ["right", "down", "left", "up"];

    fibonacciNumbers?.forEach((num, fibIndex) => {
      const currentBox = document.getElementById(`fibonacci__box--${fibIndex}`);

      if (num === 0 || currentBox === null) {
        return;
      }

      currentBox.style.height = `${num * scaleFactor}px`;
      currentBox.style.width = `${num * scaleFactor}px`;

      let currentDirectionIndex = fibIndex % 4;
      let distanceLeft, distanceUp;
      switch (directions[currentDirectionIndex]) {
        case "right":
          distanceLeft = 1;

          for (let i = fibIndex - 4; i > 0; i -= 4) {
            distanceLeft += fibonacciNumbers[i];
          }

          currentBox.style.left = `calc(50% + ${distanceLeft * scaleFactor}px)`;

          distanceUp = 0;

          for (let i = fibIndex - 1; i > 0; i -= 4) {
            distanceUp += fibonacciNumbers[i];
          }

          currentBox.style.top = `calc(50% - ${distanceUp * scaleFactor}px)`;

          break;
        case "down":
          distanceLeft = 0;

          for (let i = fibIndex - 3; i > 0; i -= 4) {
            distanceLeft += fibonacciNumbers[i];
          }

          currentBox.style.left = `calc(50% - ${distanceLeft * scaleFactor}px)`;

          distanceUp = 0;

          for (let i = fibIndex - 4; i > 0; i -= 4) {
            distanceUp += fibonacciNumbers[i];
          }

          currentBox.style.top = `calc(50% + ${distanceUp * scaleFactor}px)`;

          break;

        case "left":
          distanceLeft = num;

          for (let i = fibIndex - 4; i > 0; i -= 4) {
            distanceLeft += fibonacciNumbers[i];
          }

          currentBox.style.left = `calc(50% - ${distanceLeft * scaleFactor}px)`;

          distanceUp = 0;

          for (let i = fibIndex - 3; i > 0; i -= 4) {
            distanceUp += fibonacciNumbers[i];
          }

          currentBox.style.top = `calc(50% - ${distanceUp * scaleFactor}px)`;

          break;
        case "up":
          distanceLeft = 0;

          for (let i = fibIndex - 1; i > 0; i -= 4) {
            distanceLeft += fibonacciNumbers[i];
          }

          currentBox.style.left = `calc(50% - ${distanceLeft * scaleFactor}px)`;

          distanceUp = 0;

          for (let i = fibIndex; i > 0; i -= 4) {
            distanceUp += fibonacciNumbers[i];
          }

          currentBox.style.top = `calc(50% - ${distanceUp * scaleFactor}px)`;

          break;

        default:
          break;
      }
    });
  }, [fibonacciNumbers, scaleFactor]);

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
