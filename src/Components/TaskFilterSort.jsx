const TaskFilterSort = ({ onFilterChange, onSortChange }) => {
  const handleFilterChange = (e) => {
    onFilterChange(e.target.value);
  };

  const handleSortChange = (e) => {
    onSortChange(e.target.value);
  };

  return (
    <div>
      <div>
        <label>Filter by status:</label>
        <select onChange={handleFilterChange}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="incomplete">Incomplete</option>
        </select>
      </div>
      <div>
        <label>Sort by:</label>
        <select onChange={handleSortChange}>
          <option value="date">Creation Date</option>
          <option value="priority">Priority</option>
        </select>
      </div>
    </div>
  );
};

export default TaskFilterSort;
