import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";
import {NavLink} from "react-router-dom";
import Banner from "../assets/banner.jpg";
const Home = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow px-8 pb-16">
                <div className="flex flex-col items-center justify-center sm:flex-row md:justify-evenly">
                    <div className="text-center font-bold text-4xl sm:text-5xl md:text-6xl mt-7 mb-24 w-1/2">
                        Visualize the
                        <p className="text-purple-700">
                            Banker's Algorithm
                        </p>
                        <p className="text-sm sm:text-xl my-5">Unlock the power of Safe Allocation with our interactive Banker's Algorithm visualization!</p>
                    </div>
                    <img src={Banner} className="h-72 md:h-96" alt="Banner" />
                </div>
                <p className="mx-3 sm:mx-10 font-serif text-xl">
                    The Banker's Algorithm is a resource allocation and deadlock avoidance technique used in
                        operating systems. It helps ensure that resources are distributed safely among processes to
                        prevent deadlocks.
                        Imagine a bank managing loans. The Banker's Algorithm works similarly by ensuring the bank never
                        lends itself into a position where it cannot fulfill the needs of all its customers (processes)
                        – a situation analogous to a deadlock.
                    </p>

                    <p className="mx-10 mt-7 font-serif text-xl">Here How it works : </p>
                    <ul className="mx-3 sm:mx-7 font-sans pl-10">
                        <li className="flex items-center gap-x-1">
                            <FontAwesomeIcon icon={faCheck} className="h-4"/>The algorithm tracks the maximum resource
                            needs of each process (how much each process might need in total).
                        </li>
                        <li className="flex items-center gap-x-1">
                            <FontAwesomeIcon icon={faCheck} className="h-4"/>It keeps record of the currently allocated
                            resources to each process (what they're holding right now).
                        </li>
                        <li className="flex items-center gap-x-1">
                            <FontAwesomeIcon icon={faCheck} className="h-4"/>It monitors the available resources in the
                            system (what's left in the pool).
                        </li>
                    </ul>

                    <p className="mx-3 sm:mx-10 mt-7 font-serif text-xl">
                        Struggling with deadlocks in your resource allocation? Unsure if granting a request will cripple your system?  Unlock the power of Safe Allocation with our interactive Banker's Algorithm visualization!  Learn how this deadlock prevention technique works, see it in action, and gain the confidence to manage resources effectively.  Avoid deadlocks, optimize utilization, and empower informed decisions. Explore the Banker's Algorithm today!
                    </p>
                    <div  className="w-full flex justify-center gap-x-1">
                        <div
                            className="w-fit bg-gray-600 text-center my-11 text-2xl px-4 py-2 text-white hover:bg-purple-700 transition duration-300 hover:scale-110 hover:shadow-xl hover:shadow-purple-500">
                            <NavLink to={"/calculate"}>
                                Visualize
                            </NavLink>
                        </div>
                    </div>
            </main>
        </div>
    );
}
export default Home;