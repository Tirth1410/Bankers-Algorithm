import {NavLink} from "react-router-dom";

const Navbar = () => {
    return(
        <div className="flex justify-between items-center w-full border-b-2 bg-purple-700 px-1 sm:px-10">
            <div className="font-bold text-white text-xl sm:text-4xl p-4">BankersFlow</div>
            <div className="flex justify-center gap-x-5 items-center mx-5">
                <div className="text-md text-white text-sm sm:text-xl font-bold hover:cursor-pointer">
                    <NavLink to="/home">
                        Home
                    </NavLink>
                </div>
                <div className="text-md text-yellow-500 text-sm sm:text-xl font-bold hover:cursor-pointer">
                    <NavLink to="/calculate">
                        Calculate
                    </NavLink>
                </div>
            </div>
        </div>
    )
}
export default Navbar;