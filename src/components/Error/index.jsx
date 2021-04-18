import styles from './error.module.scss';

const Error = props => {
  const { error, clearError } = props;
  return (
    <article  className={styles.containerError}>
      <span  className={styles.error}>{error.message}</span>
      <button onClick={clearError}className={styles.buttonDelete}>X</button>
    </article>
  );
};

export default Error;
