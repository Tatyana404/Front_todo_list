import styles from './task.module.scss';

const Task = props => {
  const {
    body,
    isDone,
    id,
    deadline,
    deleteTaskRequest,
    updateTaskRequest,
  } = props;

  return (
    <article className={styles.containerTask}>
      <div className={styles.task}>
        <h1 className={styles.headerTask}>
          <span>ID:{id}</span>
          <span>{deadline.substring(0, 10)}</span>
        </h1>
        <label className={styles.wrapper}>
          <input
            type='checkbox'
            checked={isDone}
<<<<<<< HEAD
            onChange={(e) => updateTaskRequest({id,taskData: {isDone: e.target.checked}})}
=======
            onChange={(i) => updateTaskRequest(i,id)}
>>>>>>> c1bb4b7c8149528bf6d03952de18dc9b8a039e77
          />
          <p className={styles.taskBody}>{body}</p>
          <button
            onClick={() => deleteTaskRequest(id)}
            className={styles.buttonDelete}
          >
            X
          </button>
        </label>
      </div>
    </article>
  );
};

export default Task;
