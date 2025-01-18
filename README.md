
# RegisterKaro

## Project Overview

This is a task management application built with React, Redux, and Tailwind CSS. It allows users to add, update, filter, sort, and view task details.

---

## Setup and Run Instructions

### Prerequisites

- **Node.js** (v14 or higher)
- **npm** (v6 or higher)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/registerkaro.git
   cd registerkaro
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

### Running the Application

1. Start the development server:

   ```sh
   npm run dev
   ```

2. Open your browser and navigate to `http://localhost:5173`.

### Running Tests

1. Navigate to the `src/tests` folder.
2. Run the test suite:

   ```sh
   npm test
   ```

---

## Screenshots

Here are some screenshots of the application:

### Home Page
![Home Page](https://github.com/user-attachments/assets/b63edbd8-9901-4b88-ae6c-b7a2e45ba5e2)
)

![Detail Page](https://github.com/user-attachments/assets/57913b9d-dbf3-4dda-b33e-158815c6b007)
)


Here is the performance report generated using Google PageSpeed Insights:

![PageSpeed Insights](https://github.com/user-attachments/assets/32545955-88a4-4039-a17b-be908c9652a9)

Here is the link to the Google PageSpeed Insights report: https://pagespeed.web.dev/analysis/https-task-management-app-rishurp-vercel-app/ifmknoaicw?form_factor=mobile
---

## Approach and Thought Process

### Component Structure

The application is divided into several components, each responsible for a specific part of the UI:

- **App.jsx**: The main entry point of the application, setting up routes and the Redux provider.
- **Home.jsx**: The home page, displaying the task form and task list.
- **TaskDetails.jsx**: The task details page, displaying detailed information about a specific task.
- **TaskForm.jsx**: A form for adding new tasks.
- **TaskList.jsx**: A list of tasks with options to update or delete tasks.
- **TaskFilterSort.jsx**: A component for filtering and sorting tasks.
- **TaskModal.jsx**: A modal for updating task details.

### Optional Functionality: Persisting Tasks on Page Reload

To enhance the user experience, tasks persist even after a page reload. This is achieved using the browser's `localStorage`.  

Here are the utility functions used for this feature:  

```javascript
const saveTasksToLocalStorage = (tasks) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

const loadTasksFromLocalStorage = () => {
  const tasks = localStorage.getItem("tasks");
  return tasks ? JSON.parse(tasks) : [];
};
```

- **`saveTasksToLocalStorage(tasks)`**: Saves the tasks array into `localStorage`.
- **`loadTasksFromLocalStorage()`**: Loads the tasks array from `localStorage` when the application initializes.  
This ensures that tasks are not lost upon reloading the page.

### State Management

Redux is used for state management. The state is divided into slices, with each slice managing a specific part of the state. The `taskSlice.js` file contains actions and reducers for managing tasks.

### Styling

Tailwind CSS is used for styling the components. It provides utility classes that make it easy to apply styles directly in the JSX.

### Testing

The application uses Jest and React Testing Library for testing.  

- **Test File**:  
   The `src/tests` folder contains test files, including `TaskForm.test.js`, which is dedicated to testing the `TaskForm` component.  
   
- **Purpose**:  
   - Ensures the `TaskForm` renders correctly.
   - Verifies that the form submission updates the Redux store as expected.

---

## Tools Used

- **React**: A JavaScript library for building user interfaces.
- **Redux**: A state management library for JavaScript applications.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Jest**: A JavaScript testing framework.
- **React Testing Library**: A library for testing React components.
- **PropTypes**: A library for type-checking React props.
- **ESLint**: A tool for identifying and fixing linting issues in JavaScript code.

---

## Folder Structure

```
registerkaro/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── Components/
│   │   ├── TaskForm.jsx
│   │   ├── TaskList.jsx
│   │   ├── TaskFilterSort.jsx
│   │   ├── TaskModal.jsx
│   │   └── ...
│   ├── Pages/
│   │   ├── Home.jsx
│   │   ├── TaskDetails.jsx
│   │   └── ...
│   ├── redux/
│   │   ├── store.js
│   │   ├── taskSlice.js
│   │   └── ...
│   ├── tests/
│   │   ├── TaskForm.test.js
│   │   └── ...
│   ├── App.jsx
│   ├── index.js
│   └── ...
├── screenshots/
│   ├── home-page.png
│   ├── add-task-form.png
│   ├── task-list.png
│   └── ...
├── package.json
├── README.md
└── ...
```

