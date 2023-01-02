import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
    const content = {
        padding: '2rem 4rem',
    }

    return (
        <div style={content} className='page'>
            <div className='d-flex flex-row justify-content-center'>
                <div className='d-flex flex-column'>
                    <h2 className='display-6'>Page not found</h2>
                    <Link to='/'>Go to the home page</Link>
                </div>
            </div>
        </div>
    )
}