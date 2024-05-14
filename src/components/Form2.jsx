import React from "react";
import ProcessCard from "./ProcessCard.jsx";
import AvailableResource from "./AvailableResource.jsx";
const Form2 = ({numRes, numPro}) => {
    const processes = [];
    for(var i = 0; i < numPro; i++){
        processes.push(0);
    }
    const resources = [];
    for(var i = 0; i < numRes; i++){
        resources.push(0);
    }
    return (
        <div className="w-11/12 flex-col">
            <AvailableResource numRes={numRes}/>
            <div className="flex mx-1 mt-3 w-full justify-evenly text-center items-center gap-x-20 font-bold text-xl ">
                <div className="">Process</div>

                <div className="flex w-7/12 justify-around m-2">
                    <div className="flex-col justify-center items-center text-center">
                        <p>Allocated Resources</p>
                        <div className="flex justify-center items-center gap-x-10">
                            {
                                resources.map((res, idx) => {
                                    return (
                                        <div key={idx} className="text-center">
                                            R{idx}
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="flex-col justify-center items-center text-center">
                        <p>Required Resources</p>
                        <div className="flex justify-center items-center gap-x-10">
                            {
                                resources.map((res, idx) => {
                                    return (
                                        <p key={idx}>
                                            R{idx}
                                        </p>
                                        )
                                    })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-col mx-1 mt-3 w-full justify-evenly text-center items-center text-md">
                {
                    processes.map((process, index) => {
                        return (
                            <form key={index} className="flex">
                                <ProcessCard numRes={numRes} index={index}/>
                            </form>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Form2;