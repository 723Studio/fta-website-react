import React from 'react'
import { useDispatch } from 'react-redux'
import { useAuth } from '../hook/use-auth'
import { NavLink } from 'react-router-dom'
import {NavDropdown} from 'react-bootstrap';
import { removeUser } from 'store/slices/userSlice';

const LoginNavComponent = () => {
    const {isAuth, email} = useAuth();
    const dispatch = useDispatch();

    if (!isAuth)
    {
        return (
            <NavLink to='/login' className="nav-link">Login</NavLink>
        );
    }
    else
    {
        return (
            <NavDropdown title={email} id="basic-nav-dropdown" menuVariant='dark'>
                <NavDropdown.Item href="#action/3.2">
                Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={() => dispatch(removeUser)} href='/'>
                Sign out
                </NavDropdown.Item>
            </NavDropdown>
        );
    }
}

export {LoginNavComponent}
