import {useEffect, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setCurrentPage} from "../slices/PageSlice.jsx";
import {reset, resetAvail} from "../slices/AvailableSlice.jsx";
import {resetData} from "../slices/DataSlice.jsx";
import {resetRem} from "../slices/RemainSlice.jsx";
import {resetMaxReq} from "../slices/MaxReqSlice.jsx";

const ResultComp = () => {
    const allocated = [
        [0,1,0],
        [2,0,0],
        [3,0,2],
        [2,1,1],
        [0,0,2]
    ];
    const maxReq = [
        [7,5,3],
        [3,2,2],
        [9,0,2],
        [4,2,2],
        [5,3,3]
    ];
    const dispatch = useDispatch();
    const remainig = [];
    const skip = [];
    for(var i=0; i<allocated.length; i++){
        skip.push(0);
        remainig.push([]);
        for(var j=0; j<allocated[0].length; j++){
            remainig[i].push(Math.max(0, maxReq[i][j]) - allocated[i][j]);
        }
    }
    const navigate = useNavigate();
    const [sequence, setSequence] = useState([]);
    const [available, setAvailable] = useState([0,0,0]);
    const [focusedRow, setFocusedRow] = useState(0);
    const [focusedCol, setFocusedCol] = useState(0);
    const delay = 500;
    const [deadlock, setDeadlock] = useState(false);
    useEffect(() => {
        let seq = [];
        let intervalId;
        let prev = 0;
        let sum = 0;
        let currentRow = 0;
        let currentCol = 0;
        const cycleCells = () => {
            if(skip[currentRow] === 1) {
                currentRow++;
                currentCol = 0;
                return;
            }
            if (currentRow >= remainig.length) {
                if(prev === sum){
                    setDeadlock(true);
                    setFocusedCol(-1);
                    setFocusedRow(-1);

                    const element = document.querySelectorAll('.process');
                    element.forEach((ele, index) => {
                        ele.style.backgroundColor = 'red';
                    })
                    clearInterval(intervalId);
                }

                if(sum === allocated.length){
                    setDeadlock(false);
                    console.log(seq);
                    setSequence(seq);
                    setFocusedCol(-1);
                    setFocusedRow(-1);
                    clearInterval(intervalId);
                }

                prev = sum;
                currentRow = 0;
                currentCol = 0;
                return;
            }
            setFocusedRow(currentRow);
            setFocusedCol(currentCol);
            const allSmaller = remainig[currentRow].every((cellValue, colIndex) => {
                return cellValue <= available[colIndex];
            });
            currentCol+=1;
            if (currentCol >= remainig[currentRow].length) {
                if(allSmaller){
                    sum++;
                    skip[currentRow] = 1;
                    const element = document.getElementById(`P${currentRow}`);
                    element.style.backgroundColor = 'greenyellow';
                    seq.push(`P${currentRow}`);
                    const temp = available;
                    for(var i=0; i<remainig[0].length; i++){
                        temp[i] += allocated[currentRow][i];
                    }
                    setAvailable(temp);
                }
                currentCol = 0;
                currentRow++;
            }
        }
        intervalId = setInterval(cycleCells, delay);
        return () => clearInterval(intervalId);
    }, [delay]);
    return (
        <div className="container flex flex-col justify-center items-center w-full mx-auto">
            <div className="flex w-full justify-between items-center h-full">
                <div className="flex-col mx-auto p-2 w-full">
                    <div className="flex gap-x-10 m-2 justify-center">
                        {available.map((val, i) => (
                            <div
                                key={i}
                                id={`R${i}`}
                                className={`bg-fuchsia-600 text-white text-2xl font-bold px-4 py-2 rounded-lg shadow-md hover:bg-violet-500 hover:shadow-lg transition duration-300 ease-in-out`}
                            >
                                R{i}
                            </div>
                        ))}
                    </div>
                    {
                        remainig.map((row, i) => {
                            return (
                                <div
                                    key={i}
                                    id={`P${i}`}
                                    className={`process flex w-full mx-auto justify-center p-2 gap-x-10 transition duration-300
                                ${skip[i] === 1 ? "bg-green-400" : `${focusedRow === i ? "bg-yellow-300 scale-110" : ""}`}
                                `}
                                >
                                    {
                                        row.map((val, j) => {
                                            return (
                                                <div
                                                    key={j}
                                                    id={`P${i}R${j}`}
                                                    className={`text-2xl font-bold text-white border-2 w-10 h-10 text-center transition duration-300 ${
                                                        focusedRow === i && focusedCol === j
                                                            ? "bg-green-500 scale-125" // Apply green background to the current div
                                                            : "bg-fuchsia-600"
                                                    }`}
                                                >
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
                <div className="w-full">
                    <div className="flex flex-wrap p-2 w-full justify-center gap-x-5">
                        {
                            available.map((val, i) => {
                                return (
                                    <div
                                        key={i}
                                        className={`bg-fuchsia-600 font-bold text-2xl w-10 h-10 text-center border-2 text-white`}
                                    >
                                            R{i}
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="flex flex-wrap p-2 w-full justify-center gap-x-5">
                        {
                            available.map((val, i) => {
                                return (
                                    <div
                                        key={i}
                                        className={`font-bold text-2xl w-10 h-10 text-center border-2 transition duration-300 text-white bg-fuchsia-600
                                    ${focusedCol === i ? "bg-green-400 scale-125" : ""}
                                    ${skip[focusedRow] === 1 ? "line-through" : ""}
                                    `}
                                    >
                                        {
                                            val
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="w-full flex-col justify-center items-center">
                {
                    !deadlock ? (
                        <div
                            className="bg-green-400 text-black flex w-full justify-center gap-x-3 m-4 p-4 items-center text-2xl font-bold">
                            <div
                                className="sequence-container flex flex-wrap justify-center items-center gap-x-3"> {/* Flexbox for sequence items */}
                                Sequence :
                                {sequence.map((val, i) => (
                                    <div
                                        key={i}
                                        className={`sequence-item flex gap-x-2 items-center text-center text-2xl font-bold`}
                                    >
                                        <p className="border-2 border-black p-3 rounded-full shadow-md"> {/* Added shadow */}
                                            {val}
                                        </p>
                                        <p>{i !== sequence.length - 1 ? "-->" : ""}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="w-full flex flex-col p-4 text-center gap-y-2">
                            <div className="bg-red-500 text-4xl text-white font-bold p-4 shadow-md rounded-lg">
                                Deadlock Occured
                            </div>
                        </div>
                    )
                }
                <button
                    className="border-2 w-fit mx-auto px-2 py-1 bg-blue-400 hover:bg-blue-500 transition duration-300 ease-in-out"
                    onClick={() => {
                        setAvailable([]);
                        dispatch(setCurrentPage(0));
                    }}
                >
                    HOME
                </button>
            </div>
        </div>
    )
};
export default ResultComp;