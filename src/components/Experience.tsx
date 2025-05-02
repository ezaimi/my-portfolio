import "../style/EntryPage.css";
import { educationInfo, workInfo } from "../data/GeneralData";
import Transition from "./Common/Transition";

function Experience() {
    return (
        <>
            <div className="w-full flex flex-col items-center py-8">
                <div className="text-[#000000] font-mono  text-[18px]">Years of experience</div>
                <div className="text-[35px] bg-gradient-to-r from-[#a367bf] to-[#667ec5] text-transparent bg-clip-text font-mono">My Qualification</div>
            </div>

            <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-24">
                {/* Job Experience Section */}
                <Transition className="w-full h-full ">
                    <div style={{
                         backgroundColor: "rgba(255, 255, 255, 0.05)",
                         backdropFilter: "blur(15px)",
                         WebkitBackdropFilter: "blur(15px)", // Safari support
                         borderRadius: "20px",
                         border: "1px solid rgba(255, 255, 255, 0.1)",
                         
                    }} 
                    className=" h-full flex flex-col justify-between shadow-neumorphic p-8 transform transition-all duration-300 hover:scale-105">
                       
                        <div className="font-mono text-[24px] bg-gradient-to-r from-[#a367bf] to-[#667ec5] text-transparent bg-clip-text">Job Experience</div>
                        <div className="mb-[3rem]  mt-5">
                        {workInfo.map((item, index) => (
                            <div className="flex" key={index}>
                                <div className="flex flex-col   mt-5">
                                    {item.logo}
                                    <div className="mt-3 w-[3px] h-36 "></div>
                                </div>
                                <div className="py-4 pl-8 lg:px-6 font-lato">
                                    <p 
                                    className="font-mono text-[17px] text-[#28292a] text-xl md:text-[22px]">
                                        {item.title}
                                    </p>
                                    <div className="font-mono flex flex-col sm:flex-row text-[11px]  whitespace-nowrap  md:text-[13px] lgxl:text-[13px]  xl:flex-row bg-gradient-to-r from-[#a367bf] to-[#667ec5] text-transparent bg-clip-text">
                                        <p>{item.company}</p>
                                        <p className="md:ml-2 lgxl:ml-0 xl:ml-2">({item.year})</p>
                                    </div>
                                    <p className="mt-4 sm:text-[13px] w-full smmd:text-[14px] md:text-[15px] whitespace-wrap text-gray-400 text-base font-michroma leading-relaxed text-[0.9rem]">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                        </div>
                        
                    </div>
                </Transition>

                {/* Education Quality Section */}
                <Transition direction="right" className="w-full h-full">
                    <div style={{
                        backgroundColor:  "rgba(255, 255, 255, 0.1)",
                        backdropFilter: "blur(20px)",
                        WebkitBackdropFilter: "blur(20px)", // Safari support
                        borderRadius:"15px"
                    }} 
                    className=" h-full flex flex-col justify-between shadow-neumorphic p-8 transform transition-all duration-300 hover:scale-105">
                        <div className="font-mono text-[24px] bg-gradient-to-r from-[#a367bf] to-[#667ec5] text-transparent bg-clip-text">Education</div>
                        {educationInfo.map((item, index) => (
                            <div className="flex" key={index}>
                                <div className="flex flex-col  mt-5">
                                    {item.logo}
                                    <div className="mt-3 w-[3px] h-36 "></div>
                                </div>
                                <div className="py-4 pl-8 lg:px-6 font-lato">
                                    <p 
                                    className="font-mono text-[17px] lg:whitespace-nowrap text-[#28292a] text-xl md:text-[22px]">
                                        {item.title}
                                    </p>
                                    <div className="font-mono flex flex-col sm:flex-row text-[11px] md:text-[13px] lgxl:text-[14px] xl:flex-row  bg-gradient-to-r from-[#a367bf] to-[#667ec5] text-transparent bg-clip-text">
                                        <p>{item.school}</p>
                                        <p className="md:ml-2 lgxl:ml-0 xl:ml-2">({item.year})</p>
                                    </div>
                                    <p className="mt-4 sm:text-[13px] w-full smmd:text-[14px] md:text-[15px] text-gray-400 text-base font-michroma leading-relaxed text-[0.9rem]">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Transition>
            </div>
        </>
    );
}

export default Experience;
