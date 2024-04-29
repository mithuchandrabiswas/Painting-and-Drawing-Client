import { Outlet } from "react-router-dom";
import NavBar from '../pages/shared/NavBar'
import Footer from '../pages/shared/Footer'

const Root = () => {
    return (
        <div className="mx-3 md:mx-5 lg:mx-8">
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;