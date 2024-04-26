import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import auth from '../firebase/firebase.config'
import { createContext, useState } from "react";


export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState('');
    const [loading, setLoading] = useState(true);

    // New User Create
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Sign In by Email and Password
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    // Sign In by Google
    const googleLogIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    // Sign In by Google
    const githubLogIn = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    }


    const authInfo = { user, setUser, loading, createUser, signInUser, googleLogIn, githubLogIn }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;