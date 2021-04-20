import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import qs from 'query-string';
import * as ActionCreators from 'actions';
import Error from 'components/Error/index';
import Task from 'components/Task/index';

const TaskList = () => {
  const { tasks, error } = useSelector(({ task }) => task);
  const dispatch = useDispatch();

  const location = useLocation();
  const [search, setSearch] = useState(qs.parse(location.search));

  const {
    getTasksRequest,
    clearTaskError,
    deleteTaskRequest,
    updateTaskRequest,
  } = bindActionCreators(ActionCreators, dispatch);

  useEffect(() => {
    setSearch(qs.parse(location.search));
  }, [location.search]);

  useEffect(() => {
    getTasksRequest(search);
  }, []);

  const taskItemsList =
    tasks.map(task => {
      return (<Task
        key={task.id}
        {...task}
        deleteTaskRequest={deleteTaskRequest}
        updateTaskRequest={updateTaskRequest}
      />)
    })

  return (
    <section>
      {error && <Error error={error} clearError={clearTaskError} />}
      {taskItemsList}
    </section>
  );
};

export default TaskList;
