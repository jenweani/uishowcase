import { useState } from "react"
import React from "react"
import Image from "next/image"

interface FRProps {
    selected: boolean,
    text: string,
    callback: Function
}

const FormRadio: React.FC<FRProps> = ({selected, text, callback}) => {
    return (
        <button 
        onClick={
            () => {callback()}
        } 
        className={`w-11/12 md:w-[200px] my-[5px] flex md:w-[120px] h-[40px] border-2 border-black ${selected?"bg-black":"bg-white"} rounded-[8px]`}>
            <div className={`h-[15px] w-[15px] flex ${selected? "bg-white":""} ml-[10px] my-auto rounded-[10px] border border-black my-[5px]`}>
                <Image className={`m-auto `} src={"check.svg"} alt="" width={10} height={10}/>
            </div>
            <div className="mx-[8px] my-auto">
                <p className={`text-[12px] ${selected?"text-white":"text-black"}`}>{text}</p>
            </div>
        </button>
    )
}

export const FirstForm = () => {
    const [selection, setSelection] = useState(0)

    return (
        <div className="w-full flex flex-col md:mt-[30px]">
            <div className="hidden md:block mx-auto"><p className="text-[14px] md:text-lg text-black font-semibold">First Step</p></div>
            <div className="md:mx-auto flex flex-col">
                <FormRadio selected={selection == 1? true : false} text="First Option" callback={() => setSelection(1)}/>
                <FormRadio selected={selection == 2? true : false} text="Second Option" callback={() => setSelection(2)}/>
                <FormRadio selected={selection == 3? true : false} text="Third Option" callback={() => setSelection(3)}/>
                <FormRadio selected={selection == 4? true : false} text="Fourth Option" callback={() => setSelection(4)}/>
            </div>
        </div>
    )
}

export const SecondForm = () => {
    const [selection, setSelection] = useState(0)

    return (
        <div className="flex flex-col md:mt-[30px]">
            <div className="hidden md:block mx-auto"><p className="text-lg text-black font-semibold">Second Step</p></div>
            <div className="md:mx-auto flex flex-col">
                <FormRadio selected={selection == 1? true : false} text="First Option" callback={() => setSelection(1)}/>
                <FormRadio selected={selection == 2? true : false} text="Second Option" callback={() => setSelection(2)}/>
                <FormRadio selected={selection == 3? true : false} text="Third Option" callback={() => setSelection(3)}/>
                <FormRadio selected={selection == 4? true : false} text="Fourth Option" callback={() => setSelection(4)}/>
            </div>
        </div>
    )
}

export const ThirdForm = () => {
    const [selection, setSelection] = useState(0)

    return (
        <div className="flex flex-col md:mt-[30px]">
            <div className="hidden md:block mx-auto"><p className="text-lg text-black font-semibold">Third Step</p></div>
            <div className="md:mx-auto flex flex-col">
                <FormRadio selected={selection == 1? true : false} text="First Option" callback={() => setSelection(1)}/>
                <FormRadio selected={selection == 2? true : false} text="Second Option" callback={() => setSelection(2)}/>
                <FormRadio selected={selection == 3? true : false} text="Third Option" callback={() => setSelection(3)}/>
                <FormRadio selected={selection == 4? true : false} text="Fourth Option" callback={() => setSelection(4)}/>
            </div>
        </div>
    )
}

export const FourthForm = () => {
    const [selection, setSelection] = useState(0)

    return (
        <div className="flex flex-col  md:mt-[30px]">
            <div className="hidden md:block md:mx-auto"><p className="text-[15px] md:text-lg text-black md:font-semibold">Fourth Step</p></div>
            <div className="md:mx-auto flex flex-col">
                <FormRadio selected={selection == 1? true : false} text="First Option" callback={() => setSelection(1)}/>
                <FormRadio selected={selection == 2? true : false} text="Second Option" callback={() => setSelection(2)}/>
                <FormRadio selected={selection == 3? true : false} text="Third Option" callback={() => setSelection(3)}/>
                <FormRadio selected={selection == 4? true : false} text="Fourth Option" callback={() => setSelection(4)}/>
            </div>
        </div>
    )
}