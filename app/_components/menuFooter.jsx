import React from 'react'
import { FaUser } from "react-icons/fa";
import { ImHome3 } from "react-icons/im";
import { FaClipboardList } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import useIsPWA from './IsPwa';

const MenuFooter = () => {
  const isPWA = useIsPWA();
  
  return (
    <div className={`containerFooter  w-full absolute select-none ${ isPWA  ? "bottom-[0px]" : "bottom-[70px]"  }  flex text-[1.4rem] text-gray-300 `}>
      <div className='p-2 w-full border-r-[1px] border-[#ffffff26] flex flex-col  justify-center items-center '>
        <ImHome3 />
        <p className='text-[.8rem]'>Home</p>
      </div>
      <div className='p-2 w-full  border-r-[1px] border-[#ffffff26] flex flex-col  justify-center items-center '>
        <FaClipboardList />
        <p className='text-[.8rem]'>orders</p>
      </div>
      <div className='p-2 w-full  border-r-[1px] border-[#ffffff26] flex flex-col  justify-center items-center '>
        <FaUser />
        <p className='text-[.8rem]'>Employee</p>
      </div>
      <div className='p-2 w-full  border-r-[1px] border-[#ffffff26]  flex flex-col  justify-center items-center '>
        <IoMdSettings />
        <p className='text-[.8rem]'>Setting</p>
      </div>

    </div>
  )
}

export default MenuFooter









