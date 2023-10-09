import { useNavigate } from "react-router-dom";
import useAuth from "../../Hock/useAuth";

const Home = () => {
    const {user} = useAuth()
    const navigate = useNavigate()
    const handleGetStart = () => {
        if(user){
            navigate('/iphone')
        }
        else{
            navigate('/login')
        }
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <figure>
                    <img src="https://i.ibb.co/JdbFjfL/7.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                </figure>
                <div>
                <h1 className="text-5xl font-bold">Box Office News!</h1>
                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <button className="btn btn-primary" onClick={handleGetStart}>Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Home;