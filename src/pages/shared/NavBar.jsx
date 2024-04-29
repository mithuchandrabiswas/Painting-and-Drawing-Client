import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthContextProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = async () => {
        try {
            await logOut();
            toast.success("Sign out Successfully");
        } catch (error) {
            console.error("Error signing out:", error);
            toast.error("Error signing out");
        }
    };

    const navLinks = (
        <>
            <li><NavLink to={"/"}>Home</NavLink></li>
            <li><NavLink to={"/allart&craft"}>All Art & Craft</NavLink></li>
            {user && (
                <>
                    <li><NavLink to={"/addcraft"}>Add Craft</NavLink></li>
                    <li><NavLink to={"/myart&craft"}>My Art & Craft</NavLink></li>
                </>
            )}
        </>
    );

    return (
        <div className="navbar">
            <ToastContainer />
            <div className="navbar-start">
                <div className="dropdown z-10">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] shadow bg-base-100 rounded w-40">
                        {navLinks}
                        <li>
                            <Link to={'/register'}>
                                <button className="btn btn-sm btn-outline text-sky-900 font-bold">Register</button>
                            </Link>
                        </li>
                        <li>
                            {user ? (
                                <div className="dropdown dropdown-hover">
                                    <div tabIndex={0}><img className="rounded-full w-8 h-8" src={user?.photoURL || "https://i.ibb.co/y0yrnYQ/1681283571946.jpg"} alt="User Avatar" /></div>
                                    <ul tabIndex={0} className="dropdown-content top-full right-0 z-[1] menu p-2 shadow bg-base-100 rounded-box w-36 md:w-52">
                                        <button className="block w-full text-left px-4 py-2 text-xs md:text-sm text-gray-700 hover:bg-gray-100">
                                            {user?.displayName || 'User Name Not Found'}
                                        </button>
                                        <button
                                            className="block w-full text-left px-4 py-2 text-xs md:text-sm text-gray-700 hover:bg-gray-100"
                                            onClick={handleLogOut}
                                        >
                                            Log Out
                                        </button>
                                    </ul>
                                </div>
                            ) : (
                                <Link to='/login'>
                                    <button className="btn btn-sm btn-ghost">Log In</button>
                                </Link>
                            )}
                        </li>
                    </ul>
                </div>
                <Link to={"/"} className="text-md md:text-xl font-bold text-cyan-600">Artistry<span className="text-amber-400">Hub</span>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-x-2">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end gap-2 hidden lg:flex">
                <Link to={'/register'}>
                    <button className="btn btn-sm btn-outline text-sky-900 font-bold">Register</button>
                </Link>
                {user ? (
                    <div className="dropdown dropdown-hover">
                        <div tabIndex={0}><img className="rounded-full w-6 h-6" src={user?.photoURL || "https://i.ibb.co/y0yrnYQ/1681283571946.jpg"} alt="User Avatar" /></div>
                        <ul tabIndex={0} className="dropdown-content top-auto right-0 z-[4] menu p-2 shadow bg-base-100 rounded-box w-48">
                            <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                {user?.displayName || 'User Name Not Found'}
                            </button>
                            <button
                                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                onClick={handleLogOut}
                            >
                                Log Out
                            </button>
                        </ul>
                    </div>
                ) : (
                    <Link to='/login'>
                        <button className="btn btn-sm btn-outline text-sky-900 font-bold">Log In</button>

                    </Link>
                )}
            </div>
        </div>
    );
};

export default NavBar;
