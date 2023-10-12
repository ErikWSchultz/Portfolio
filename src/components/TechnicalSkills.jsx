import React from 'react'
import {AiOutlineHtml5} from 'react-icons/ai'
import {FaCss3Alt} from 'react-icons/fa'
import {BiLogoTailwindCss} from 'react-icons/bi' 
import {BiLogoJavascript} from 'react-icons/bi'
import {BiLogoReact} from 'react-icons/bi'
import {BiLogoDjango} from 'react-icons/bi'
import {BiLogoPostgresql} from 'react-icons/bi'
import {BiLogoPython} from 'react-icons/bi'
import {BiLogoJava} from 'react-icons/bi'
import {BsGit} from 'react-icons/bs'
import {MdFitScreen} from 'react-icons/md'
import {GiPencilRuler} from 'react-icons/gi'
import {SiProtodotio} from 'react-icons/si'
import {AiOutlineFileExcel} from 'react-icons/ai'
import {AiOutlineApi} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {SiDatabricks} from 'react-icons/si'
import {TbBinaryTree} from 'react-icons/tb'
import {PiBracketsCurlyDuotone} from 'react-icons/pi'



const Skills = () => {

  return (
    <div className='w-full py-[2rem] px-4'>
    <ul className="text-white w-[100%] grid justify-items-center items-start justify-center gap-9 md:gap-10 grid-cols-[repeat(1,1fr)] md:grid-cols-[repeat(2,1fr)]">
   
        <li className="w-[100%]">
            <h2 className=" text-[#00df9a] md:text-4xl sm:text-3xl text-xl text-center mb-4 sm:mb-5 md:mb-6 lg:mb-7 ">Front-End Development</h2>
            <ul className="grid justify-items-center items-stretch justify-center grid-cols-[repeat(auto-fit,minmax(90px,90px))] gap-7 sm:grid-cols-[repeat(auto-fit,minmax(110px,110px))] sm:gap-8 md:grid-cols-[repeat(auto-fit,minmax(125px,125px))] lg:grid-cols-[repeat(auto-fit,minmax(140px,140px))]">
                
                    <li  className=" flex flex-col flex-nowrap items-center justify-center gap-5 glassy-screen w-[90px] min-h-[90px] p-4 sm:w-[110px] sm:min-h-[110px] sm:p-4 md:w-[125px] md:min-h-[125px] md:p-5 lg:w-[140px] lg:min-h-[140px] lg:p-6">
                        <AiOutlineHtml5 size={100}/>
                        <span className="text-center">HTML</span>
                    </li>
                    <li  className=" flex flex-col flex-nowrap items-center justify-center gap-5 glassy-screen w-[90px] min-h-[90px] p-4 sm:w-[110px] sm:min-h-[110px] sm:p-4 md:w-[125px] md:min-h-[125px] md:p-5 lg:w-[140px] lg:min-h-[140px] lg:p-6">
                        <FaCss3Alt size={100}/>
                        <span className="text-center">CSS</span>
                    </li>
                    <li  className=" flex flex-col flex-nowrap items-center justify-center gap-5 glassy-screen w-[90px] min-h-[90px] p-4 sm:w-[110px] sm:min-h-[110px] sm:p-4 md:w-[125px] md:min-h-[125px] md:p-5 lg:w-[140px] lg:min-h-[140px] lg:p-6">
                        <BiLogoTailwindCss size={100}/>
                        <span className="text-center">Tailwind CSS</span>
                    </li>
                    <li  className=" flex flex-col flex-nowrap items-center justify-center gap-5 glassy-screen w-[90px] min-h-[90px] p-4 sm:w-[110px] sm:min-h-[110px] sm:p-4 md:w-[125px] md:min-h-[125px] md:p-5 lg:w-[140px] lg:min-h-[140px] lg:p-6">
                        <BiLogoJavascript size={100} />
                        <span className="text-center">Javascript</span>
                    </li>
                    <li  className=" flex flex-col flex-nowrap items-center justify-center gap-5 glassy-screen w-[90px] min-h-[90px] p-4 sm:w-[110px] sm:min-h-[110px] sm:p-4 md:w-[125px] md:min-h-[125px] md:p-5 lg:w-[140px] lg:min-h-[140px] lg:p-6">
                        <BiLogoReact size={100}/>
                        <span className="text-center">React</span>
                    </li>
                
            </ul>
            </li>
            <li className="w-[100%]">
            <h3 className=" text-[#00df9a] md:text-4xl sm:text-3xl text-xl text-center mb-4 sm:mb-5 md:mb-6 lg:mb-7">Back-End Development</h3>
            <ul className="grid justify-items-center items-stretch justify-center grid-cols-[repeat(auto-fit,minmax(90px,90px))] gap-7 sm:grid-cols-[repeat(auto-fit,minmax(110px,110px))] sm:gap-8 md:grid-cols-[repeat(auto-fit,minmax(125px,125px))] lg:grid-cols-[repeat(auto-fit,minmax(140px,140px))]">
            <li  className=" flex flex-col flex-nowrap items-center justify-center gap-5 glassy-screen w-[90px] min-h-[90px] p-4 sm:w-[110px] sm:min-h-[110px] sm:p-4 md:w-[125px] md:min-h-[125px] md:p-5 lg:w-[140px] lg:min-h-[140px] lg:p-6">
                        < BiLogoPython size={100}/>
                        <span className="text-center">Python</span>
                    </li>
                    <li  className=" flex flex-col flex-nowrap items-center justify-center gap-5 glassy-screen w-[90px] min-h-[90px] p-4 sm:w-[110px] sm:min-h-[110px] sm:p-4 md:w-[125px] md:min-h-[125px] md:p-5 lg:w-[140px] lg:min-h-[140px] lg:p-6">
                        < BiLogoDjango size={100}/>
                        <span className="text-center">Django</span>
                    </li>
                    <li  className=" flex flex-col flex-nowrap items-center justify-center gap-5 glassy-screen w-[90px] min-h-[90px] p-4 sm:w-[110px] sm:min-h-[110px] sm:p-4 md:w-[125px] md:min-h-[125px] md:p-5 lg:w-[140px] lg:min-h-[140px] lg:p-6">
                        < BiLogoPostgresql size={100}/>
                        <span className="text-center">PostgreSql</span>
                    </li>
                    
                
            </ul>
            </li>
            <li className="w-[100%]">
            <h3 className=" text-[#00df9a] md:text-4xl sm:text-3xl text-xl text-center mb-4 sm:mb-5 md:mb-6 lg:mb-7">Programming Languages</h3>
            <ul className="grid justify-items-center items-stretch justify-center grid-cols-[repeat(auto-fit,minmax(90px,90px))] gap-7 sm:grid-cols-[repeat(auto-fit,minmax(110px,110px))] sm:gap-8 md:grid-cols-[repeat(auto-fit,minmax(125px,125px))] lg:grid-cols-[repeat(auto-fit,minmax(140px,140px))]">
                
                    <li  className=" flex flex-col flex-nowrap items-center justify-center gap-5 glassy-screen w-[90px] min-h-[90px] p-4 sm:w-[110px] sm:min-h-[110px] sm:p-4 md:w-[125px] md:min-h-[125px] md:p-5 lg:w-[140px] lg:min-h-[140px] lg:p-6">
                        <BiLogoJava size={100}/>
                        <span className="text-center">Java</span>
                    </li>
                    <li  className=" flex flex-col flex-nowrap items-center justify-center gap-5 glassy-screen w-[90px] min-h-[90px] p-4 sm:w-[110px] sm:min-h-[110px] sm:p-4 md:w-[125px] md:min-h-[125px] md:p-5 lg:w-[140px] lg:min-h-[140px] lg:p-6">
                        <BiLogoPython size={100}/>
                        <span className="text-center">Python</span>
                    </li>
                
            </ul>
            </li>
            <li className="w-[100%]">
            <h3 className=" text-[#00df9a] md:text-4xl sm:text-3xl text-xl text-center mb-4 sm:mb-5 md:mb-6 lg:mb-7 ">Build Tools, Frameworks, and Versioning</h3>
            <ul className="grid justify-items-center items-stretch justify-center grid-cols-[repeat(auto-fit,minmax(90px,90px))] gap-7 sm:grid-cols-[repeat(auto-fit,minmax(110px,110px))] sm:gap-8 md:grid-cols-[repeat(auto-fit,minmax(125px,125px))] lg:grid-cols-[repeat(auto-fit,minmax(140px,140px))]">
                
                    <li  className=" flex flex-col flex-nowrap items-center justify-center gap-5 glassy-screen w-[90px] min-h-[90px] p-4 sm:w-[110px] sm:min-h-[110px] sm:p-4 md:w-[125px] md:min-h-[125px] md:p-5 lg:w-[140px] lg:min-h-[140px] lg:p-6">
                        <BsGit size={100}/>
                        <span className="text-center">Git</span>
                    </li>
                    <li  className=" flex flex-col flex-nowrap items-center justify-center gap-5 glassy-screen w-[90px] min-h-[90px] p-4 sm:w-[110px] sm:min-h-[110px] sm:p-4 md:w-[125px] md:min-h-[125px] md:p-5 lg:w-[140px] lg:min-h-[140px] lg:p-6">
                        <AiFillGithub size={100}/>
                        <span className="text-center">Github</span>
                    </li>
                
            </ul>
            </li>
            <li className="w-[100%]">
            <h3 className=" text-[#00df9a] md:text-4xl sm:text-3xl text-xl text-center mb-4 sm:mb-5 md:mb-6 lg:mb-7 ">Design and Prototyping</h3>
            <ul className="grid justify-items-center items-stretch justify-center grid-cols-[repeat(auto-fit,minmax(90px,90px))] gap-7 sm:grid-cols-[repeat(auto-fit,minmax(110px,110px))] sm:gap-8 md:grid-cols-[repeat(auto-fit,minmax(125px,125px))] lg:grid-cols-[repeat(auto-fit,minmax(140px,140px))]">
                
                    <li  className=" flex flex-col flex-nowrap items-center justify-center gap-5 glassy-screen w-[90px] min-h-[90px] p-4 sm:w-[110px] sm:min-h-[110px] sm:p-4 md:w-[125px] md:min-h-[125px] md:p-5 lg:w-[140px] lg:min-h-[140px] lg:p-6">
                        <MdFitScreen size={100}/>
                        <span className="text-center">Responsive Design</span>
                    </li>
                    <li  className=" flex flex-col flex-nowrap items-center justify-center gap-5 glassy-screen w-[90px] min-h-[90px] p-4 sm:w-[110px] sm:min-h-[110px] sm:p-4 md:w-[125px] md:min-h-[125px] md:p-5 lg:w-[140px] lg:min-h-[140px] lg:p-6">
                        <GiPencilRuler size={100}/>
                        <span className="text-center">Pen and Paper</span>
                    </li>
                    <li  className=" flex flex-col flex-nowrap items-center justify-center gap-5 glassy-screen w-[90px] min-h-[90px] p-4 sm:w-[110px] sm:min-h-[110px] sm:p-4 md:w-[125px] md:min-h-[125px] md:p-5 lg:w-[140px] lg:min-h-[140px] lg:p-6">
                        <SiProtodotio size={100}/>
                        <span className="text-center">Proto.io</span>
                    </li>
                
            </ul>
            </li>
            <li className="w-[100%]">
            <h3 className=" text-[#00df9a] md:text-4xl sm:text-3xl text-xl text-center mb-4 sm:mb-5 md:mb-6 lg:mb-7">'Microsoft Products</h3>
            <ul className="grid justify-items-center items-stretch justify-center grid-cols-[repeat(auto-fit,minmax(90px,90px))] gap-7 sm:grid-cols-[repeat(auto-fit,minmax(110px,110px))] sm:gap-8 md:grid-cols-[repeat(auto-fit,minmax(125px,125px))] lg:grid-cols-[repeat(auto-fit,minmax(140px,140px))]">
                
                    <li  className=" flex flex-col flex-nowrap items-center justify-center gap-5 glassy-screen w-[90px] min-h-[90px] p-4 sm:w-[110px] sm:min-h-[110px] sm:p-4 md:w-[125px] md:min-h-[125px] md:p-5 lg:w-[140px] lg:min-h-[140px] lg:p-6">
                        < AiOutlineFileExcel size={100}/>
                        <span className="text-center">Excel</span>
                    </li>
                
            </ul>
            </li>
            <li className="w-[100%]">
            <h3 className=" text-[#00df9a] md:text-4xl sm:text-3xl text-xl text-center mb-4 sm:mb-5 md:mb-6 lg:mb-7 ">Others</h3>
            <ul className="grid justify-items-center items-stretch justify-center grid-cols-[repeat(auto-fit,minmax(90px,90px))] gap-7 sm:grid-cols-[repeat(auto-fit,minmax(110px,110px))] sm:gap-8 md:grid-cols-[repeat(auto-fit,minmax(125px,125px))] lg:grid-cols-[repeat(auto-fit,minmax(140px,140px))]">
                
                    <li  className=" flex flex-col flex-nowrap items-center justify-center gap-5 glassy-screen w-[90px] min-h-[90px] p-4 sm:w-[110px] sm:min-h-[110px] sm:p-4 md:w-[125px] md:min-h-[125px] md:p-5 lg:w-[140px] lg:min-h-[140px] lg:p-6">
                        < AiOutlineApi size={100}/>
                        <span className="text-center">APIs</span>
                    </li>
                    <li  className=" flex flex-col flex-nowrap items-center justify-center gap-5 glassy-screen w-[90px] min-h-[90px] p-4 sm:w-[110px] sm:min-h-[110px] sm:p-4 md:w-[125px] md:min-h-[125px] md:p-5 lg:w-[140px] lg:min-h-[140px] lg:p-6">
                        < AiOutlineApi size={100}/>
                        <span className="text-center">REST APIs</span>
                    </li>
                    <li  className=" flex flex-col flex-nowrap items-center justify-center gap-5 glassy-screen w-[90px] min-h-[90px] p-4 sm:w-[110px] sm:min-h-[110px] sm:p-4 md:w-[125px] md:min-h-[125px] md:p-5 lg:w-[140px] lg:min-h-[140px] lg:p-6">
                        < PiBracketsCurlyDuotone size={100}/>
                        <span className="text-center">Object Oriented Programming</span>
                    </li>
                    <li  className=" flex flex-col flex-nowrap items-center justify-center gap-5 glassy-screen w-[90px] min-h-[90px] p-4 sm:w-[110px] sm:min-h-[110px] sm:p-4 md:w-[125px] md:min-h-[125px] md:p-5 lg:w-[140px] lg:min-h-[140px] lg:p-6">
                        < SiDatabricks size={100}/>
                        <span className="text-center">Data Structures</span>
                    </li>
                    <li  className=" flex flex-col flex-nowrap items-center justify-center gap-5 glassy-screen w-[90px] min-h-[90px] p-4 sm:w-[110px] sm:min-h-[110px] sm:p-4 md:w-[125px] md:min-h-[125px] md:p-5 lg:w-[140px] lg:min-h-[140px] lg:p-6">
                        < TbBinaryTree size={100}/>
                        <span className="text-center">Algorithms</span>
                    </li>
                
            </ul>
        </li>
   
</ul>
</div>
  )
}

export default Skills
