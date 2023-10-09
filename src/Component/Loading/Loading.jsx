import { HashLoader } from "react-spinners";

const Loading = () => {
    return (
        <div className='flex justify-center items-center min-h-[80vh]'>
            <HashLoader color="#0000FF"  size={100}/>
        </div>
    );
};

export default Loading;