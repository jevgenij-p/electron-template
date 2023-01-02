import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../services/redux/hooks'
import { logout } from '../../services/redux/slices/authSlice'

export default function Header() {
    const content = {
        padding: '.5em 2em',
    }

    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const isAuthorized = useAppSelector((state) => state.auth.isAuthorized)

    const handleLogout = () => {
        dispatch(logout());
        navigate('/')
    }
    
    return (
        <div className='header'>
            <div style={content} className='content'>
                <div className='fill-row '>
                    <div><Link to='/'>Home</Link></div>
                </div>
                {!isAuthorized && <div><Link to='/login'>Sign in</Link></div>}
                {isAuthorized && <div><Link to='' onClick={handleLogout}>Sign out</Link></div>}
            </div>
        </div>
    )
}