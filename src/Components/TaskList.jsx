import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateStatus, deleteTask, updateTask } from "../redux/taskSlice";
import TaskModal from "./TaskModal";
import TaskFilterSort from "./TaskFilterSort";
import { useNavigate } from "react-router-dom";

const TaskList = () => {
  const dispatch = useDispatch();
  const taskList = useSelector((state) => state.taskData);
  const [isTaskUpdating, setTaskUpdate] = useState(false);
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("date");
  const navigate = useNavigate();

  const handleCheckboxChange = (id, status) => {
    const newStatus = status === "completed" ? "incomplete" : "completed";
    dispatch(updateStatus({ id, status: newStatus }));
  };

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  const handleUpdate = () => {
    setTaskUpdate(true);
  };

  const handleSave = (updatedTask) => {
    dispatch(updateTask(updatedTask));
    setTaskUpdate(false);
  };

  const handleClose = () => {
    setTaskUpdate(false);
  };

  const handleFilterChange = (status) => {
    console.log(status)
    setFilter(status);
  };

  const handleSortChange = (sortOption) => {
    setSort(sortOption);
  };

  const filteredTasks = taskList.filter((task) => {
    console.log(task.status)
    if (filter === "all") return true;

    return task.status === filter;
  });

  const sortedTasks = filteredTasks.sort((a, b) => {
    if (sort === "date") {
      return new Date(a.creationDate) - new Date(b.creationDate);
    } else if (sort === "priority") {
      const priorityOrder = { High: 1, Medium: 2, Low: 3 };
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    }
    return 0;
  });

  return (
    <div>
      <TaskFilterSort
        onFilterChange={handleFilterChange}
        onSortChange={handleSortChange}
      />
      {sortedTasks.map((task) => (
        <div key={task.id} className="border border-gray-200 p-4 my-2">
          <h2 className="text-lg font-semibold">{task.title}</h2>
          <button onClick={() => navigate("/details", { state: { task } })}>
            Get Task Details
          </button>
          <p className="text-sm">Priority: {task.priority}</p>
          <p className="text-sm">Status: {task.status}</p>
          <button onClick={() => handleUpdate(task)}>
            {isTaskUpdating ? "cancel" : "update"}
          </button>
          <button onClick={() => handleDelete(task.id)}>delete</button>
          <label>
            <input
              type="checkbox"
              checked={task.status === "completed"}
              onChange={() => handleCheckboxChange(task.id, task.status)}
            />
            Mark as completed
          </label>
          {isTaskUpdating && (
            <TaskModal task={task} onClose={handleClose} onSave={handleSave} />
          )}
        </div>
      ))}
    </div>
  );
};

export default TaskList;
