import { useLocation } from "react-router-dom";

const TaskDetails = () => {
  const location = useLocation();
  const { task } = location.state;
  return (
    <>
      <h1>Task Details</h1>
      <div>{task.detail}</div>
    </>
  );
};

export default TaskDetails;
