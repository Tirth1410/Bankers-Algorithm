import React from "react";
import { motion } from 'framer-motion';

const Form1 = ( {numRes, numPro, setNumRes, setNumPro} ) => {
    const fadeVariant = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
    };
    return (
        <div className="w-full mx-auto">
            <form className="flex mx-auto gap-x-4 flex-row items-center justify-center w-5/12">
                <div className="flex flex-col w-full justify-between items-center">
                    <label className="text-2xl font-bold text-blue-600" htmlFor="numRes">Resources</label>
                    <input
                        id="numRes"
                        name="numRes"
                        value={numRes}
                        onChange={(e) => {
                            setNumRes(e.target.value)
                        }}
                        className="max-w-[200px] min-h-[100px] bg-blue-500 rounded-md text-4xl text-white text-center placeholder:text-center placeholder:text-white font-bold"
                        type="number"
                    />
                </div>
                <div className="flex flex-col w-full justify-between items-center">
                        <label className="text-2xl font-bold text-blue-600" htmlFor="numPro">Processes</label>
                        <input
                            id="numPro"
                            value={numPro}
                            onChange={(e) => {
                                setNumPro(e.target.value)
                            }}
                            className="max-w-[200px] min-h-[100px] bg-blue-500 rounded-md text-4xl text-white text-center placeholder:text-center placeholder:text-white font-bold"
                            type="number"
                        />
                </div>
            </form>
        </div>
);
};

export default Form1;