import { Outlet } from "react-router-dom";
import Navbar from "../Component/Shared/Navbar/Navbar";
import Footer from "../Component/Shared/Footer/Footer";

const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            <div className="min-h-[80vh]">
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default MainLayout;