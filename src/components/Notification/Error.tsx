"use client";
import { useState } from 'react';
import { VscChromeClose } from "react-icons/vsc";
import { MdError } from "react-icons/md";
type Notificationprops = {
    size : string;
    title: string;
    message: string;
    action: boolean;

  };
export default function Error({size, title, message, action}:Notificationprops) {
const [isClose, setIsClose] = useState(true);
const handleClick = () => {
  setIsClose(!isClose);
};
return (
  <>
  {size=="sm" && isClose?  
    <div className={`m-5 box-border flex items-center justify-between gap-5 w-[288px] h-[48px] bg-red-100  border-red-300 border-l-red-600 border-2 border-l-4 `}>
    <MdError  className={`text-red-600 text-2xl ml-2`} /> 
    <div className="flex justify-between">
      <h1 className="font-bold">{title}</h1>
      <p >{message}</p>
    </div>
    {action==true?<button className="border-none text-blue-600 w-[71px] h-[24px] font-bold">Action</button>:""}
    <button onClick={handleClick}>
     <VscChromeClose className='mr-2 text-xl'/>
    </button>
  </div>:size=="md" && isClose?
    <div className={`m-5 pt-2 box-border flex justify-between self-start gap-5 w-[288px] h-[72px] bg-red-100  border-red-300 border-l-red-600 border-2 border-l-4 `}>
    <div className='flex'>
      <MdError  className={`text-red-600 text-2xl ml-2`} /> 
      <div className='flex flex-col content-center pl-2'>
          <h1 className="font-bold">{title}</h1>
          <p >{message}</p>
      </div>
    </div>  
    {action==true?<button className="border-none text-blue-600 w-[71px] h-[24px] font-bold">Action</button>:""}
    <button className='flex flex-col' onClick={handleClick}>
     <VscChromeClose className='mr-2 text-xl'/>
    </button>
  </div>:size=="lg" && isClose?
    <div className={`m-5 pt-2 box-border flex justify-between gap-5 w-[288px] h-[115px] bg-red-100 border-red-300 border-l-red-600 border-2 border-l-4 `}>
      <div className='flex flex-col justify-between'>
        <div className='flex'>
          <MdError  className={`text-red-600 text-2xl ml-2`} /> 
          <div className="flex flex-col content-center pl-2">
            <h1 className="font-bold">{title}</h1>
            <p >{message}</p>
          </div>
      </div>  
      <>{action==true?<button className="border-none text-blue-600 w-[100px] h-[24px] font-bold pl-9 pb-9">Action</button>:<div className='pl-9 pb-2'>Time stamp [00:00:00]</div>}</>
      </div>
      <button className='flex flex-col' onClick={handleClick}>
       <VscChromeClose className='mr-2 text-xl'/>
      </button>
    </div>: ""}
  </>
)
}
