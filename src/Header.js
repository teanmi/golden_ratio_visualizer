import React from "react";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/fibonacciReducer";

const Header = () => {
  const fibonacciNumbers = useSelector((state) => state.fibonacci.value);
  const dispatch = useDispatch();

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
        <button className="header__button"
          onClick={() => {
            dispatch(decrement());
          }}
        >
          -
        </button>
        <button className="header__button"
          onClick={() => {
            dispatch(increment());
          }}
        >
          +
        </button>
      </div>
    </header>
  );
};

export default Header;
