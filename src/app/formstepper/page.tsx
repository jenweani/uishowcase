"use client"
import { useState } from "react"
import { FirstForm, FourthForm, SecondForm, ThirdForm } from "./forms"
import { DesktopStep, MobileStep } from "./components"
import { Navbar } from "../components/navbar"

const  handleSubmit = () => {
    // write code to handle form submission
}

const FormStepper = () => {
    const [step, setStep] = useState(1)

    const renderForm = () => {
        switch (step){
            case 1:{
                return <FirstForm/>
            }
            case 2:{
                return <SecondForm/>
            }
            case 3:{
                return <ThirdForm/>
            }
            case 4:{
                return <FourthForm/>
            }
        }
    }

    return (
        <main className="bg-[#eeeeee] w-screen min-h-screen md:min-h-screen flex flex-col justify-between font-mono">
            <Navbar/>
            <div className="w-full flex flex-col">
                <div className="md:hidden">
                    <MobileStep step={step}/>
                </div>
                <div className="w-full mx-auto hidden md:block">
                    <DesktopStep step={step}/>
                    <div className="mx-auto ">
                        {renderForm()}
                    </div>
                </div>
            </div>
            {/* controls */}
            <div className="mx-auto my-[20px] mb-[40px]">
                <button
                className={`mx-[5px] border border-black rounded bg-white px-[20px] py-[10px] ${step == 1?"text-[#999999] border-[#909090]":"text-black"} `}
                onClick={
                    () => {
                        if(step < 4 && step > 1){
                            setStep(step - 1)
                        }else{
                            setStep(1)
                        }
                    }
                }
                >{step == 4? <p>Restart</p>: <p >Previous</p>}</button>
                <button
                className="mx-[5px] border border-black rounded bg-black px-[60px] py-[10px] text-white"
                onClick={
                    () => {
                        if(step < 4){
                            setStep(step + 1)
                        }else{
                            handleSubmit()
                        }
                    }
                }>{step == 4? <p>Submit</p>: <p>Next</p>}</button>
            </div>
        </main>
    )
}

export default FormStepper