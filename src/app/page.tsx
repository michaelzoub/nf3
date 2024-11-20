"use client"
import Image from "next/image";
import eth from "/public/ethereum-logo-EC6CDBA45B-seeklogo.com.png"
import polygon from "/public/polygon-matic-logo-1DFDA3A3A8-seeklogo.com.png"
import {useState} from "react"

export default function Home() {

  const [transition, setTransition] = useState(false)
  const [ping, setPing] = useState(true)

  return (
    <main className="w-full h-screen flex flex-col sjustify-center px-4 pt-4 select-none">
      <div className=" w-full min-h-screen md:w-[700px] mx-auto gap-2">
        <div className="flex flex-col">
          <div className="mt-36 w-fit mx-auto text-zinc-400 text-">Audited by Hacken & Certik ✓</div>
          <div className="mt-4 text-black mx-auto text-5xl text-zinc-700 font-semibold">P2P Direct Swap</div>
          <div className="text-black mx-auto text-2xl text-zinc-700 font-medium">Securely swap your NFT(s) peer-to-peer</div>
          <svg className="mx-auto" width="400" height="10" xmlns="http://www.w3.org/2000/svg">
            <path d="M 50 0 L 200 0" stroke="black" strokeWidth="3" fill="none" strokeDasharray="150" strokeDashoffset="150"></path>
          </svg>
          <button onMouseEnter={() => setTransition((e) => !e)} onMouseLeave={() => setTransition(false)} className="mt-4 flex flex-row gap-2 items-center justify-center mx-auto w-[230px] py-2 text-[#ff13f0] text-lg font-semibold bg-pink-50 rounded-full transition ease-in-out delay-150 hover:bg-pink-100">Create new swap<span className={`${transition ? "text-[#ff13f0] transition ease-in-out delay-150 translate-x-[5px]" : "text-[#ff13f0] transition ease-in-out delay-150"}`}>→</span></button>
        </div>
        <div className="mt-10 overflow-scroll justify-center w-full h-[300px] mx-auto rounded-xl bg-pink-50 shadow-inner border-[1px] border-pink-100 p-4 px-10 space-y-2" onMouseEnter={() => setPing(false)}>
          <div className={`${ping ? "opacity-100 animate-bounce flex absolute mt-[275px] ml-[37%] md:ml-[290px] mx-auto justify-center items-center w-8 h-7 text-black text-xs rounded-full border-[1px] border-zinc-300 bg-zinc-100 font-semibold transition delay-150 ease-in-out" : "opacity-0 animate-bounce flex absolute mt-[275px] ml-[37%] md:ml-[290px] mx-auto justify-center items-center w-8 h-7 text-xs text-black rounded-full border-[1px] border-zinc-300 bg-zinc-100 font-semibold transition delay-150 ease-in-out"}`}>↓</div>
          <div className="text-2xl text-zinc-700 font-semibold">Recent news:</div>
          <div className="bg-white h-20 flex flex-row gap-4 justify- w-full rounded-xl py-2 px-6 items-center">
            <div className="text-zinc-500 text-lg font-medium">Cross chain swaps are now avaible!</div>
            <div className="flex flex-row gap-1">
              <Image className="object-contain" src={eth} alt="" width={30} height={40}></Image>
              <Image className="object-contain" src={polygon} alt="" width={30} height={30}></Image>
            </div>
          </div>
          <div className="bg-white h-20 flex flex-row gap-2 justify- w-full rounded-xl py-2 px-6 items-center">
            <div className="text-zinc-500 text-lg font-medium">New NFT release.</div> 
          </div>
          <div className="bg-white h-20 flex flex-row gap-2 justify- w-full rounded-xl py-2 px-6 items-center">
            <div className="text-zinc-500 text-lg font-medium">Etc</div> 
          </div>
          <div className="bg-white h-20 flex flex-row gap-2 justify- w-full rounded-xl py-2 px-6 items-center">
            <div className="text-zinc-500 text-lg font-medium">Etc</div> 
          </div>
          <div className="bg-white h-20 flex flex-row gap-2 justify- w-full rounded-xl py-2 px-6 items-center">
            <div className="text-zinc-500 text-lg font-medium">Etc</div> 
          </div>
        </div>
        <footer className="w-full justify-between mt-[300px] h-[200px] flex flex-col gap-10 md:gap-0 md:flex-row rounded-xl p-4 md:p-0">
          <div className="flex flex-col gap-2">
            <div className="text-xl font-semibold">NF3</div>
            <div className="w-full md:w-[300px]">A multi-asset swaps platform to barter, reserve &
            exchange your favourite NFT collections, entirely peer-to-peer.</div>
          </div>
          <div className="flex flex-row gap-6 pb-0 md:pb-4">
            <div className="flex flex-col gap-2">
              <div className="text-zinc-500">Get in touch</div>
              <div className="flex flex-col">
                <div>Twitter ↗</div>
                <div>Discord ↗</div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-zinc-500">Miscellaneous</div>
              <div className="flex flex-col">
                <div>Audit report ↗</div>
                <div>Discord ↗</div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
