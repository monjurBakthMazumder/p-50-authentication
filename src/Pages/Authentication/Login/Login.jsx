import { useRef, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import useAuth from "../../../Hock/useAuth";
import swal from 'sweetalert';
const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const {loginUser, forgetPassword} = useAuth()
    const emailRef = useRef()
    const navigate = useNavigate()
    const submitForm = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        // login user
        loginUser(email, password)
        .then(()=> {
            navigate('/')
            swal("Login!", "Login successfully!", "success");
        })
        .catch(()=> {
            swal("Oops!", "Email or password incorrect!", "error");
        })
    }
    const handleForgetPassword = () => {
        const email = emailRef.current.value;
        if(!/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(email)){
            return swal("Oops!", "Please enter a valid email address!", "error");
        }
        forgetPassword(email)
        .then(()=>{
            swal("Check email!", "Check email and set new password!", "success");
        })
    }
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Login now!</h1>
                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border">
                    <SocialLogin/>
                <form className="card-body pt-0" onSubmit={submitForm}>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input 
                        type="email" 
                        ref={emailRef}
                        name="email" 
                        placeholder="Email" 
                        className="input input-bordered" 
                        required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <div className="relative">    
                        <input 
                            type={showPassword ? "text" : "password" }
                            name="password" 
                            placeholder="Password" 
                            className="input input-bordered w-full pr-10" 
                            required />
                        <span 
                            onClick={()=> setShowPassword(!showPassword)}
                            className="absolute -ml-9 mt-[14px] cursor-pointer text-2xl"
                        >{showPassword ? <AiFillEyeInvisible/> : <AiFillEye/>}</span>
                    </div>
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover" onClick={handleForgetPassword}>Forgot password?</a>
                    </label>
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                    </div>
                    <p className="text-xs text-center mt-5">New here, Please <Link to={'/register'} className="font-bold cursor-pointer underline text-blue-700">Register</Link></p>
                </form>
                </div>
            </div>
        </div>
    );
};

export default Login;