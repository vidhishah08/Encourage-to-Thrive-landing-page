import React from "react";
import Logo from "../assets/Logo1.png"
import Capture from "../assets/Capture.png"
import Capture1 from "../assets/Capture1.png"
import Capture2 from "../assets/Capture2.png"
import Capture3 from "../assets/Capture3.png"

function Header(){
    return(
        <>
        <div className=" bg-[#faf2ff] mx-[-152px] my-[-32px]">
            <div className="flex pb-[62px]">
                <div className="pt-[20px] px-[20px] mr-[147px]">
                    <img src={Logo} alt="logo" className="w-[120px]"/>
                </div>
                <div className=" flex justify-between items-center text-gray-400 font-bold text-[15px] w-[800px] mr-[120px]">
                    <p className="text-[17px] text-black">Home</p>
                    <p>About</p>
                    <p>Learn</p>
                    <p>Play</p>
                    <p>Explore</p>
                    <p>Contact</p>
                </div>
                <div className="flex justify-between items-center ">
                     <div className="px-2 py-2 mr-[25px]">
                        <p className="text-black font-medium text-[17px]">EN</p>
                     </div>
                     <div className="mr-[15px]">
                        <button className="bg-[#380760] font-Caveat text-white font-medium text-center w-[120px] h-[40px] rounded-lg text-[20px]">Log in</button>
                     </div>
                     <div className=" bg-white items-center ">
                        <img src={Capture} alt="Capture" className="w-[38px]"/>
                     </div>
                </div>
            </div>
            <div className="text-center w-full pb-[90px]">
                <p className="text-[#d8529b] font-Caveat text-[50px]">Navigating Emotional Turbulence</p>
                <p className="text-[#380760] font-bold text-[57px]">to Slove Encourage to Thrive</p>
                <p className="text-[#380760] font-medium text-[17px] px-[490px] pt-[10px]">Where you nurture your mind & unleash you potential by discovering the power of pyschology for a healthier, happier you.</p>
            </div>
            <div className="flex justify-center pb-[450px]">
                <div className="flex justify-center items-baseline mr-6">
                    <div className=" bg-[#380760] flex items-center px-[15px] py-[15px] rounded-lg">
                        <img src={Capture1} alt="Capture1"/>
                        <div className="text-white items-start mr-[10px] ">
                            <p className="font-medium text-[18px] ml-[-35px]">Learn +</p>
                            <p className="font-light text-[13px] mt-[-7px] ml-[20px]">Message, chat, vedio</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-baseline mr-6">
                    <div className="flex items-center px-[15px] py-[15px] rounded-lg bg-white">
                        <img src={Capture2} alt="Capture2"/>
                        <div className="text-black items-start mr-[10px] ">
                            <p className="font-bold text-[18px] ml-[-45px]">Play +</p>
                            <p className="font-medium text-[13px] mt-[-7px] ml-[20px] opacity-20">Successful treatment</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-baseline">
                    <div className="flex items-center px-[15px] py-[15px] rounded-lg bg-white">
                        <img src={Capture3} alt="Capture3"/>
                        <div className="text-black items-start mr-[10px] ">
                            <p className="font-bold text-[18px] ml-[10px]">Explore ++</p>
                            <p className="font-medium text-[13px] mt-[-7px] ml-[20px] opacity-20">Years Experience</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-[#4f2b6b] mx-[-50px] h-[450px] mt-[-320px] rounded-2xl">
            <div className="pl-[550px]">
                <p className="text-white font-bold text-[40px] pt-[90px] w-[500px] text-start leading-[48px]">How can a career counseling help you?</p>
                <p className="text-white opacity-25 font-light text-[14px] text-start w-[500px] pt-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque ea nemo dignissimos. Quis odit esse, ut mollitia iusto sit labore cumque voluptatum blanditiis quas, corporis voluptate dolor unde harum quos!</p>
                <button className="text-white border-[#d8529b] border-[1px] rounded-md items-center px-9 py-3 mt-[90px] ml-[-615px] font-bold text-[13px]">Learn More</button>
            </div>
        </div>
        <div className="py-8 px-10 bg-white rounded-2xl mt-[-358px] w-[350px] ml-[50px] shadow-xl">
            <p className="text-[30px] text-black font-medium text-start leading-[40px]"><span className="text-[#d8529b]">60 minutes<br /></span>Consultations</p>
            <p className="text-[15px] text-start w-[310px] opacity-20 font-medium mt-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa dolor</p>
        </div>
        <div className="py-8 px-10 bg-white rounded-2xl mt-[30px] w-[350px] ml-[50px] shadow-2xl ">
            <p className="text-[30px] text-black font-medium text-start leading-[40px]">Take the <span className="text-[#d8529b]">test</span> at <br />the end</p>
            <p className="text-[15px] text-start w-[310px] opacity-20 font-medium mt-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa dolor</p>
        </div>
        </>
    )
}

export default Header