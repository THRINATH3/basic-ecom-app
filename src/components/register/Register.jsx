import React from 'react';
import './Register.css';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    let navigate = useNavigate();
    let [err,seterr]=useState('');
    async function submitUser(user) {
        try{
        let res=await fetch('https://user-api-q5az.onrender.com/users',{
        method:"POST",
        headers:{"Content-type":"application/json"},
        body: JSON.stringify(user)})
        if(res.status==201)
            navigate('/login');
        else
        seterr('Failed to register');}
    catch{
        console.log('Failed to register');
        seterr('Failed to register');}
    }

    return (
        <div className='phil'>
            <p className='display-3 text-center phil mt-3'>User Registration</p>
            {err.length!=0&&<p className='text-danger phil text-center'>{err}</p>}
            <div className='col-11 col-sm-10 col-md-6 mx-auto'>
                <form className='mx-auto mb-5 mt-5 bg-light p-3' onSubmit={handleSubmit(submitUser)}>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            className="form-control"
                            {...register("username", { required: true })}
                        />
                        {errors.username?.type === 'required' && <p className='text-danger lead'>*Username is required</p>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className="form-control"
                            {...register("password", { required: true })}
                        />
                        {errors.password?.type === 'required' && <p className='text-danger lead'>*Password is required</p>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="form-control"
                            {...register("email", { required: true })}
                        />
                        {errors.email?.type === 'required' && <p className='text-danger lead'>*Email is required</p>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="pno" className="form-label">Phone Number</label>
                        <input
                            type="number"
                            name="pno"
                            id="pno"
                            className="form-control"
                            {...register("pno", { required: true })}
                        />
                        {errors.pno?.type === 'required' && <p className='text-danger lead'>*Phone Number is required</p>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="profile" className="form-label">PRofile Image</label>
                        <input
                            type="text"
                            name="profile"
                            id="profile"
                            className="form-control"
                            {...register("profile", { required: true })}
                        />
                        {errors.profile?.type === 'required' && <p className='text-danger lead'>*Profile is required</p>}
                    </div>
                    <div className='text-center'>
                        <button type="submit" className="btn btn-primary mt-3 kk">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;
