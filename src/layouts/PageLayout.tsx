import React from 'react'
import Header from './header/Header'
import Sidebar from '../components/sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

export default function PageLayout() {
    return (
        <React.Fragment>
            <Header />
            <div className='main'>
                <div className='content'>
                    <Sidebar />
                    <div className='page'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}