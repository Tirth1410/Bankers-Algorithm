import {useDispatch, useSelector} from "react-redux";
import {addRem} from "../slices/RemainSlice.jsx";
import React, {useEffect} from "react";

const Form3 = ({numRes}) => {
    const allocated = useSelector(state => state.data);
    const required = useSelector(state => state.maxreq);
    const remain = useSelector(state => state.remain);
    const dispatch = useDispatch();
    console.log(allocated);
    console.log(required);
    const resources = [];
    for(var i = 0; i < numRes; i++){
        resources.push(0);
    }
    const remaining = [];
    const n = allocated.length;
    const m = allocated[0].length;

    useEffect(() => {
        for(var i=0; i < n; i++) {
            const temp = [];
            for(var j = 0; j < m; j++) {
                temp[j] = Math.max(0, required[i][j] - allocated[i][j]);
            }
            dispatch(addRem(temp));
            console.log(temp);
        }
        console.log(remain);
    }, []);
    return(
        <div className="flex-col justify-center items-center w-full mx-auto bg-gray-500">
            <div className="flex-col justify-center items-center p-4 mx-2">
                <p className="text-center mx-auto font-bold text-2xl text-white">
                    Remaining Resources
                </p>
                <div className="flex mx-2 justify-center gap-x-28 text-white font-bold text-xl p-1">
                    {
                        resources.map((res, idx) => {
                            return (
                                <p className="">
                                    R{idx}
                                </p>
                            )
                        })
                    }
                </div>
            </div>
            {
                remain.map( (row, index) => {
                    return (
                        <div className="flex gap-x-20 m-2 justify-center p-4 bg-fuchsia-600">
                            {
                                row.map( (val, colIndex) => {
                                    return(
                                        <div className="h-[40px] w-[50px] flex justify-center items-center text-xl text-white font-bold border-2">
                                            {val}
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Form3;