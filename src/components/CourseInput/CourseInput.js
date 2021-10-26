import React, { useState } from "react";
import Button from "../UI/Button/Button";

import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [isValid, setIsValid] = useState(true);

  const onChangeGoalHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredGoal(event.target.value);
  };

  const onSubmitGoalHandler = (event) => {
    event.preventDefault();
    if (enteredGoal.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredGoal);

    setEnteredGoal("");
  };

  return (
    <form onSubmit={onSubmitGoalHandler}>
      <div className={`form-control ${!isValid ? "invalid" : ""}`}>
        <label>Today's Goal</label>
        <input type="text" value={enteredGoal} onChange={onChangeGoalHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
