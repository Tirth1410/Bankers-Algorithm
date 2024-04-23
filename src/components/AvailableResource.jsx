import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addAvail} from "../slices/AvailableSlice.jsx";

const AvailableResource = ({numRes}) => {
    const avail = [];
    const available = useSelector(state => state.available);
    const dispatch = useDispatch();
    useEffect(() => {
        for(var i = 0; i < numRes; i++) {
            dispatch(addAvail())
        }
        dispatch(addAvail(avail));
    }, []);
    return(
        <div>
            Available Resource
            <div className="bg-indigo-600 p-4 flex justify-center items-center">
                {
                    available.map((row, index) => {
                        row.map((val, i) => {
                            console.log(available);
                            return (
                                <div key={i}>
                                    <input
                                        className="w-10 h-10 text-center border-2 text-white"
                                        type="number"
                                        id={`avail-${index}`}
                                    />
                                </div>
                            )
                        })
                    })
                }
            </div>
        </div>
    )
};
export default AvailableResource;