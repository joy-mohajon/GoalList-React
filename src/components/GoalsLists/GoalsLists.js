import "./GoalsLists.css";
import GoalsItems from "../GoalItems/GoalsItems";

const GoalsLists = (props) => {
  return (
    <ul className="goal-list">
      {props.goals.map((goal) => (
        <GoalsItems
          key={goal.id}
          id={goal.id}
          text={goal.text}
          deleteGoal={props.DeleteGoal}
        />
      ))}
    </ul>
  );
};

export default GoalsLists;
