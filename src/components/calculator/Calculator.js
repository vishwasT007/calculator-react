import React, { useState } from "react";
import { Container } from "./styled/Container";
import { Screen } from "./styled/Screen";
import { PreviousTextFieldScreen } from "./styled/PreviousTextFieldScreen";
import { CurrentTextFieldScreen } from "./styled/CurrentTextFieldScreen";
import { Button } from "./styled/Button";
const Calculator = () => {
  const [current, setCurrent] = useState("");
  const [previousTextFieldScreen, setPreviousTextFieldScreen] = useState("");
  const [operator, setOperator] = useState("");

  //Append Value to The Screen

  const appendValue = (element) => {
    const value = element.target.getAttribute("data");
    if (value === "." && current.includes(".")) return;
    setCurrent(current + value);
  };

  // Delete Elements from screen

  const handleDelete = () => {
    setCurrent(current.slice(0, -1));
  };

  // All clear from screen

  const handleAllClear = () => {
    setCurrent("");
    setPreviousTextFieldScreen("");
    setOperator("");
  };

  // Lets Select Operator

  const selectOperator = (element) => {
    if (current === "") return;
    if (previousTextFieldScreen !== "") {
      let value = calculate();
      setPreviousTextFieldScreen(value);
    } else {
      setPreviousTextFieldScreen(current);
    }

    setCurrent("");
    setOperator(element.target.getAttribute("data"));
  };

  //lets Calculate

  const calculate = () => {
    let output;
    let previousNumber = parseFloat(previousTextFieldScreen);
    let currentNumber = parseFloat(current);

    if (isNaN(previousNumber) || isNaN(currentNumber)) return;

    switch (operator) {
      case "÷":
        output = previousNumber / currentNumber;
        break;
      case "x":
        output = previousNumber * currentNumber;
        break;
      case "-":
        output = previousNumber - currentNumber;
        break;
      case "+":
        output = previousNumber + currentNumber;
        break;
      default:
        return;
    }
    return output;
  };

  // Lets Equal

  const equals = () => {
    let value = calculate();
    if (value === undefined || null) return;
    setCurrent(value);
    setPreviousTextFieldScreen("");
    setOperator("");
  };

  return (
    <Container>
      <Screen>
        <PreviousTextFieldScreen>
          {previousTextFieldScreen} {operator}
        </PreviousTextFieldScreen>
        <CurrentTextFieldScreen>{current}</CurrentTextFieldScreen>
      </Screen>
      <Button gridSpan={2} handle onClick={handleAllClear}>
        AC
      </Button>
      <Button handle onClick={handleDelete}>
        DEL
      </Button>
      <Button data={"÷"} operator onClick={selectOperator}>
        ÷
      </Button>
      <Button data={"7"} onClick={appendValue}>
        7
      </Button>
      <Button data={"8"} onClick={appendValue}>
        8
      </Button>
      <Button data={"9"} onClick={appendValue}>
        9
      </Button>
      <Button data={"x"} operator onClick={selectOperator}>
        x
      </Button>
      <Button data={"4"} onClick={appendValue}>
        4
      </Button>
      <Button data={"5"} onClick={appendValue}>
        5
      </Button>
      <Button data={"6"} onClick={appendValue}>
        6
      </Button>
      <Button data={"-"} operator onClick={selectOperator}>
        -
      </Button>
      <Button data={"1"} onClick={appendValue}>
        1
      </Button>
      <Button data={"2"} onClick={appendValue}>
        2
      </Button>
      <Button data={"3"} onClick={appendValue}>
        3
      </Button>
      <Button data={"+"} operator onClick={selectOperator}>
        +
      </Button>
      <Button data={"."} point onClick={appendValue}>
        .
      </Button>
      <Button data={"0"} onClick={appendValue}>
        0
      </Button>
      <Button gridSpan={2} equal onClick={equals}>
        EQUAL
      </Button>
    </Container>
  );
};

export default Calculator;
