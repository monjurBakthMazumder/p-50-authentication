
import { sendEmailVerification } from "firebase/auth";
import swal from 'sweetalert';
import useAuth from "../../Hock/useAuth";
const EmailVerification = () => {
    const {user} = useAuth()
    const handleEmailVerification = () => {
        sendEmailVerification(user)
            .then(()=>{
                swal("Check email!", "Check email and verified it!", "success");
            })
    }
    return (
        <div className='flex flex-col justify-center items-center gap-5 min-h-[80vh]'>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold">Please verified your email</h1>
            <button className="btn btn-primary" onClick={handleEmailVerification}>Send verification</button>
        </div>
    );
};

export default EmailVerification;