

import { useContext } from "react";
import { AuthContext } from "../provider/AuthContextProvider";

const Home = () => {
    // const {userInfo} = useContext(AuthContext);
    // console.log(userInfo);
    const authInfo = useContext( AuthContext)
    const {name,age,location} = authInfo;
    return (
        <div>
            <h1>Home Pages</h1>
            <h2>{name}</h2>
            <h2>{age}</h2>
            <h2>{location}</h2>
        </div>
    );
};

export default Home;