import "./Login.css";
import { useForm } from "react-hook-form";
import {useContext} from 'react';
import { Userlogincontext } from "../../context/Userlogincontext";
import {useNavigate} from 'react-router-dom'
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Login() {

  let { loginUser,userLoginStatus,err}=useContext(Userlogincontext)
  //const [userLoginErr, setUserLoginErr] = useState('')
  const navigate=useNavigate()

  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  //on user submit
   function onUserLogin(userCred) {
   
    loginUser(userCred)
    console.log(userLoginStatus)
   
  }

  useEffect(()=>{
    if(userLoginStatus===true){
      navigate('/user-profile')
    }
  },[userLoginStatus])

  
  return (
    <div className="phil">
      <p className="display-5 mt-5 text-center">Login</p>
      {/* registration form */}
      <div className="row ">
        <div className="col-11 col-sm-10 col-md-6 mx-auto">
          {/* other error message */}
          {/* {setUserLoginStatus===false &&userLoginErr.length!==0&& (
            <p className="fs-2 text-danger text-center">{err}</p>
          )} */}
          {
            err.length!==0&&<p className="phil text-danger d-3">{err}</p>
          }
          <form
            className="mx-auto mt-5 bg-light p-3"
            onSubmit={handleSubmit(onUserLogin)}
          >
            {/* username */}
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                id="username"
                className="form-control"
                {...register("username", { required: true })}
              />
              {/* validation error message on username */}
              {errors.username?.type === "required" && (
                <p className="text-danger lead">*Username is required</p>
              )}
            </div>
            {/* password */}
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="form-control"
                {...register("password", { required: true })}
              />
              {/* validation error message on password */}
              {errors.password?.type === "required" && (
                <p className="text-danger lead">*Password is required</p>
              )}
            </div>

            {/* submit button */}
            <div className="text-center">
            <button className="btn btn-success kk" type="submit">
              Login
            </button>
            </div>
            <div className="d-flex flex-row">
            <p>If you don't have an account<Link to='../register' className='nav-link text-info'>Register</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;