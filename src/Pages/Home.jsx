import TaskForm from "../Components/TaskForm";
import TaskList from "../Components/TaskList";

const taskArray = [
  {
    id: 1,
    title: "Task 1",
    detail: "Task 1 Detail",
    priority: "High",
    status:"Incomplete"
  },
  {
    id: 2,
    title: "Task 2",
    detail: "Task 2 Detail",
    priority: "Low",
    status:"Incomplete"
  },
  {
    id: 3,
    title: "Task 3",
    detail: "Task 3 Detail",
    priority: "High",
    status:"Incomplete"
  }
]

const Home = () => {
  return (
    <div>
      <TaskForm />
      <TaskList tasks = {taskArray} />
    </div>
  );
};

export default Home;
