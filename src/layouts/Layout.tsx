import React from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <React.Fragment>
            <Header />
            <div className='main'>
                <div className='content'>
                    <Outlet />
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}