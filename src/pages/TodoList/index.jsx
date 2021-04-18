import TaskForm from 'components/TaskForm/index';
import TaskList from 'components/TaskList/index';
import styles from './todoList.module.scss';

const ToDoList = () => (
  <>
    <h1 className={styles.todoHeader}>To Do List</h1>
    <TaskForm />
    <TaskList />
  </>
);

export default ToDoList;
