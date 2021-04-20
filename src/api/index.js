import axios from 'axios';
import QS from 'query-string';
import { BASE_URL } from 'config';

const http = axios.create({
  baseURL: `${BASE_URL}/api`,
});

export const createTask = ({ ...task } = {}) => http.post(`/tasks`, task);

export const updateTask = ({ taskId, taskData } = {}) =>
  http.patch(`/tasks/${taskId}`, taskData);

export const getTasks = ({ page = 1, limit = 5 }) =>
  http.get(`/tasks?${QS.stringify({ page, limit })}`);

export const deleteTask = ({ taskId } = {}) => http.delete(`/tasks/${taskId}`);

export default http;
