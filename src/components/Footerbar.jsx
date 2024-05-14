import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {Link} from "react-router-dom";
// import
const FooterBar = () => {
    return (
        <div className="footer-bar flex sm:flex-row align-items-center w-full bg-purple-700 p-3">
            <div className="w-1/2 text-xl text-center my-auto text-yellow-200 border-white border-r-2">
                Created By <span className="text-2xl text-white font-bold">Tirth Gohil</span>
            </div>
            <div className="w-1/2">
                <div className="flex flex-row md:justify-center items-center gap-x-1">
                    <FaLinkedin className="object-cover h-5 w-5 text-white"/>
                    <Link to="https://www.linkedin.com/in/tirthgohil1410/" className="text-white font-sans font-bold">Tirth
                        Gohil</Link>
                </div>
                <div className="flex flex-row md:justify-center items-center gap-x-1 w-full">
                    <FaXTwitter className="object-cover h-5 w-5 text-white"/>
                    <Link to="https://twitter.com/Tirth_1410" className="font-sans text-white font-bold">Tirth Gohil</Link>
                </div>
            </div>
        </div>
    )
}
export default FooterBar;