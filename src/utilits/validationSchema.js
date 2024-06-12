import * as yup from 'yup';

export const VALIDATON_SCHEMA = yup.object().shape({
  name: yup.string().trim().min(2).max(30).required('Name is required'),
  age: yup
    .number()
    .required('Age is required')
    .positive('Age must be positive')
    .integer('Age must be integer')
    .min(1)
    .max(150),
  hobby: yup.string().trim().min(2).max(40).required('Hobby is required'),
});
