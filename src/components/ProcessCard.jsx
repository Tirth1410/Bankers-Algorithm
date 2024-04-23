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
        <div className="flex items-center flex-row justify-evenly m-2 w-full gap-x-20 text-center bg-red-500">
            <p className="">P{index}</p>
            {/*ALLOCATED RESOURCE*/}
            <div className="flex gap-x-3">
                <div className="flex-col items-center m-4 justify-center text-center">
                    {/*<p>Allocated Resources</p>*/}
                    <div className="flex gap-x-10">
                        {
                            resource.map((res, idx) => {
                                return (
                                    <div className="flex gap-x-1" key={idx}>
                                        {/*<label htmlFor={`resource-${idx}`}>R{idx}</label>*/}
                                        <input
                                            className="w-10 text-center font-bold border-2 border-red-400 outline-2 rounded-md text-lg focus:border-none focus:outline-none focus:outline-cyan-500 focus:outline-4 transition duration-500"
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
            </div>
            {/*MAXIMUM REQUIRED RESOURCE*/}
            <div className="flex gap-x-3">
                <div className="flex-col m-4 items-center justify-center text-center">
                    {/*<p>Maximum Required Resources</p>*/}
                    <div className="flex gap-x-8">
                        {
                            required.map((res, idx) => {
                                return (
                                    <div className="flex gap-x-1" key={idx}>
                                        {/*<label htmlFor={`req-${idx}`}>R{idx}</label>*/}
                                        <input
                                            className="w-10 text-center font-bold border-2 border-red-400 outline-2 rounded-md text-lg focus:border-none focus:outline-none focus:outline-cyan-500 focus:outline-4 transition duration-500"
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
    )
};
export default ProcessCard;