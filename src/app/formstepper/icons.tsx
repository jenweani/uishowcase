import React from "react"

interface props {
    selected: boolean
}

export const FirstIcon:React.FC<props> = ({selected}) => {
    return(
        <div className={`h-[30px] w-[30px] m-[10px] ${selected?"bg-black":"bg-white"} rounded rounded-[15px]`}>
            <p className={` ${selected? "text-white": "text-black"} text-center leading-[30px] text-[14px]`}>1</p>
        </div>
    )
}

export const FourthIcon:React.FC<props> = ({selected}) => {
    return(
        <div className={`h-[30px] w-[30px] m-[10px] ${selected?"bg-black":"bg-white"} rounded rounded-[15px]`}>
            <p className={` ${selected? "text-white": "text-black"} text-center leading-[30px] text-[14px]`}>4</p>
        </div>
    )
}

export const SecondIcon:React.FC<props> = ({selected}) => {
    return(
        <div className={`h-[30px] w-[30px] m-[10px] ${selected?"bg-black":"bg-white"} rounded rounded-[15px]`}>
            <p className={` ${selected? "text-white": "text-black"} text-center leading-[30px] text-[14px]`}>2</p>
        </div>
    )
}

export const ThirdIcon:React.FC<props> = ({selected}) => {
    return(
        <div className={`h-[30px] w-[30px] m-[10px] ${selected?"bg-black":"bg-white"} rounded rounded-[15px]`}>
            <p className={` ${selected? "text-white": "text-black"} text-center leading-[30px] text-[14px]`}>3</p>
        </div>
    )
}