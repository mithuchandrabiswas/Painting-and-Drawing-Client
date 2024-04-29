
import { Link } from "react-router-dom";


const ErrorPages = () => {
    return (
        <div>
            <div className="bg-slate-200 p-4 md:w-1/3 text-center flex flex-col mx-auto space-y-3 mt-6 rounded-lg justify-center items-center">
                <img className="text-center" src="https://i.ibb.co/YjjvMGd/4440886-200.png" alt="" />
                <h1>Opps!!! Something happen wrong. Please Check your url link and hite the correct url.</h1>
                <Link to={"/"}> <button className="btn btn-error">Go Home</button> </Link>
            </div>
        </div>
    );
};

export default ErrorPages;