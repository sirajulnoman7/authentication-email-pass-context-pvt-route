import React, { useContext } from 'react';
import { FirebaseContext } from '../AuthContext/AuthContext';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loader}=useContext(FirebaseContext)
    //   must you will set loader spinner with conditions 
    if(loader){
        return <p><span className="loading loading-spinner loading-lg"></span>
</p>
    }
    if(user){
        return children
    }
    return <Navigate to={'/login'}></Navigate>
};

export default PrivateRoute;