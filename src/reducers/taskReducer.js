import produce from 'immer';
import ACTION_TYPES from 'actions/types';

const initialState = {
  tasks: [],
  isFetching: false,
  error: null,
};

const handlers = {
  //create task
  [ACTION_TYPES.CREATE_TASK_REQUEST]: produce((draftState, action) => {
    draftState.isFetching = true;
  }),

  [ACTION_TYPES.CREATE_TASK_SUCCESS]: produce((draftState, action) => {
    const {
      payload: { task },
    } = action;
    draftState.tasks.push(task);
  }),

  [ACTION_TYPES.CREATE_TASK_ERROR]: produce((draftState, action) => {
    const {
      payload: { error },
    } = action;
    draftState.error = error;
  }),

  //update task
  [ACTION_TYPES.UPDATE_TASK_REQUEST]: produce((draftState, action) => {
    draftState.isFetching = true;
  }),

  [ACTION_TYPES.UPDATE_TASK_SUCCESS]: produce((draftState, action) => {
    const { tasks } = draftState;
    const {
      payload: { task: newTask },
    } = action;
    const id = draftState.tasks.filter(task => task.id === tasks.id);
    draftState.tasks[id].push(newTask);
  }),

  [ACTION_TYPES.DELETE_TASK_ERROR]: produce((draftState, action) => {
    const {
      payload: { error },
    } = action;
    draftState.error = error;
  }),

  //get tasks
  [ACTION_TYPES.GET_TASKS_REQUEST]: produce((draftState, action) => {
    draftState.isFetching = true;
  }),

  [ACTION_TYPES.GET_TASKS_SUCCESS]: produce((draftState, action) => {
    const {
      payload: { tasks },
    } = action;
    draftState.tasks.push(...tasks);
  }),

  [ACTION_TYPES.GET_TASKS_ERROR]: produce((draftState, action) => {
    const {
      payload: { error },
    } = action;
    draftState.error = error;
  }),

  //delete task
  [ACTION_TYPES.DELETE_TASK_REQUEST]: produce((draftState, action) => {
    draftState.isFetching = true;
  }),

  [ACTION_TYPES.DELETE_TASK_SUCCESS]: produce((draftState, action) => {
    const {
      payload: { id },
    } = action;
    draftState.isFetching = false;
    draftState.tasks = draftState.tasks.filter(t => t.id !== Number(id));
  }),

  [ACTION_TYPES.UPDATE_TASK_ERROR]: produce((draftState, action) => {
    const {
      payload: { error },
    } = action;
    draftState.error = error;
  }),

  //clear error
  [ACTION_TYPES.CLEAR_TASK_ERROR]: produce((draftState, action) => {
    draftState.error = null;
  }),
};

function taskReducer (state = initialState, action) {
  const { type } = action;
  const handler = handlers[type];

  if (handler) {
    return handler(state, action);
  }
  return state;
}

export default taskReducer;
