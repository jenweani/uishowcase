import Image from "next/image"
import React, { Component, ReactElement, ReactNode } from "react"
import { FirstIcon, FourthIcon, SecondIcon, ThirdIcon } from "./icons"
import { FirstForm, FourthForm, SecondForm, ThirdForm } from "./forms"

interface Props {
    step: number
}

interface MIprops {
    selected: boolean,
    children: ReactNode,
    title: string,
    desc: string
}

const MStepItem: React.FC<MIprops> = ({selected,children, title, desc}) => {
    return (
        <div className="w-full flex my-[20px]">
            <div>
                <div className="h-[3px] w-[3px] bg-black rounded-[1px] "></div>
                <div className={`transition-all duration-1000 ease-in-out mt-[5px] ${selected?"h-full":"h-[30px]"} w-[3px] bg-black rounded-[2px]`}></div>
            </div>
            <div className={`w-full mx-[10px]`}>
                <div className="">
                    <p className="text-[14px] text-black font-semibold">{title}</p>
                    <p className="text-[12px] text-[#909090]">{desc}</p>
                </div>
                <div className={`w-full ${selected?"visible":"hidden"}`}>{children}</div>
            </div>
        </div>
    )
}

export const MobileStep: React.FC<Props> = ({step}) => {
    return (
        <div className="w-full mx-[10px]">
            <MStepItem selected={step == 1? true:false}
            title="First Step"
            desc="Lorem ispum"
            children = {
            <div className="w-full">
                <FirstForm/>
            </div>
            }
            />
            <MStepItem selected={step == 2? true:false}
            title="Second Step"
            desc="Lorem ispum"
            children = {
                <div>
                    <SecondForm/>
                </div>
                }    
            />
            <MStepItem selected={step == 3? true:false}
            title="Third Step"
            desc="Lorem ispum"
            children = {
                <div>
                    <ThirdForm/>
                </div>
                }
            />
            <MStepItem selected={step == 4? true:false}
            title="Fourth Step"
            desc="Lorem ispum"
            children = {
                <div>
                    <FourthForm/>
                </div>
                }
            />
        </div>
    )
}

export const DesktopStep:React.FC<Props> = ({step}) => {
    return (
        <div className="w-11/12 mx-auto">
            <div className="w-full flex justify-evenly">
                <FirstIcon selected={step == 1? true: false}/>
                <SecondIcon selected={step == 2? true: false}/>
                <ThirdIcon selected={step == 3? true: false}/>
                <FourthIcon selected={step == 4? true: false}/>
            </div>
            <div className="w-full h-[6px] bg-[#c0c0c0] rounded ">
                <div className={`transition-all duration-1000 ease-in-out ${step == 1? "w-1/4": step == 2? "w-2/4": step == 3? "w-3/4": "w-full"} h-[6px] rounded bg-black`}></div>
            </div>
        </div>
    )
}