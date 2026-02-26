import Link from "next/link";


export default function Home() {
  return (
    <div className="">

      {/* <img src="/backgrounds/bg2.png" alt="" className=" absolute " /> */}

      <div className=" bg-white hidden sm:block">
        <div className="bgImg  ">
          <div className="absolute top-0 left-0 w-full px-[3rem] h-screen z-10">
            <div className="flex items-center w-full  justify-between ">
              <div className="">
                <img src="/logo/logo.png" className="w-[15rem] " alt="" />
              </div>

              <div className="pt-[2rem] p-4 flex gap-[5rem] items-center ">
                <ul className="text-white flex gap-4 ">
                  <li>Home</li>
                  <li>About</li>
                  <li>log in</li>
                </ul>

                <Link href={"/signin"}><button className="px-10 bg-orange-500 text-white font-semibold h-[2.5rem] rounded-md">Get Started</button></Link>
              </div>
            </div>



            <div className="p-4 pt-[10rem]">
              <div className="text-[3rem] text-white font-semibold flex ">Welcome to Orderz<p className="text-orange-400">Pro</p> </div>

              <h1 className="text-[1.5rem] text-white w-[25rem] ">Streamline Your E-commerce Call Center Operations </h1>
              <p className="pt-4 w-[23rem] text-[0.9rem] text-white">Manage customer support agents, confirm orders, and track deliveries with ease, Boost efficiency and calculate commissions effortlessly.</p>
              <Link href={"/signin"}><button className="px-10 bg-orange-500 text-white font-semibold h-[2.5rem] rounded-md">Get Started</button></Link>
              


            </div>

          </div>
        </div>

        <div className="flex flex-col items-center">
          <h1 className="text-[3rem] font-semibold text-orange-400 mt-4 ">About </h1>
          <p className="w-[30rem] text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate repellat rem laborum quam consectetur doloribus dolore soluta voluptatem doloremque similique ab, totam aliquid? Itaque, cumque optio neque beatae quidem est?</p>
        </div>

        <div className="bgImg2 mt-[2rem]">

        </div>
      </div>

      <div className="sm:hidden">
        <div className="bgImgMobile1">
          <div className="p-4 flex justify-center">
            <img src="/logo/logo.png" alt="" className="w-[13rem]" />
          </div>

          <div className="p-[2rem] mt-[1.7rem]">
            <div className="text-[1.5rem] text-white font-semibold flex ">Welcome to Orderz<p className="text-orange-400">Pro</p> </div>

            <h1 className="text-[1rem] mt-4 text-white w-[15rem] ">Streamline Your E-commerce Call Center Operations </h1>

            {/* <button className="px-10 mt-[3rem] bg-orange-500 text-white font-semibold h-[2.5rem] rounded-md">Get Started</button> */}

          </div>

          <div className="absolute bottom-[2rem] p-[2rem]  py-0  " >
            <p className="pt-4 text-[1rem] text-center text-white">Manage customer support agents, confirm orders, and track deliveries with ease, Boost efficiency and calculate commissions effortlessly.</p>
            <Link href={"/signup"}><button className="w-[15rem] ml-[calc((100%-15rem)/2)]  mt-[2rem] bg-orange-500 text-white font-semibold h-[2.5rem] rounded-md">Get Started</button></Link>
          </div>

        </div>



      </div>

      <div className="h-[100px]">

      </div>

      <div className="bgImgfooter">

      </div>


    </div>
  );
}
