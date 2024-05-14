import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addAvail, insertAvail} from "../slices/AvailableSlice.jsx";

const AvailableResource = ({numRes}) => {
    const avail = [];
    const available = useSelector(state => state.available);
    const dispatch = useDispatch();
    useEffect(() => {
        for(var i = 0; i < numRes; i++) {
            dispatch(addAvail(0));
        }
    }, []);
    return(
        <div className="flex flex-col justify-center items-center gap-4">
            <p className="text-2xl">Enter Available Resource</p>
            <div className="p-1 flex justify-center items-center gap-4">
                {
                    available.map((val, index) => {
                        // console.log(available);
                        return (
                            <div key={index}>
                                <input
                                    className="w-10 text-center font-bold border-2 border-red-400 outline-2 rounded-md text-lg focus:border-none focus:outline-none focus:outline-cyan-500 focus:outline-4 transition duration-500"
                                    value={available[index]}
                                    type="number"
                                    id={`avail-${index}`}
                                    onChange={(e) => {
                                        dispatch(insertAvail([index, e.target.value]));
                                    }}
                                />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
};
export default AvailableResource;