import { put } from 'redux-saga/effects';
import * as ActionCreators from 'actions';
import * as API from 'api';

export function * createTaskSaga (action) {
  try {
    const { payload } = action;

    const {
      data: { data: task },
    } = yield API.createTask({ ...payload.task });

    yield put(ActionCreators.createTaskSuccess(task));
  } catch (error) {
    yield put(ActionCreators.createTaskError(error));
  }
}

export function * updateTaskSaga (action) {
  try {
    const {
      payload: { id },
    } = action;

    const {
      data: { data: taskId },
    } = yield API.updateTask({ taskId: id });

    yield put(ActionCreators.updateTaskSuccess(taskId));
  } catch (error) {
    yield put(ActionCreators.updateTaskError(error));
  }
}

export function * getTasksSaga (action) {
  try {
    const {
      data: { data: tasks },
    } = yield API.getTasks(action.payload);
    yield put(ActionCreators.getTasksSuccess(tasks));
  } catch (error) {
    yield put(ActionCreators.getTasksError(error));
  }
}

export function * deleteTaskSaga (action) {
  try {
    const {
      payload: { id },
    } = action;

    const {
      data: { data: taskId },
    } = yield API.deleteTask({ taskId: id });

    yield put(ActionCreators.deleteTaskSuccess(taskId));
  } catch (error) {
    yield put(ActionCreators.deleteTaskError(error));
  }
}
