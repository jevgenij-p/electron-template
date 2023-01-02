import * as yup from 'yup'

export const loginValidationSchema = yup.object().shape({
    email: yup.string()
        .required('Email is required')
        .email('Invalid email format')
        .max(100, 'Maximum length is ${max} characters'),
    password: yup.string()
        .required('Password is required')
        .min(6, 'Password must be at least ${min} characters')
        .max(100, 'Maximum length is ${max} characters')
})