import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styles from './WinnerForm.module.sass';
import nail from '../../images/nail.png';
import tigerPaw from '../../images/tiger-paw.png';
import { VALIDATON_SCHEMA } from '../../utilits/validationSchema';

function WinnerForm({ onReset, dispatch, state: { isEng } }) {
  const [photo, setPhoto] = useState(null);

  const handlePhotoChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const photoUrl = reader.result;
      dispatch({
        type: 'SUBMIT_WINNER_FORM',
        payload: { ...values, photo: photoUrl },
      });
    };
    if (photo) {
      reader.readAsDataURL(photo);
    }
    onReset();
    resetForm();
    setSubmitting(false);
  };

  return (
    <section className={styles['form-container']}>
      <Formik
        initialValues={{ name: '', age: '', hobby: '' }}
        validationSchema={VALIDATON_SCHEMA}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, setFieldValue }) => (
          <Form className={styles['winner-form']}>
            <div className={styles.pin}>
              <img src={nail} alt='nail' />
            </div>
            <h2 className={styles.title}>
              <span>&#9886;</span>
              {isEng ? 'Winner form' : 'Форма чемпіона'}
              <span>&#9887;</span>
            </h2>

            <label className={styles.label}>
              <Field className={styles.gate} type='text' name='name' />
              <span>{isEng ? 'Name' : "Ім'я"}</span>
              <ErrorMessage
                name='name'
                component='p'
                className={styles.error}
              />
            </label>
            <label className={styles.label}>
              <Field type='number' name='age' />
              <span>{isEng ? 'Age' : 'Вік'}</span>
              <ErrorMessage name='age' component='p' className={styles.error} />
            </label>
            <label className={styles.label}>
              <Field type='text' name='hobby' />
              <span>{isEng ? 'Hobby' : 'Хобі'}</span>
              <ErrorMessage
                name='hobby'
                component='p'
                className={styles.error}
              />
            </label>
            <label className={styles.label}>
              <input
                type='file'
                accept='image/*'
                onChange={(e) => {
                  handlePhotoChange(e);
                  setFieldValue('photo', e.target.files[0]);
                }}
              />
              <span>{isEng ? 'Photo' : 'Фото'}</span>
            </label>
            <button
              className={styles['btn-play']}
              type='submit'
              disabled={isSubmitting}
            >
              {isEng ? 'Sent' : 'Відправити'}
            </button>
            <img
              src={tigerPaw}
              alt='paw'
              className={styles['form-img-right']}
            />
            <img src={tigerPaw} alt='paw' className={styles['form-img-left']} />
          </Form>
        )}
      </Formik>
    </section>
  );
}

export default WinnerForm;
