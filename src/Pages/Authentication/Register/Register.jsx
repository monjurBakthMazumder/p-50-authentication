import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import useAuth from "../../../Hock/useAuth";
import { updateProfile, sendEmailVerification } from "firebase/auth";
import swal from 'sweetalert';
const Register = () => {
    const [showPassword, setShowPassword] = useState(false)
    const {createUser} = useAuth()

    const navigate = useNavigate()
    const submitForm = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        if(password?.length < 6){
            return swal("Oops!", "Password must be at least 6 characters or longer!", "error")
        }
        //create user
        createUser(email ,password)
        .then(result => {
            updateProfile(result.user, {
                displayName: name, 
                photoURL: photo,
              })
            sendEmailVerification(result.user)
            .then(()=>{
                swal("Check email!", "Check email and verified it!", "success");
            })
            navigate('/')
        })
        .catch(() => {
            swal("Oops!", "Email already exits!", "error");
        })
    }
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Register now!</h1>
                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border">
                    <SocialLogin/>
                <form className="card-body pt-0" onSubmit={submitForm}>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="Your name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo url</span>
                    </label>
                    <input type="text" name="photo" placeholder="Photo url" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
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
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn btn-primary">Register</button>
                    </div>
                    <p className="text-xs text-center mt-5">Already have account, Please <Link to={'/login'} className="font-bold cursor-pointer underline text-blue-700">login</Link></p>
                </form>
                </div>
            </div>
        </div>
    );
};

export default Register;