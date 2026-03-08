'use client'

import React, { useEffect, useState } from 'react'
import { IoIosNotifications } from "react-icons/io";
import MenuFooter from '../_components/menuFooter';

import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import useIsPWA from '../_components/IsPwa';
import { useUser } from '@/app/_context/userContext';
import Loading from '@/app/loading';

import axios from 'axios';
import toast from 'react-hot-toast';

ChartJS.register(ArcElement, Tooltip, Legend);

const page = () => {

  const [infoApi, setInfoApi] = useState({
    id: "",
    apikey: ""
  })

  const { loading, veriryTokenGetUser, user } = useUser()


  const isPWA = useIsPWA();

  const data = {
    labels: ["Livré", "Retour"],
    datasets: [
      {
        data: [78, 22],
        backgroundColor: ["#14b8a6", "#fb923c"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: "70%",
    plugins: {
      legend: {
        display: false,
      },
    },
  };




  useEffect(() => {


    veriryTokenGetUser()
  }, [])


  const veriryTokenGetUse = async () => {

    const path = pathname.split("/")[2]


    try {

      const res = await axios.get("/api/me")

      console.log("data user", res.data)
      localStorage.setItem("user", JSON.stringify(res.data.user));
      // setLoading(true)


    } catch (error) {


      localStorage.removeItem("user")

      if (path == "dashboard" || path == "employee" || path == "orders" || path == "setting") {
        router.push("login")
      }

      console.log("verify token error", error.message)
    }


  }


  const sendInfoOzon = async () => {
    console.log(infoApi)
    try {

      const res = await axios.post("/api/ozonapi", { ...infoApi, user: user._id })

      setInfoApi({
        id: "",
        apikey: ""
      })

      toast.success(res.data.message)
      veriryTokenGetUser()





    } catch (error) {
      toast.error("create api ozon field !")
    }
  }



  return (
    !loading ?
      <Loading />

      :

      <div className={`bgHomeMobile relative max-h-screen overflow-hidden ${!loading && "hidden"} `}>
        <div>
          <div className="p-4 flex justify-between items-center select-none ">
            <img src="/logo/logo.png" alt="" className="w-[13rem]" />
            <IoIosNotifications className='text-[1.8rem] bg-[#ffffff0f] text-[#d6d6e694] border-[.5px] border-white rounded-full ' />
          </div>
        </div>
        <div className='px-4 pb-4 select-none'>
          <h1 className='text-[1.3rem] text-white font-semibold'>Welcome {user?.fullname} </h1>
        </div>


        {
          !user.isApi && <div className=' w-full h-[400px]  '>

            <h1 className='text-white font-semibold text-center text-[1.2rem] p-4'>Delivery company</h1>

            <div className='flex justify-center'>

              <div className='flex gap-4 p-4 bg-yellow-400 max-w-fit rounded-md'>
                <div className='flex gap-1'>
                  <p className='font-semibold text-white'>Ozon</p>
                  <p className='font-semibold text-red-700'>Express</p>
                </div>
                <input type="radio" checked />
              </div>
            </div>

            <div className='flex flex-col gap-3 mt-4 px-4'>
              <input type="text" placeholder='ID' name='id' value={infoApi.id} onChange={({ target }) => { setInfoApi({ ...infoApi, [target.name]: target.value }) }} className='w-full shadowInputs h-[2.5rem] pl-4 rounded-md  glass text-white outline-none' />
              <input type="text" placeholder='API Key  xxxxx-xxxxx-xxxxx-xxxxx-xxxxx' value={infoApi.apikey} name='apikey' onChange={({ target }) => { setInfoApi({ ...infoApi, [target.name]: target.value }) }} className='w-full shadowInputs h-[2.5rem] pl-4 rounded-md  glass text-white outline-none' />
              <button className='bg-orange-500 text-white h-[2.5rem] rounded-md  hover:bg-[#ffffff14] hover:border-[1px] hover:border-[#ffffff26] ' onClick={sendInfoOzon}>Send</button>
            </div>

          </div>
        }



        {
          user.isApi && <div className='px-4 pb-4 '>
            <select name="" id="" className='rounded-lg pl-4 outline-none bg-[#ffffff14] text-gray-300 border-[1px]  border-[#ffffff26] h-[2rem] w-full'>
              <option className='' value="">02/2026</option>
              <option value="">01/2026</option>
              <option value="">12/2025</option>
              <option value="">11/2025</option>
            </select>
          </div>
        }

        {
          user.isApi && <div className={` ${isPWA ? "max-h-[calc(100vh-270px)]" : "max-h-[calc(100vh-320px)]"}  overflow-y-scroll  `}>

            <div className="px-4 flex flex-col gap-4">
              {/* Revenue */}
              <Card title="Revenue" value="8950 DH" icon="💰" color="bg-orange-500/30" valueColor="text-orange-400" />

              {/* New Orders */}
              <Card title="Total Orders" value="206" icon="📦" color="bg-blue-500/30" valueColor="text-yellow-500" />
              {/* Delivered */}

              <Card title="Orders in Progress" value="40" icon="⏳" color="bg-blue-500/30" valueColor="text-gray-300" />
              <Card title="Delivered" value="109" icon="✅" color="bg-green-500/30" valueColor="text-green-400" />

              <Card title="Returns" value="19" icon="❌" color="bg-red-500/30" valueColor="text-red-400" />



              {/* Progress */}
              {/* <div className="glass rounded-2xl p-5">
          <p className="text-gray-300 text-sm mb-2">Performance</p>
          <div className="w-full bg-white/10 rounded-full h-3">
            <div className="bg-gradient-to-r from-green-400 to-emerald-600 h-3 rounded-full w-3/4"></div>
          </div>
        </div> */}

            </div>

            {/* bg-gradient-to-br */}
            <div className="  from-slate-900 to-slate-800 flex items-center justify-center p-6">
              <div className="w-full max-w-md space-y-6">

                {/* Orders Cards */}
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { title: "2 Orders", value: 0 },
                    { title: "3 Orders", value: 1 },
                    { title: "4 Orders", value: 0 },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-4 text-center shadow-lg"
                    >
                      <p className="text-white text-sm font-medium">{item.title}</p>
                      <p className="text-2xl font-bold text-white mt-1">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Chart Card */}
                <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-6 shadow-xl text-center">
                  <h2 className="text-white text-lg font-semibold mb-6">
                    Delivery and Returns Ratio
                  </h2>

                  <div className="relative w-56 h-56 mx-auto">
                    <Doughnut data={data} options={options} />

                    {/* Center Text */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <p className="text-white text-sm">Livré</p>
                      <p className="text-3xl font-bold text-teal-400">78%</p>
                    </div>
                  </div>

                  {/* Legend */}
                  <div className="flex justify-center gap-6 mt-6 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-teal-400 rounded"></div>
                      <span className="text-white">Livré</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-orange-400 rounded"></div>
                      <span className="text-white">Retour</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        }






        <MenuFooter />

      </div >
  )
}

export default page


function Card({ title, value, icon, color, valueColor }) {
  return (
    <div className="glass rounded-2xl p-5 shadow-xl flex justify-between items-center">
      <div>
        <p className="text-gray-300 text-sm">{title}</p>
        <h2 className={`text-3xl font-bold ${valueColor || ""}`}> {value} </h2>
      </div>
      <div className={`${color} p-3 rounded-xl text-xl`}> {icon} </div>
    </div>);
}


















