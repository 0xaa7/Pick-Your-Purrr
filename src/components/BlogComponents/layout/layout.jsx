import React from 'react'
import Navbar from '../../navbar/Navbar'
import Footer from '../footer/Footer'
import "./layout.scss"

function Layout({ children }) {
    return (
        <div className='layoutcontainer'> 
            {/* Navbar  */}
            <Navbar />

            {/* main Content  */}
            <div>
                {children}
            </div>

            {/* Footer  */}
            <Footer />
        </div>
    )
}

export default Layout