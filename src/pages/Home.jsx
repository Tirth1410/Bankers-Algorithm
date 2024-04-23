import React from "react";
import Navbar from "../components/Navbar.jsx";
import ResultComp from "../components/ResultComp.jsx"
import InputComp from "../components/InputComp.jsx";
import {Route} from "react-router-dom";
const Home = () => {
    return (
        <div
            className="flex flex-col min-h-screen"> {/* Full screen gradient background */}
            <Navbar/> {/* Assuming Navbar component */}
            <main className="flex-grow px-8 pb-16 overflow-y-auto"> {/* Main content area */}
                <h1 className="text-3xl font-bold text-center mb-8">Home Page</h1> {/* Heading with white text */}
                {/* <ResultComp /> Replaced with placeholder */}
                <InputComp/> {/* Assuming InputComp component */}
            </main>
        </div>
    );
}
export default Home;