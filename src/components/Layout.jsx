import React from 'react';
import Navibar from './Navibar'
import Footer from './Footer'
import {Outlet} from 'react-router-dom'
import { ParalaxBox } from './ParalaxBox';

const Layout = () => {
    return (
        <>
        <header>
            <Navibar/>
        </header>

        <ParalaxBox/>
        <main className='container'>
            
            <Outlet/>
        </main>

        <footer className='card-body text-center text-lg-start mt-4'>
        {/* style={{position: 'fixed', bottom: '0', width: '100%'}} */}
            <Footer/>
        </footer>
        
        </>
    )
}

export {Layout}