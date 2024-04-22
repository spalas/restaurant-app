import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";


const SocialLogin = () => {
    const { googleSignIn } = useAuth();
    
    const handlegoogleSignIn = () => {
        googleSignIn()
            .then(result => { console.log(result.user) })
     }



    return (
        <div className="p-2">
            <div className="divider"></div>
            <div className="p-6">
                <button onClick={handlegoogleSignIn} className="btn btn-primary">
                    <FaGoogle className="mr-4"></FaGoogle>
                  Google login
                    </button>
            </div>
        </div>
    );
};

export default SocialLogin;