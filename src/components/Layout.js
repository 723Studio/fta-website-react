import React from 'react';
import Navibar from './Navibar'
import {Outlet, Link} from 'react-router-dom'
import JetBrains from '../assets/jb_beam.png';

const Layout = () => {
    return (
        <>
        <header>
            <Navibar/>
        </header>

        <main className='container'>
            <Outlet/>
        </main>

        
        </>
    )
}

export {Layout}