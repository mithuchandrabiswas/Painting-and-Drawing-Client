import { FaGithub, FaGoogle } from "react-icons/fa";
import { useContext, useState } from "react";
// import { AuthContext } from "../../provider/AuthProvider";
import { useForm } from "react-hook-form"
// import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash} from "react-icons/fa";
// import { toast } from 'react-toastify'; // Import react-toastify

const LogIn = () => {
    const [showPassword, setShowPassword] = useState(false);
    // const { signInUser, googleLogIn, githubLogIn } = useContext(AuthContext);
    // const location = useLocation();
    // const navigate = useNavigate();
    // console.log(user);
    const { register, handleSubmit, formState: { errors }, } = useForm();

    const handleLogIn = (data) => {
        console.log(data) // watch input value by passing the name of it
        // signInUser(data.emailRequired, data.passwordRequired)
        //     .then(() => {
        //         toast.success("User Log in Successfully");
        //         // Navigate after log in
        //         navigate(location?.state ? location.state : "/");
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //         toast.error("Email or Password are don't match. Please check your email & password");
        //     })
    }

    // Google Sign In
    const handleGoogleLogIn = () => {
        // googleLogIn()
        //     .then(() => {
        //         toast.success("User sign in by Google");
        //         navigate(location?.state ? location.state : "/");

        //     })
        //     .catch((error) => {
        //         console.log(error);
        //         toast.error("Google Sign In Failed");
        //     })
    }

    // Github Sign In
    const handleGithubLogIn = () => {
        // githubLogIn()
        //     .then(() => {
        //         toast.success("User sign in by Github");
        //         navigate(location?.state ? location.state : "/");

        //     })
        //     .catch((error) => {
        //         console.log(error);
        //         toast.error("Github Sign In Failed");
        //     })
    }



    return (
        <div className="hero  sm:bg-[url('https://i.ibb.co/K9RgMvV/tierra-mallorca-rg-J1-J8-SDEAY-unsplash.jpg')] bg-cover">
            {/* <Helmet>
                <title>HospitalityHub | Log In</title>
            </Helmet> */}
            <div className="shrink-0 w-full max-w-sm shadow-2xl rounded-md my-3 md:my-5 border sm:bg-[#7170703e]">
                <form onSubmit={handleSubmit(handleLogIn)} className="card-body p-4">
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
                        {errors.passwordRequired && <span className="text-red-500">This field is required</span>}
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Log In</button>
                    </div>
                    <div className="form-control mx-auto">
                        <label className="label">
                            <span className="label-text text-white">Don’t have  account ? Please <Link className="text-red-600 font-medium" to={"/register"}>Register</Link></span>
                        </label>
                    </div>
                    <hr />
                    <h1 className="text-center text-sky-400 font-semibold"> Sign In With: </h1>
                </form>
                <div className="flex flex-col md:flex-row gap-2 justify-center mb-2">
                    <button onClick={handleGoogleLogIn} className="btn btn-sm btn-outline md:text-white"> <FaGoogle></FaGoogle> Google </button>
                    <button onClick={handleGithubLogIn} className="btn btn-sm btn-outline md:text-white"> <FaGithub></FaGithub> Github </button>
                </div>
            </div>
        </div>
    );
};

export default LogIn;