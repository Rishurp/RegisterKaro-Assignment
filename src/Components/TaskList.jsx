import { useSelector, useDispatch } from "react-redux";
import { updateStatus, deleteTask, updateTask } from "../redux/taskSlice";
import { useState } from "react";
import TaskModal from "./TaskModal";

const TaskList = () => {
  const dispatch = useDispatch();
  const taskList = useSelector((state) => state.taskData);
  const [isTaskUpdating, setTaskUpdate] = useState(false);

  const handleCheckboxChange = (id, status) => {
    const newStatus = status === "completed" ? "incomplete" : "completed";
    dispatch(updateStatus({ id, status: newStatus }));
  };

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  const handleUpdate = () => {
    setTaskUpdate(!isTaskUpdating);
  };

  const handleSave = (updatedTask) => {
    setTaskUpdate(false);
    dispatch(updateTask(updatedTask));

  };
  return (
    <div>
      {taskList.map((task) => {
        return (
          <div key={task.id} className="border border-gray-200 p-4 my-2">
            <h2 className="text-lg font-semibold">{task.title}</h2>
            <p className="text-sm">{task.detail}</p>
            <p className="text-sm">Priority: {task.priority}</p>
            <p className="text-sm">Status: {task.status}</p>
            <button onClick={() => handleUpdate()}>
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
              <TaskModal
                task={task}
                onClose={handleUpdate}
                onSave={handleSave}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;
