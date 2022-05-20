// types and utils imports 
import * as actionTypes from "./actionTypes"
import { TasksActionProps, TasksInitialStateProps } from "./types";

// Defining the initial state
const InitialState: TasksInitialStateProps = {
  tasks: []
};

// Reducers

// Reducer for the theme
const tasksReducer = (state = InitialState, action: TasksActionProps) => {
  switch (action.type) {

    // Add a new task
    case actionTypes.ADD_TASK: {

      const myState = { ...state };

      if (!action.payload?.task) {
        return myState;
      }

      myState.tasks = [action.payload?.task, ...state.tasks];

      return myState;
    }

    // Delete a task
    case actionTypes.DELETE_TASK: {
      const myTasks = [...state.tasks];

      const findIndex = myTasks.findIndex(task => task.id === action.payload?.task_id);

      if (findIndex === -1) {
        return { ...state };
      }

      myTasks.splice(findIndex, 1);

      return { ...state, tasks: myTasks };
    }


    // Update a task
    case actionTypes.EDIT_TASK: {
      const myTasks = [...state.tasks];

      const findIndex = myTasks.findIndex(task => task.id === action.payload?.task_id);

      if (findIndex === -1) {
        return { ...state };
      }

      myTasks[findIndex] = { ...myTasks[findIndex], taskName: action.payload?.taskName ?? "" };

      return { ...state, tasks: myTasks };
    }

    // Complete a task
    case actionTypes.COMPLETE_TASK: {
      const myTasks = [...state.tasks];

      const findIndex = myTasks.findIndex(task => task.id === action.payload?.task_id);

      if (findIndex === -1) {
        return { ...state };
      }

      myTasks[findIndex].completed = true;

      return { ...state, tasks: myTasks };
    }

    // Complete all tasks
    case actionTypes.COMPLETE_ALL_TASKS: {
      const myTasks = [...state.tasks];

      myTasks.forEach(task => task.completed = true);

      return { ...state, tasks: myTasks };
    }

    // Clear completed tasks
    case actionTypes.CLEAR_COMPLETED_TASKS: {
      const myTasks = [...state.tasks];

      let newTasks = myTasks.filter(task => !task.completed);

      return { ...state, tasks: newTasks };
    }

    // Reset the state
    case actionTypes.RESET: {
      return { ...state, tasks: [] };
    }

    // Default
    default:
      return state;
  }
};

// Exports
export default tasksReducer;
