import { useContext, useRef, useState } from "react";
// import { AuthContext } from "../../provider/AuthProvider";
import { useForm } from "react-hook-form"
import { Helmet } from "react-helmet-async";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const Register = () => {
    // const { createUser, updateUserProfile, logOutUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const formRef = useRef(null);

    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, formState: { errors }, } = useForm();

    const handleRegister = (data) => {
        const { emailRequired, passwordRequired, fullNameRequired, photoUrlRequired } = data;

        if (!/^(?=.*[A-Z])(?=.*[a-z]).{6,}$/.test(passwordRequired)) {
            toast.error("Please provide a valid password.");
            return;
        }

        // createUser(emailRequired, passwordRequired)
        //     .then(() => {
        //         updateUserProfile(fullNameRequired, photoUrlRequired)
        //             .then(() => {
        //                 toast.success("User registered successfully");
        //                 logOutUser()
        //                     .then(() => {
        //                         navigate("/login");
        //                     })
        //                 navigate(location?.state ? location.state : "/");
        //                 formRef.current.reset();
        //             })
        //             .catch((error) => {
        //                 console.log(error);
        //                 toast.error("Error updating user profile");
        //             });
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //         toast.error(error.message);
        //     });
    }

    return (
        <div className="hero min-h-screen sm:bg-[url('https://i.ibb.co/nCRXBkF/pexels-vecislavas-popa-1571470.jpg')] bg-cover">
            <Helmet>
                <title>HospitalityHub | Register </title>
            </Helmet>
            <div className="card shrink-0 w-full max-w-sm my-2 md:my-5 shadow-2xl bg-[#71707080]">
                <form ref={formRef} onSubmit={handleSubmit(handleRegister)} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Full Name</span>
                        </label>
                        <input {...register("fullNameRequired", { required: true })} type="text" placeholder="Type your full name" className="input input-bordered" />
                        {errors.fullNameRequired && <span className="text-red-500">This field is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input {...register("photoUrlRequired", { required: true })} type="text" placeholder="Photo Url provide here...." className="input input-bordered" />
                        {errors.photoUrlRequired && <span className="text-red-500">This field is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input  {...register("emailRequired", { required: true })} type="email" placeholder="Input your email..." className="input input-bordered" />
                        {errors.emailRequired && <span className="text-red-500">This field is required</span>}
                    </div>
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input {...register("passwordRequired", { required: true })} type={showPassword ? 'text' : 'password'} placeholder="type your password..." className="input input-bordered" />
                        <span className="absolute top-2/3 right-2" onClick={() => setShowPassword(!showPassword)}> {
                            showPassword ? <FaEye /> : <FaEyeSlash />
                        } </span>
                        {errors.passwordRequired && <span className="text-red-500">This field is required.</span>}
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                    <div className="form-control mx-auto">
                        <label className="label">
                            <span className="label-text text-white">Already have an account ? <Link className="text-red-600 font-medium" to={"/login"}>Log In</Link></span>
                        </label>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
