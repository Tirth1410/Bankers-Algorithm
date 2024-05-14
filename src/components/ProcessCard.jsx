import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addData, insertData} from "../slices/DataSlice.jsx";
import {addMaxReq, insertMaxReq} from "../slices/MaxReqSlice.jsx";
import '../index.css';

const ProcessCard = ({numRes, index}) => {
    const [resource, setResource] = useState([]);
    const [required, setRequired] = useState([]);
    const array = useSelector(state => state.data);
    const array2 = useSelector(state => state.maxreq);
    useEffect(() => {
        const temp = [];
        const temp2 = [];
        for( let i = 0; i < numRes; i++ ) {
            temp.push(0);
            temp2.push(0);
        }
        setResource(temp);
        setRequired(temp2);
        dispatch(addData(temp));
        dispatch(addMaxReq(temp2));
    }, [numRes]);
    function handleChange(value, idx){
        console.log('inside handlechange');
        const newResource = [...resource];
        newResource[idx] = value;
        setResource(newResource);
        dispatch(insertData([index,idx,value]));
    }
    function handleChange2(value, idx){
        console.log('inside handlechange2');
        const newRequired = [...required];
        newRequired[idx] = value;
        setRequired(newRequired);
        dispatch(insertMaxReq([index,idx,value]));
    }
    const dispatch = useDispatch();
    return (
        <div className="flex justify-evenly gap-x-20 border-2 border-black w-full my-1">
            <div className="flex items-center text-center">Process{index}</div>
            <div className="flex w-7/12 items-center justify-around m-2">
                {/*ALLOCATED RESOURCE*/}
                <div className="flex-col justify-center items-center text-center">
                    <div className="flex justify-center items-center gap-x-10">
                            {
                                resource.map((res, idx) => {
                                    return (
                                        <div className="text-center" key={idx}>
                                            {/*<label htmlFor={`resource-${idx}`}>R{idx}</label>*/}
                                            <input
                                                className="w-10 text-center font-bold border-2 border-red-400 outline-2 rounded-md text-lg focus:border-none focus:outline-none focus:outl focus:outline-4 transition duration-500"
                                                type="number"
                                                value={res}
                                                name={`resource-${idx}`}
                                                id={`resource-${idx}`}
                                                onChange={(e) => {
                                                    handleChange(e.target.value, idx)
                                                }
                                                }
                                            />
                                        </div>
                                    )
                                })
                            }
                        </div>
                </div>
                {/*MAXIMUM REQUIRED RESOURCE*/}
                <div className="flex gap-x-3">
                    <div className="flex-col m-4 items-center justify-center text-center">
                        {/*<p>Maximum Required Resources</p>*/}
                        <div className="flex gap-x-8">
                            {
                                required.map((res, idx) => {
                                    return (
                                        <div className="" key={idx}>
                                            <input
                                                className="w-10 text-center font-bold border-2 border-red-400 outline-2 rounded-md text-lg focus:border-none focus:outline-none focus:outl focus:outline-4 transition duration-500"
                                                type="number"
                                                value={res}
                                                name={`req-${idx}`}
                                                id={`req-${idx}`}
                                                onChange={(e) => {
                                                    handleChange2(e.target.value, idx)
                                                }
                                                }
                                            />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default ProcessCard;