import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../../Hock/useAuth";
import swal from 'sweetalert';
const Navbar = () => {
    const {user, logOut} = useAuth()

    const navigate = useNavigate()

    const handleLogout = () => {
        logOut()
        navigate('/')
        swal("Logout!", "Successfully logout!", "success");
    }
    const navLink = 
    <>
     <li><NavLink to={'/'}>Home</NavLink></li>
     <li><NavLink to={'/iphone'}>Iphone</NavLink></li>
     <li><NavLink to={'/samsung'}>Samsung</NavLink></li>
     <li><NavLink to={'/oppo'}>Oppo</NavLink></li>
     <li><NavLink to={'/huawei'}>Huawei</NavLink></li>
    </>
    return (
        <nav className="navbar bg-base-100 border-b-4 border-gray-900 px-[5%]">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    {navLink}
                </ul>
                </div>
                <Link to={'/'} className="btn btn-ghost normal-case text-xl sm:text-2xl lg:text-3xl">Fake Shop</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLink}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    !user
                    ?
                    <Link to={'/login'} className="btn">Login</Link>
                    :
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                            <img src={user?.photoURL} />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-60">
                            <li><a>{user?.displayName?.slice(0,25)}</a></li>
                            <li onClick={handleLogout}><a>Logout</a></li>
                        </ul>
                    </div>
                }
            </div>
        </nav>
    );
};

export default Navbar;