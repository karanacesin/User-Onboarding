import * as yup from 'yup'


const FormValidation = yup.object().shape({
  name: yup.string()
    .trim()
    .min(3, 'Name must be at least three characters long')
    .required('Name is a required'),

  email: yup.string()
    .trim()
    .email('Email must be a valid email address')
    .required('Email is a required'),

  password: yup.string()
    .min(8, 'Password must be a least eight characters long')
    .required('Password is a required'),

  terms: yup.string()
    .required('Terms of service is required'),
})

export default FormValidation
