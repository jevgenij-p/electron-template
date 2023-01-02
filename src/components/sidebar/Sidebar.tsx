import React from 'react'

export default function Sidebar() {
    const content = {
        padding: '2rem 1.5rem',
    }

    return (
        <div style={content} className='sidebar'>
            <h5>Sidebar</h5>
            <ul>
                <li>Item&nbsp;1</li>
                <li>Item&nbsp;2</li>
                <li>Item&nbsp;3</li>
            </ul>
        </div>
    )
}