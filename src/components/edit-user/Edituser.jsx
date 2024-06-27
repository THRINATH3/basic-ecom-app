import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { Userlogincontext } from '../../context/Userlogincontext';
import { useNavigate } from 'react-router-dom';
function Edituser() {
    let {register,handleSubmit,setValue, formState: { errors }}=useForm();
    let {currentUser,setCurrentUser}=useContext(Userlogincontext);
    let navigate=useNavigate();
    async function onsave(newdetails)
    {
        try {
            const res = await fetch(`http://localhost:3000/users/${currentUser.id}`, {
                method: "PUT",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(newdetails)
            });

            if (res.status === 200) {
                newdetails.id = currentUser.id;
                setCurrentUser(newdetails); // Update currentUser context
                navigate('/user-profile'); // Navigate to user profile page
              } else {
                console.error('Failed to update user');
              }
            } catch (error) {
              console.error('Error updating user:', error);
            }
    }

  return (
    <div>
        <form className='mx-auto mb-5 bg-light p-3 w-50 mt-5'onSubmit={handleSubmit(onsave)} >
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            className="form-control"
                            {...register("username", { required: true })}
                            value={setValue('username',currentUser.username)}
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
                            value={setValue('password',currentUser.password)}
                            disabled
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
                            value={setValue('email',currentUser.email)}
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
                            value={setValue('pno',currentUser.pno)}
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
                            value={setValue('profile',currentUser.profile)}
                            disabled
                        />
                        {errors.profile?.type === 'required' && <p className='text-danger lead'>*Profile is required</p>}
                    </div>
                    <div className='text-center'>
                        <button type="submit" className="btn btn-danger mt-3">Save and Submit</button>
                    </div>
                </form>
    </div>
  )
}
export default Edituser