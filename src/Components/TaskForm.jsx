import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/taskSlice";

const TaskForm = () => {
  const dispatch = useDispatch();

  const [task, setTask] = useState({
    title: "",
    detail: "",
    priority: "High",
    status: "incomplete",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let payload = {
      ...task,
      id: Date.now(),
      creationDate: new Date().toISOString(),
    };
    dispatch(addTask(payload));
    setTask({
      title: "",
      detail: "",
      priority: "High",
      status: "incomplete",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 max-w-md mx-auto space-y-4 border rounded shadow"
    >
      <div>
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700"
        >
          Task Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={task.title}
          onChange={handleChange}
          placeholder="Enter task title"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          required
        />
      </div>

      <div>
        <label
          htmlFor="detail"
          className="block text-sm font-medium text-gray-700"
        >
          Task Detail
        </label>
        <textarea
          id="detail"
          name="detail"
          value={task.detail}
          onChange={handleChange}
          placeholder="Enter task detail"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          rows="3"
          required
        ></textarea>
      </div>

      <div>
        <label
          htmlFor="priority"
          className="block text-sm font-medium text-gray-700"
        >
          Priority
        </label>
        <select
          id="priority"
          name="priority"
          value={task.priority}
          onChange={handleChange}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
