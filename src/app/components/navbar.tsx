"use client"
import { useEffect } from "react"
import logo from "/public/download.svg"
import Image from "next/image"

export default function Navbar() {

    useEffect(() => {
        function focusInput(event: any) {
            if (event.key == "Enter") {
                const id = document.getElementById("input")
                id?.focus()
            }
        }
    
        document.addEventListener("keydown", focusInput)
    }, [])
    //<Image src={logo} width={50} height={50} alt=""></Image>

    return (
        <header className="z-50 w-full h-[8%] flex flex-row p-4 fixed backdrop-blur rounded-xl">
            <div className="w-full flex flex-row items-center justify-center">
                <div className="absolute start-0 mx-4 font-semibold">NF3</div>
                <div className="flex flex-row items-center w-fit md:w-fit mx-auto">
                    <input id="input" className="w-[0px] opacity-0 sm:opacity-100 sm:w-[320px] rounded-full py-2 px-4 bg-zinc-100 border-[1.5px] border-zinc-500" placeholder="🔎︎ Search for collections"></input>
                    <span className="opacity-0 sm:opacity-100 absolute ml-[280px] flex w-6 h-6 items-center justify-center rounded-lg bg-zinc-200 text-[12px] font-medium text-zinc-500">↵</span>
                </div>
                <button className="absolute end-0 mx-4 px-7 py-2 text-[#ff13f0] font-semibold bg-pink-50 text-sm rounded-full transition ease-in-out delay-150 hover:bg-pink-100">Connect</button>
            </div>
        </header>
    )
}