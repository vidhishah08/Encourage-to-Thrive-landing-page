import React from "react";
import Capture4 from "../assets/Capture4.png"
import Capture5 from "../assets/Capture5.png"
import Capture6 from "../assets/Capture6.png"
import Capture7 from "../assets/Capture7.png"
import Capture8 from "../assets/Capture8.png"
import Capture9 from "../assets/Capture9.png"
import Capture10 from "../assets/Capture10.png"
import Capture11 from "../assets/Capture11.png"
import Capture12 from "../assets/Capture12.png"

function Footer(){
    return(
        <>
            <div className="bg-[#4f2b6b] h-[650px] mt-[300px]  mx-[-150px]">
                <img src={Capture4} alt="Capture4" className="pt-[251px] pl-[650px]  "/>
                <div>
                    <img src={Capture5} alt="Capture5" className="mt-[-500px] ml-[150px]"/>
                    <p className="text-white text-[16px] font-medium w-[450px] text-start ml-[390px] mt-[-125px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, sit repellat? Optio, molestias officiis. Vitae ratione dolorem sapiente recusandae, fugit magnam</p>
                </div>
                <div className="text-white font-medium text-[17px] text-start mt-[70px] ml-[150px]">
                    <p className="mb-[18px]">Home</p>
                    <p className="mb-[18px]">About Us</p>
                    <p className="mb-[18px]">Services</p>
                    <p className="mb-[18px]">Page</p>
                    <p className="mb-[18px]">FAQ</p>
                    <p>Career</p>
                </div>
                <div>
                    <div className="flex justify-center items-start ml-[-700px] mt-[-250px]">
                        <img src={Capture6} alt="Capture6" className="w-[50px]" />
                        <p className="text-white font-semibold text-[20px] px-[5px] pt-1">Website</p>
                    </div>
                    <p className="text-white ml-[-570px] mt-[-10px]">www.psychobece.xyz</p>
                    <div className="flex justify-center items-start ml-[-700px] mt-[15px]">
                        <img src={Capture7} alt="Capture7" className="w-[40px]" />
                        <p className="text-white font-semibold text-[20px] px-[5px] pt-1">Phone </p>
                    </div>
                    <p className="text-white ml-[-600px] mt-[-6px]">+012 2398 27398</p>
                    <div className="flex justify-center items-start ml-[-700px] mt-[15px]">
                        <img src={Capture8} alt="Capture8" className="w-[40px]" />
                        <p className="text-white font-semibold text-[20px] px-[5px] pt-1">Email </p>
                    </div>
                    <p className="text-white ml-[-570px] mt-[-6px]">mail@psycho.bece</p>
                    <img src={Capture9} alt="Capture9" className="ml-[350px] h-[43px] mt-[15px]"/>
                </div>
                <div className="flex justify-center ml-[-830px] mt-5">
                    <img src={Capture10} alt="Capture10" />
                    <p className="text-white text-[10px] pt-1 ">2023 All rights Reserved. Design and Developed With love by Digital Ipsum</p>
                </div>
                <div className="flex justify-center ml-[900px] mt-[-400px]">
                    <p className="text-[32px] font-light text-white">A Brand Of</p>
                    <img src={Capture12} alt="Capture12" className="mt-[-25px] pl-2 h-[70px]"/>
                </div>
                <img src={Capture11} alt="Capture12" className="ml-[1100px] mt-[25px] w-[250px]"/>
            </div>
            <div className="flex mt-[-850px]">
                <div className="h-[300px] w-[200px] rounded-r-xl bg-[#d9539c] ml-[-150px] mr-[35px]"></div>
                <div className="h-[220px] w-[330px] rounded-xl bg-[#d9539c] mt-[80px] mr-[35px]"></div>
                <div className="h-[300px] w-[330px] rounded-xl bg-[#d9539c] mr-[35px]"></div>
                <div className="h-[180px] w-[330px] rounded-xl bg-[#d9539c] mt-[120px] mr-[35px]"></div>
                <div className="h-[300px] w-[186px] rounded-l-xl bg-[#d9539c] mr-[-180px]"></div>
            </div>
        </>
    )
}

export default Footer