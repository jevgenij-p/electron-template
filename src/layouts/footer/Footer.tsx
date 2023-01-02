import React from 'react'

export default function Footer() {
    const content = {
        padding: '.5em 2em',
    }
    
    return (
        <footer className='footer'>
            <div style={content} className='content'>
                <div>Footer</div>
            </div>
        </footer>
    )
}