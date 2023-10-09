import { useNavigate } from "react-router-dom";
import useAuth from "../../../Hock/useAuth";
import swal from 'sweetalert';
const SocialLogin = () => {
    const {googleLogin, GithubLogin} = useAuth();
    const navigate = useNavigate()
    const handleSocialLogin = media => {
        media()
        .then(()=>{
            navigate('/')
            swal("Login!", "Successfully login!", "success");
        })
    }
    return (
        <>
            <div className="flex justify-center items-center gap-5 mt-10">
                <button className="btn" onClick={()=> handleSocialLogin(googleLogin)}>Google</button>
                <button className="btn" onClick={()=> handleSocialLogin(GithubLogin)}>GitHub</button>
            </div>
            <div className="divider mb-0">OR</div>
        </>
    );
};

export default SocialLogin;