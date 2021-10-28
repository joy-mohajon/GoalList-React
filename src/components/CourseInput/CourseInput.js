import React, { useState } from "react";

// import styled from "styled-components";
import Button from "../UI/Button/Button";

import styles from "./CourseInput.module.css";

// const FormControl = styled.div`
//   margin: 0.5rem 0;

//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color: ${(props) => (props.invalid ? "red" : "black")};
//   }

//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid ${(props) => (props.invalid ? "red" : "black")};
//     background: ${(props) => (props.invalid ? "#fad0ec" : "transparent")};
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }
// `;

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
      <div
        className={`${styles["form-control"]} ${!isValid && styles.invalid}`}
      >
        <label>Today's Goal</label>
        <input type="text" value={enteredGoal} onChange={onChangeGoalHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
