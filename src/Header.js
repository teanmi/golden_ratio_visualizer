import React, { useEffect,  } from "react";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/fibonacciReducer";

const Header = ({ scaleFactor, setScaleFactor }) => {
  const fibonacciNumbers = useSelector((state) => state.fibonacci.value);
  const dispatch = useDispatch();


  function updateScaleFactor() {
    const value = document.getElementById("header__scaleFactor").value;
    if (value === "") {
      return;
    }
    if (value !== Math.floor(value)) {
      setScaleFactor(Math.round(value));
    }
    if (value < 1) {
      setScaleFactor(1);
    }
    if (value > 9) {
      setScaleFactor(9);
    }
  }

  useEffect(() => {
    if (fibonacciNumbers.length >= 20) {
      document.getElementById("increment-button").style.pointerEvents = "none";

    }
    
  }, [fibonacciNumbers]);

  return (
    <header id="header">
      <h1 className="header__title">Current Fibonacci Sequence: </h1>
      <div className="header__fibonacciNumbers">
        {fibonacciNumbers?.map((num, i) => {
          return (
            <p className="header__fibonacciNumber" key={i}>
              {num}
            </p>
          );
        })}
      </div>
      <div className="header__buttons">
        <button
          id="decrement-button"
          className="header__button"
          onClick={() => {
            dispatch(decrement());
          }}
        >
          -
        </button>
        <button
          id="increment-button"
          className="header__button"
          onClick={() => {
            dispatch(increment());
          }}
        >
          +
        </button>
      </div>
      <div className="header__inputContainer">
        <p className="header__inputDescription">Scale Factor:</p>
        <input
          id="header__scaleFactor"
          type="number"
          value={scaleFactor}
          onChange={async (event) => {
            await setScaleFactor(event.target.value);
            updateScaleFactor();
          }}
          placeholder="integer"
          min={1}
          max={9}
        />
      </div>
    </header>
  );
};

export default Header;
