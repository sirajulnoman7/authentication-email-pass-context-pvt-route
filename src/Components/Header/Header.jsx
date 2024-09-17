import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FirebaseContext } from '../AuthContext/AuthContext';

const Header = () => {
    const { logOut, user } = useContext(FirebaseContext)
    const links = <>
        <li className='mr-3'><NavLink to={'/'}>Home</NavLink></li>
        <li className='mr-3'><NavLink to={'/login'}>Login</NavLink></li>
        <li className='mr-3'><NavLink to={'/register'}>Register</NavLink></li>
        <li className='mr-3'><NavLink to={'/orders'}>Orders</NavLink></li>
        {user && <>
            <li className='mr-3'><NavLink to={'/profile'}>Profile</NavLink></li>
            <li className='mr-3'><NavLink to={'/dashboard'}>Dashboard</NavLink></li>
        </>}
    </>
    const handleLogout = () => {
        logOut()
            .then()
            .catch(error => console.error(error))
    }
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <>
                            <p>{user.email}</p>
                            <a onClick={handleLogout} className="btn">Sign Out</a>
                        </> : <><button><Link to={'/login'}>Login</Link></button></>
                    }

                </div>
            </div>
        </div>
    );
};

export default Header;