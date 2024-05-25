import { Link, useLocation, useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import UseAuth from "../../Hooks/UseAuth";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import SocialLogin from "../SocialLogin/SocialLogin";
import { Zoom } from "react-awesome-reveal";

const Login = () => {
    const { loginUser } = UseAuth();
    const [showPassword, setShowPassword] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    // navigation system
    const navigate = useNavigate();
    const location = useLocation();
    const form = location?.state;

    const onSubmit = data => {
        const { email, password } = data;
        loginUser(email, password)
            .then(result => {
                if (result.user) {
                    navigate(form);
                    toast.success("Login successful");
                }
                else {
                    toast.error("Invalid email or password")
                }
            })
            .catch(error => {
                console.error(error)
                toast.error("An error occurred. Please try again later.");
            })
    }
    return (
        <Zoom>
            <div className="bg-base-200 py-10">
                <h2 className="text-5xl font-bold text-center">Please Login</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="md:w-3/4 lg:w-1/2 mx-auto py-12">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered"  {...register("email", { required: true })} />
                        {errors.email && <span className="text-red-500">This field is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <div className="join">
                            <input type={showPassword ? 'text' : 'password'} placeholder="password" name="password" className="w-full input input-bordered" {...register("password")} required />
                            <FaEye className="my-auto -ml-8" onClick={() => setShowPassword(!showPassword)} />
                    </div>
                        {errors.password && <span className="text-red-500">{errors.password.message}</span>}
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-blue-400  text-white">Login</button>
                    </div>
                </form>
                <p className="text-center">Do not have an account? <Link to='/register'><span className="text-warning-content font-bold text-lg underline">Register</span></Link></p>
                <SocialLogin></SocialLogin>
                <ToastContainer></ToastContainer>
            </div>
        </Zoom>
    );
};

export default Login;