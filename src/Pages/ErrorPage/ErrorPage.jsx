import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className='flex flex-col justify-center items-center min-h-[80vh] gap-5'>
            <h1 className="text-5xl sm:text-7xl xl:text-9xl font-bold">404</h1>
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold">Page not found</p>
            <Link to={'/'} className="btn btn-primary">Go home</Link>
        </div>
    );
};

export default ErrorPage;