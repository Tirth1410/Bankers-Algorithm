import React, {useState} from 'react';
import { motion } from "framer-motion"
import Form1 from "./Form1.jsx";
import Form2 from "./Form2.jsx";
import Form3 from "./Form3.jsx";
import ResultComp from "./ResultComp.jsx";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { increment,decrement } from "../slices/PageSlice";
const InputComp = () => {
    const [numRes, setNumRes] = useState(0);
    const [numPro, setNumPro] = useState(0);
    const value = useSelector(state => state.page.value);

    const dispatch = useDispatch();
    const inc = (e) => {
        e.preventDefault();
        dispatch(increment());
    }
    const dec = (e) => {
        e.preventDefault();
        dispatch(decrement());
    }
    return (
        <div className="gap-y-4 flex flex-col items-center justify-center w-full py-6">
            {
                value === 0 && <Form1 numRes={numRes} numPro={numPro} setNumRes={setNumRes} setNumPro={setNumPro}/>
            }
            {
                value === 1 && <Form2 numRes={numRes} numPro={numPro}/>
            }
            {
                value === 2 && <Form3 numRes={numRes}/>
            }
            {
                value === 3 && <ResultComp/>
            }
            <div className="flex flex-row items-center justify-evenly w-full">
                {/*{*/}
                {/*    value > 0 &&*/}
                {/*    <button className="text-xl font-bold bg-cyan-400 p-2 rounded-md" onClick={dec}>Back</button>*/}
                {/*}*/}
                {
                    value < 2 &&
                    <button className="text-xl font-bold bg-blue-400 p-2 rounded-md" onClick={inc}>Next</button>
                }
                {
                    value === 2 &&
                    <button className="text-xl font-bold bg-cyan-400 p-2 rounded-md" onClick={inc}>Calculate</button>
                }
            </div>
        </div>
    );
}
export default InputComp;