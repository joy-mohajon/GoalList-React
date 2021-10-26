import "./GoalsItems.css";

const GoalsItems = (props) => {
  const DeleteHandler = () => {
    props.deleteGoal(props.id);
  };

  return (
    <li className="goal-item" onClick={DeleteHandler}>
      {props.text}
    </li>
  );
};

export default GoalsItems;
