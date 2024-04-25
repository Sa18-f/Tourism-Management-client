import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";


const Root = () => {
    return (
        <div className="max-w-[1170px] mx-auto font-lexend">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;