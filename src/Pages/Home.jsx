import TaskForm from "../Components/TaskForm";
import TaskList from "../Components/TaskList";
import { useSelector } from "react-redux";

const Home = () => {
  const tasks = useSelector((state) => state.taskData);

  return (
    <div>
      <TaskForm />
      {tasks.length > 0 ? (
        <TaskList />
      ) : (
        <p className="text-center text-gray-500">No tasks found</p>
      )}
    </div>
  );
};

export default Home;
