import React, { useContext } from 'react';
import { FirebaseContext } from '../AuthContext/AuthContext';
import { sendEmailVerification, updateProfile } from 'firebase/auth';

const Register = () => {
    const {firebaseAuthEmailPassword} = useContext(FirebaseContext)
    
    const handlerSubmit =(e)=>{
        e.preventDefault()
        const userName=e.target.name.value
        const email=e.target.email.value 
        const password=e.target.password.value 
        console.log(userName,email,password)
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        if(!passwordRegex.test(password)){
            return alert('Password must be at least 8 characters, contain at least one uppercase letter, one lowercase letter, and one number.')
        }

    //    create user email pass 
       firebaseAuthEmailPassword(email,password)
       .then(result=>{
        // update user 
        updateProfile(result.user, {
            displayName: userName, photoURL: "https://example.com/jane-q-user/profile.jpg"
          })
          .then()
          .catch(error=>console.error(error))
        // sed verification
        sendEmailVerification(result.user)
        .then(alert('user verify'))
        // ______

        .catch(error=>console.log(error))
        console.log(result.user)})
       .catch(error=>console.log(error.message))
        
    }

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col ">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                       
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handlerSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                            </div>
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
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;