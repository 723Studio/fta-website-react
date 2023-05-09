import React from 'react';
import { Link } from 'react-router-dom';
// import PageNotFound from '../assets/PageNotFound.jpg';


const NotFoundPage = () => {
    return (
        <div>
            <h1 >OOOPS! Page not found!</h1>
        {/* <img src={PageNotFound} alt="PageNotFound" className="d-inline-block"/> */}
        <p style={{textAlign:"center"}}>
        <Link to="/">Go to Home </Link>
        </p>
    </div>
    )
}

export {NotFoundPage}