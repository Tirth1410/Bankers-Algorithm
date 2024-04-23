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
        <div className="w-11/12">
            {/*<AvailableResource numRes={numRes}/>*/}
                <div className="flex mx-1 w-full justify-evenly text-center items-center gap-x-20 font-bold text-xl bg-fuchsia-600">
                    <div>Process</div>
                    <div className="flex w-7/12 justify-around m-2">
                        <div className="flex-col justify-center items-center text-center">
                            <p>Allocated Resources</p>
                            <div className="flex gap-x-10">
                                {
                                    resources.map((res, idx) => {
                                        return (
                                            <p>
                                                R{idx}
                                            </p>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="flex-col justify-center items-center text-center">
                            <p>Required Resources</p>
                            <div className="flex gap-x-12">
                                {
                                    resources.map((res, idx) => {
                                        return (
                                            <p>
                                                R{idx}
                                            </p>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            {
                processes.map((process, index) => {
                    return (
                        <form key={index} className="flex mx-auto gap-x-4 flex-row items-center justify-center w-full">
                            <ProcessCard numRes={numRes} index={index}/>
                        </form>
                    )
                })
            }
        </div>
    );
};

export default Form2;