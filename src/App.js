import React, { useState } from "react";

import CourseInput from "./components/CourseInput/CourseInput";
import "./App.css";
import GoalsLists from "./components/GoalsLists/GoalsLists";

function App() {
  const [totalGoals, setCourseGoals] = useState([
    { text: "Do all exercises!", id: "g1" },
    { text: "Finish the course!", id: "g2" },
  ]);

  const addGoalHandler = (enteredGoal) => {
    const addNewGoal = {
      text: enteredGoal,
      id: Math.random().toString(),
    };
    setCourseGoals((prevGoals) => {
      return [addNewGoal, ...prevGoals];
    });
  };

  // console.log(totalGoals);

  const deleteGoal = (Goal_id) => {
    setCourseGoals((prevGoals) => {
      const updateGoals = prevGoals.filter((goal) => goal.id !== Goal_id);
      return updateGoals;
    });
  };

  return (
    <div>
      <section id="goal-form">
        <CourseInput onAddGoal={addGoalHandler} />
      </section>
      <section id="goals">
        <GoalsLists DeleteGoal={deleteGoal} goals={totalGoals} />
      </section>
    </div>
  );
}

export default App;
