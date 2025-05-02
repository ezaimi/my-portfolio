import me from "../assets/Images/EntryPage/era-foto.png";
import "../style/EntryPage.css"
import { personalInfo } from "../data/GeneralData";
import { handledownload } from "../utilities/Helpers/ExternalConnection";
import cv from "../assets/Documents/CV_DavidKeci.pdf"



function WhoAmI() {
    return (
        <div className="sm:flex w-full mt-16 lg:mt-10">
            <div className="relative lgxl:w-[60%] lg:w-[65%] smmd:w-[50%]  p-4 text-white">

                <div className="flex text-[25px] lg:text-[31px] mt-6 font-michroma items-baseline tracking-wider sm:tracking-normal justify-center sm:justify-start whitespace-nowrap">
                </div>
                <div className="flex text-[25px] lg:text-[31px] mt-0 font-michroma items-baseline tracking-wider sm:tracking-normal justify-center sm:justify-start whitespace-nowrap">
                    <p className="font-mono  bg-white  text-transparent bg-clip-text text-[26px] lg:text-[38px]  ">
                        Hi, I am</p>
                    <p className="font-mono ml-5 bg-gradient-to-r from-[#a367bf] to-[#667ec5] text-transparent bg-clip-text text-[27px] lg:text-[38px]">{personalInfo.full_name}</p>
                </div>

                <div className="w-full flex  items-center justify-center sm:justify-start tracking-wider sm:tracking-normal">
                    <p className="font-mono text-black text-[26px] lg:text-[24px] md:text-[24px] mt-[-1px]">{personalInfo.profession}</p>
                </div>

                <div className="flex relative h-[27rem] justify-center items-center smmd:hidden ">
                    <div
                        style={{
                            backgroundColor: "rgba(255, 255, 255, 0.1)",
                            backdropFilter: "blur(20px)",
                            WebkitBackdropFilter: "blur(20px)",
                        }}
                        className="overflow-hidden  absolute z-0 rounded-full shadow-neumorphic flex items-center justify-center h-[23rem] w-[23] mt-6"
                    >
                        <img
                            src={me}
                            alt=""
                            className="mt-[2rem] h-[100%] w-auto object-contain z-10"
                        />
                    </div>
                </div>


                <div className="flex flex-col justify-center sm:justify-start items-center sm:items-start mt-10 sm:mt-6  font-michroma ">
                    <p className="font-mono text-[20px] lg:text-[20px]  text-[#ffffff]">About me</p>
                    <p className="text-center sm:text-start bg-gradient-to-r from-[#a367bf] to-[#667ec5] text-transparent bg-clip-text  mt-1 text-[13px]  md:text-[14px]">
                        {personalInfo.abautMe}
                    </p>
                </div>


                <div className="mt-10 flex flex-col justify-center items-center sm:items-start sm:justify-start">
                    <button className="rounded-full px-5 py-2 bg-[#2f2d2d] text-white hover:bg-transparent hover:outline hover:outline-2 hover:outline-black hover:text-black" onClick={()=>{handledownload(cv)}}>
                        Download CV
                    </button>
                </div>


            </div>

            {/* Image when large  */}
            {/* <div className=" w-[70%] lgxl:w-[40%] lg:w-[35%]  relative   h-[28rem] mt-[-4rem] sm:mt-0 md:ml-[4rem] left-4   hidden sm:flex">
                <div className="bg-red-400 absolute   w-[90%] lg:w-full lgxl:w-[85%] xl:w-[72%] max-w-[20rem] sm:top-44 lg:top-32 bottom-0 sm:bottom-6 lg:bottom-0  z-0"></div>
                <img src={me} alt="" className="h-[28rem]  sm:h-[24rem]  lg:h-[30rem] min-w-[25rem] lg:min-w-[31rem]  absolute smmd:left-[-4rem] mdlg:left-[-4rem] left-[-5rem] bottom-6  lg:bottom-0 z-10" />
            </div> */}
            <div className="w-[70%] lgxl:w-[40%] lg:w-[35%] sm:w-[50%] relative h-[28rem] mt-[-4rem] sm:mt-0 md:ml-[4rem] left-4 hidden smmd:flex">
                <div
                    style={{
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        backdropFilter: "blur(20px)",
                        WebkitBackdropFilter: "blur(20px)",
                    }}
                    className="overflow-hidden absolute z-0 rounded-full shadow-neumorphic flex items-center justify-center h-[23rem] w-[23] mt-6 smmd:w-[17rem] smmd:h-[17rem] smmd:mt-[6rem] smmd:ml-[1rem] md:w-[19rem] md:h-[19rem] md:ml-[-2rem] lgxl:w-[24rem] lgxl:h-[24rem] lgxl:mt-[2rem] 2xl:w-[26rem] 2xl:h-[26rem]"
                >
                    <img
                        src={me}
                        alt=""
                        className="mt-[2rem] h-[100%] w-auto object-contain z-10"
                    />
                </div>
            </div>




        </div >
    )
}

export default WhoAmI