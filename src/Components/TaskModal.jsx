import { useState, useEffect } from "react";

const TaskUpdateModal = ({ task, onClose, onSave }) => {
  const [updatedTask, setUpdatedTask] = useState(task);

  useEffect(() => {
    setUpdatedTask(task);
  }, [task]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(updatedTask);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            value={updatedTask.title}
            onChange={handleChange}
          />
          <textarea
            name="detail"
            value={updatedTask.detail}
            onChange={handleChange}
          />
          <select
            name="priority"
            value={updatedTask.priority}
            onChange={handleChange}
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
};

export default TaskUpdateModal;
