'use client'
import React from 'react'
import { IoIosNotifications } from 'react-icons/io'
import useIsPWA from '../_components/IsPwa';
import MenuFooter from '../_components/menuFooter';

const page = () => {
    const isPWA = useIsPWA();
    return (
        <div className='bgHomeMobile relative max-h-screen overflow-hidden  '>
              <div>
                <div className="p-4 flex justify-between items-center select-none ">
                  <img src="/logo/logo.png" alt="" className="w-[13rem]" />
                  <IoIosNotifications className='text-[1.8rem] bg-[#ffffff0f] text-[#d6d6e694] border-[.5px] border-white rounded-full ' />
                </div>
              </div>
              <div className='px-4 pb-4 select-none'>
                <h1 className='text-[1.3rem] text-white font-semibold'>Welcome Ossama </h1>
              </div>
        
              <div className='px-4 pb-4 '>
                <select name="" id="" className='rounded-lg pl-4 outline-none bg-[#ffffff14] text-gray-300 border-[1px]  border-[#ffffff26] h-[2rem] w-full'>
                  <option className='' value="">02/2026</option>
                  <option value="">01/2026</option>
                  <option value="">12/2025</option>
                  <option value="">11/2025</option>
                </select>
              </div>
        
              <div className={` ${isPWA ? "max-h-[calc(100vh-270px)]" : "max-h-[calc(100vh-320px)]"}  overflow-y-scroll `}>
        
                <div className="px-4 flex flex-col gap-4">


                    <div className='w-full bg-white rounded-md p-4 border-[1px] border-orange-300 glass text-white '>
                        <table>
                            <thead>
                                <tr>
                                    <td>ID</td>
                                    <td className='w-[20px] text-center'>:</td>
                                    <td>ibtissam202603011000</td>
                                </tr>
                                <tr>
                                    <td>Name Client </td>
                                    <td className='w-[20px] text-center'>:</td>
                                    <td>karim</td>
                                </tr>
                                <tr>
                                    <td>Phone </td>
                                    <td className='w-[20px] text-center'>:</td>
                                    <td>0610909090</td>
                                </tr>
                                <tr>
                                    <td>City </td>
                                    <td className='w-[20px] text-center'>:</td>
                                    <td>agadir</td>
                                </tr>
                                <tr>
                                    <td>Address </td>
                                    <td className='w-[20px] text-center'>:</td>
                                    <td>tikiouine</td>
                                </tr>
                                <tr>
                                    <td>Name Product</td>
                                    <td className='w-[20px] text-center'>:</td>
                                    <td>RL</td>
                                </tr>
                                <tr>
                                    <td>Price </td>
                                    <td className='w-[20px] text-center'>:</td>
                                    <td>200 DH</td>
                                </tr>
                            </thead>
                        </table>

                        <hr className='h-[1px] bg-slate-500 mt-4' />

                        <div className='mt-4'>
                            <p>Date : </p>
                            <p className='flex'>Status :
                                <span className="px-2 text-[15px] rounded-md text-white "> </span>
                            </p>

                            <p>
                                {/* Livreur : {phone?.match(/(?:\+212|0)[\s\-]?\d(?:[\s\-]?\d){8}/)} */}
                            </p>
                            <p>
                                {/* {(item["STATUT"] != "Mise en distribution" && item["STATUT"] != "Nouveau Colis" && item["STATUT"] != "Livré" && item["STATUT"] != "Attente De Ramassage" && item["STATUT"] != "Reçu") && item["COMMENT"]} */}
                            </p>

                        </div>

                    </div>

                    <div className='w-full bg-white rounded-md p-4 border-[1px] border-orange-300 glass text-white '>
                        <table>
                            <thead>
                                <tr>
                                    <td>ID</td>
                                    <td className='w-[20px] text-center'>:</td>
                                    <td>ibtissam202603011000</td>
                                </tr>
                                <tr>
                                    <td>Name Client </td>
                                    <td className='w-[20px] text-center'>:</td>
                                    <td>karim</td>
                                </tr>
                                <tr>
                                    <td>Phone </td>
                                    <td className='w-[20px] text-center'>:</td>
                                    <td>0610909090</td>
                                </tr>
                                <tr>
                                    <td>City </td>
                                    <td className='w-[20px] text-center'>:</td>
                                    <td>agadir</td>
                                </tr>
                                <tr>
                                    <td>Address </td>
                                    <td className='w-[20px] text-center'>:</td>
                                    <td>tikiouine</td>
                                </tr>
                                <tr>
                                    <td>Name Product</td>
                                    <td className='w-[20px] text-center'>:</td>
                                    <td>RL</td>
                                </tr>
                                <tr>
                                    <td>Price </td>
                                    <td className='w-[20px] text-center'>:</td>
                                    <td>200 DH</td>
                                </tr>
                            </thead>
                        </table>

                        <hr className='h-[1px] bg-slate-500 mt-4' />

                        <div className='mt-4'>
                            <p>Date : </p>
                            <p className='flex'>Status :
                                <span className="px-2 text-[15px] rounded-md text-white "> </span>
                            </p>

                            <p>
                                {/* Livreur : {phone?.match(/(?:\+212|0)[\s\-]?\d(?:[\s\-]?\d){8}/)} */}
                            </p>
                            <p>
                                {/* {(item["STATUT"] != "Mise en distribution" && item["STATUT"] != "Nouveau Colis" && item["STATUT"] != "Livré" && item["STATUT"] != "Attente De Ramassage" && item["STATUT"] != "Reçu") && item["COMMENT"]} */}
                            </p>

                        </div>

                    </div>

                    <div className='w-full bg-white rounded-md p-4 border-[1px] border-orange-300 glass text-white '>
                        <table>
                            <thead>
                                <tr>
                                    <td>ID</td>
                                    <td className='w-[20px] text-center'>:</td>
                                    <td>ibtissam202603011000</td>
                                </tr>
                                <tr>
                                    <td>Name Client </td>
                                    <td className='w-[20px] text-center'>:</td>
                                    <td>karim</td>
                                </tr>
                                <tr>
                                    <td>Phone </td>
                                    <td className='w-[20px] text-center'>:</td>
                                    <td>0610909090</td>
                                </tr>
                                <tr>
                                    <td>City </td>
                                    <td className='w-[20px] text-center'>:</td>
                                    <td>agadir</td>
                                </tr>
                                <tr>
                                    <td>Address </td>
                                    <td className='w-[20px] text-center'>:</td>
                                    <td>tikiouine</td>
                                </tr>
                                <tr>
                                    <td>Name Product</td>
                                    <td className='w-[20px] text-center'>:</td>
                                    <td>RL</td>
                                </tr>
                                <tr>
                                    <td>Price </td>
                                    <td className='w-[20px] text-center'>:</td>
                                    <td>200 DH</td>
                                </tr>
                            </thead>
                        </table>

                        <hr className='h-[1px] bg-slate-500 mt-4' />

                        <div className='mt-4'>
                            <p>Date : </p>
                            <p className='flex'>Status :
                                <span className="px-2 text-[15px] rounded-md text-white "> </span>
                            </p>

                            <p>
                                {/* Livreur : {phone?.match(/(?:\+212|0)[\s\-]?\d(?:[\s\-]?\d){8}/)} */}
                            </p>
                            <p>
                                {/* {(item["STATUT"] != "Mise en distribution" && item["STATUT"] != "Nouveau Colis" && item["STATUT"] != "Livré" && item["STATUT"] != "Attente De Ramassage" && item["STATUT"] != "Reçu") && item["COMMENT"]} */}
                            </p>

                        </div>

                    </div>

                    <div className='w-full bg-white rounded-md p-4 border-[1px] border-orange-300 glass text-white '>
                        <table>
                            <thead>
                                <tr>
                                    <td>ID</td>
                                    <td className='w-[20px] text-center'>:</td>
                                    <td>ibtissam202603011000</td>
                                </tr>
                                <tr>
                                    <td>Name Client </td>
                                    <td className='w-[20px] text-center'>:</td>
                                    <td>karim</td>
                                </tr>
                                <tr>
                                    <td>Phone </td>
                                    <td className='w-[20px] text-center'>:</td>
                                    <td>0610909090</td>
                                </tr>
                                <tr>
                                    <td>City </td>
                                    <td className='w-[20px] text-center'>:</td>
                                    <td>agadir</td>
                                </tr>
                                <tr>
                                    <td>Address </td>
                                    <td className='w-[20px] text-center'>:</td>
                                    <td>tikiouine</td>
                                </tr>
                                <tr>
                                    <td>Name Product</td>
                                    <td className='w-[20px] text-center'>:</td>
                                    <td>RL</td>
                                </tr>
                                <tr>
                                    <td>Price </td>
                                    <td className='w-[20px] text-center'>:</td>
                                    <td>200 DH</td>
                                </tr>
                            </thead>
                        </table>

                        <hr className='h-[1px] bg-slate-500 mt-4' />

                        <div className='mt-4'>
                            <p>Date : </p>
                            <p className='flex'>Status :
                                <span className="px-2 text-[15px] rounded-md text-white "> </span>
                            </p>

                            <p>
                                {/* Livreur : {phone?.match(/(?:\+212|0)[\s\-]?\d(?:[\s\-]?\d){8}/)} */}
                            </p>
                            <p>
                                {/* {(item["STATUT"] != "Mise en distribution" && item["STATUT"] != "Nouveau Colis" && item["STATUT"] != "Livré" && item["STATUT"] != "Attente De Ramassage" && item["STATUT"] != "Reçu") && item["COMMENT"]} */}
                            </p>

                        </div>

                    </div>
                </div>


            </div>


            <MenuFooter />

        </div>
    )
}

export default page
