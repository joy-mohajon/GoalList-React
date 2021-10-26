import React, { useState } from "react";

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
      <div className="form-control">
        <label style={{ color: !isValid ? "red" : "black" }}>
          Today's Goal
        </label>
        <input
          style={{
            borderColor: !isValid ? "red" : "black",
            background: !isValid ? "salmon" : "transparent",
          }}
          type="text"
          value={enteredGoal}
          onChange={onChangeGoalHandler}
        />
      </div>
      <button type="submit">Add Goal</button>
    </form>
  );
};

export default CourseInput;
