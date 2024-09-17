import React, { useContext } from 'react';
import { FirebaseContext } from '../AuthContext/AuthContext';
import { Navigate, useNavigate } from 'react-router-dom';

const Login = () => {
    const {signInUser,signInWithGoogle}=useContext(FirebaseContext)
    const navigate=useNavigate()
    const handlerLogin =e=>{
        e.preventDefault()
        const email=e.target.email.value 
        const password=e.target.password.value 
        console.log(email,password)
        // signIn user 
        signInUser(email,password)
        .then(result=>{
            const user=result.user 
            // reset the from
            e.target.reset()
            //  after login navigate to home page,
           navigate('/')
            // verify email or not check
            if(!user.emailVerified){
              return alert('please verify your email')
            }
            console.log(user)
        })
        .catch(error=>console.error(error))
    }

    //   sing in with google 
    const handlerGoogleLogin =()=>{
        signInWithGoogle()
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>console.log(error))
    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col ">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                       
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handlerLogin} className="card-body">
                            
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                               
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <div className="form-control mt-6">
                               
                               <button onClick={handlerGoogleLogin} className="btn btn-ghost">Google</button>
                           </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;