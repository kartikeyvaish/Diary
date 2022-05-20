// Imports
import * as actionTypes from "./actionTypes";
import { TasksActionProps, TasksProps } from "./types";

// Action Creators for the tasks

// Action creator to add a new task
function AddTask(task: TasksProps): TasksActionProps {
  return {
    type: actionTypes.ADD_TASK,
    payload: {
      task
    }
  }
}

// function to delete a task
function DeleteTask(task_id: string): TasksActionProps {
  return {
    type: actionTypes.DELETE_TASK,
    payload: {
      task_id
    }
  }
}

// function to update a task
function UpdateTask(task_id: string, taskName: string): TasksActionProps {
  return {
    type: actionTypes.EDIT_TASK,
    payload: {
      task_id, taskName
    }
  }
}

// Action Creators: Complete a task
function CompleteTask(task_id: string): TasksActionProps {
  return {
    type: actionTypes.COMPLETE_TASK,
    payload: {
      task_id
    }
  }
}

// Action Creators: Complete all tasks
function CompleteAllTasks(): TasksActionProps {
  return {
    type: actionTypes.COMPLETE_ALL_TASKS
  }
}

// function to UNCOMPLETE_ALL_TASKS 
function UncompleteAllTasks(): TasksActionProps {
  return {
    type: actionTypes.UNCOMPLETE_ALL_TASKS
  }
}

// function to clear completed tasks
function ClearCompletedTasks(): TasksActionProps {
  return {
    type: actionTypes.CLEAR_COMPLETED_TASKS
  }
}


// Action Creators: RESET the state
function Reset(): TasksActionProps {
  return {
    type: actionTypes.RESET,
  }
}

// Assemble TasksActionCreators
const TasksActionCreators = { Reset, AddTask, ClearCompletedTasks, CompleteAllTasks, CompleteTask, DeleteTask, UpdateTask, UncompleteAllTasks };

// export the TasksActionCreators
export default TasksActionCreators;
