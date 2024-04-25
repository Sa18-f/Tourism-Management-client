import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/allSpots">All Spot</NavLink></li>
        <li><NavLink to="/addSpot">Add Spot</NavLink></li>
        <li><NavLink to="/myList">My List</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <a className="flex items-center lg:text-xl font-bold text-md"><img className="w-8" src="https://i.ibb.co/1KwHxcw/travel-tropic-holiday-logo-template-modern-design-summer-139372-834-removebg-preview-1.png" alt="" /> JourneyMingle</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end lg:gap-3">
                <Link to="/login">
                    <a className="btn bg-green-500 text-white">Login</a>
                </Link>
                <Link to="/register">
                    <a className="btn bg-blue-400 text-white">Register</a>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;