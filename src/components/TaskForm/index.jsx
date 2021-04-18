import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import styles from './taskForm.module.scss';
import * as ActionCreators from 'actions';

const TaskForm = () => {
  const dispatch = useDispatch();
  const values = {
    body: '',
    deadline: '',
    isDone: false,
  };
  const onSubmit = (values, formikBag) => {
    dispatch(ActionCreators.createTaskRequest(values));
    formikBag.resetForm();
  };

  return (
    <Formik initialValues={values} onSubmit={onSubmit}>
      <Form>
        <div>
          <Field name='body' className={styles.inputTodo} />
          <button type='submit' className={styles.button}>
            Create Task
          </button>
          <button type='reset' className={styles.button}>
            Reset Task
          </button>
        </div>
        <Field name='deadline' type='date' className={styles.inputDeadline} />
      </Form>
    </Formik>
  );
};

export default TaskForm;
