import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const { googleSignIn } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    
    const handlegoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName
                }
                axiosPublic.post("/users", userInfo)
                    .then(res => {
                        console.log(res.data);
                     navigate("/")   
                })

            })
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