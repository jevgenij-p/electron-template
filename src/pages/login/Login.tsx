import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { ErrorMessage } from '@hookform/error-message'
import { loginValidationSchema } from './validation'
import { useAppDispatch } from '../../services/redux/hooks'
import { login, logout, AuthState } from '../../services/redux/slices/authSlice'
import { post } from '../../services/utils/api'
import { setValidationErrors } from '../../services/utils/validation'

type FormData = {
    email: string
    password: string
    remember: boolean
}

export default function Login() {

    useEffect(() => { document.title = 'Sign in' }, [])
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const [ state, setState ] = useState({ accessDenied: false })
    const { register, formState, handleSubmit, setError } = useForm<FormData>({
        resolver: yupResolver(loginValidationSchema)
    })

    const onSubmit = async (data: FormData) => {

        setState({...state, accessDenied: false })

        const response = await post('/api/auth/login', data)

        if (response.ok) {
            const result = await response.json()
            dispatch(login({
                userName: result.userName,
                role: result.role,
                token: result.token,
                remember: data.remember
            } as AuthState
            ))
            navigate('/main')
        }
        else {
            console.log('error')
            dispatch(logout())

            if ([401, 403].includes(response.status)) {
                setState({...state, accessDenied: true })
            }
            else {
                setValidationErrors(data, response, setError)
            }
        }
    }

    const onError = (errors: any, e: any) => console.log(errors, e)

    return (
        <div className='content centered'>
            <div className='column'>
                <div>
                    <h2 className='display-6'>Sign in</h2>
                </div>

                <form onSubmit={handleSubmit(onSubmit, onError)}>
                    <div>
                        <input {...register('email')} id='email' placeholder='Email' type='email' className='form-control' />
                        <ErrorMessage errors={formState.errors} name="email" render={ 
                            ({ message }) => <div className='invalid'>{message}</div> }/>
                    </div>
                    <div>
                        <input {...register('password')} id='password' placeholder='Password' type='password' className='form-control' />
                        <ErrorMessage errors={formState.errors} name="password" render={
                            ({ message }) => <div className='invalid'>{message}</div> }/>
                    </div>
                    <div className='form-check'>
                        <input className='form-check-input' {...register('remember')} id='remember' type='checkbox' value='' />
                        <label className='form-check-label' htmlFor='remember'>Stay signed in</label>
                    </div>
                    {state.accessDenied && <div className='invalid'>Access denied</div>}
                    <div className='d-grid'>
                        <button type='submit' className='btn btn-primary' disabled={formState.isSubmitting}>Sign in</button>
                    </div>
                </form>
                <div>
                    <Link to={'/'}>Forgot your password?</Link>
                </div>
                <div>
                    Don&apos;t have an account? <Link to={'/'}>Create one</Link>
                </div>
            </div>
        </div>
    )
}