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
import {BiLogoJava} from 'react-icons/bi'
import {BsGit} from 'react-icons/bs'
import {MdFitScreen} from 'react-icons/md'
import {GiPencilRuler} from 'react-icons/gi'
import {SiProtodotio} from 'react-icons/si'
import {AiOutlineFileExcel} from 'react-icons/ai'
import {AiOutlineApi} from 'react-icons/ai'
import {AiOutlineApi} from 'react-icons/ai'

import {MdDataArray} from 'react-icons/md'
import {GrInherit} from 'react-icons/gr'



const Skills = () => {


  const techSkills = [
    {
        category: 'Front-End Development',
        skills: [
            {
                title: 'HTML',
                Icon: '',
            },
            {
                title: 'CSS',
                Icon: '',
            },
            {
                title: 'Tailwind CSS',
                Icon: '',
            },
            {
                title: 'JavaScript',
                Icon: '',
            },
            {
                title: 'React',
                Icon: '',
            },
           
        ],
    },
    {
        category: 'Back-End Development',
        skills: [
            
            {
                title: 'Python Django',
                Icon: '',
            },
    
            {
                title: 'PostgreSql',
                Icon: '',
            },
        ],
    },
    {
        category: 'Programming Languages',
        skills: [
            {
                title: 'Python',
                Icon: '',
            },
            {
                title: 'Java',
                Icon: '',
            },
           
        ],
    },

    {
        category: 'Build Tools, Frameworks, and Versioning',
        skills: [
            {
                title: 'Git',
                Icon: '',
            },
            {
                title: 'GitHub',
                Icon: '',
            },
        ],
    },
    {
        category: 'Design and Prototyping',
        skills: [
            {
                title: 'Responsive Design',
                Icon: '',
            },
            {
                title: 'Pen and Paper',
                Icon: '',
            },
            {
                title: 'Proto.io',
                Icon: '',
            },
        ],
    },
    {
        category: 'Microsoft Products',
        skills: [
           
            {
                title: 'Excel',
                Icon: '',
            },
        ],
    },
    {
        category: 'Others',
        skills: [
            {
                title: 'APIs',
                Icon: '',
            },
            {
                title: 'REST APIs',
                Icon: '',
            },
            {
                title: 'Object Oriented Programming',
                Icon: '',
            },
            {
                title: 'Data Structures and Algorithms',
                Icon: '',
            },
        ],
    },
];
  return (
    <ul className="w-[100%] grid justify-items-center items-start justify-center gap-9 md:gap-10 grid-cols-[repeat(1,1fr)] md:grid-cols-[repeat(2,1fr)]">
   
        <li className="w-[100%]">
            <h3 className="text-center mb-4 sm:mb-5 md:mb-6 lg:mb-7 ">Front-End Development</h3>
            <ul className="grid justify-items-center items-stretch justify-center grid-cols-[repeat(auto-fit,minmax(90px,90px))] gap-7 sm:grid-cols-[repeat(auto-fit,minmax(110px,110px))] sm:gap-8 md:grid-cols-[repeat(auto-fit,minmax(125px,125px))] lg:grid-cols-[repeat(auto-fit,minmax(140px,140px))]">
                
                    <li  className=" flex flex-col flex-nowrap items-center justify-center gap-5 glassy-screen w-[90px] min-h-[90px] p-4 sm:w-[110px] sm:min-h-[110px] sm:p-4 md:w-[125px] md:min-h-[125px] md:p-5 lg:w-[140px] lg:min-h-[140px] lg:p-6">
                        <skill.Icon />
                        <span className="text-center">{skill.title}</span>
                    </li>
                    <li  className=" flex flex-col flex-nowrap items-center justify-center gap-5 glassy-screen w-[90px] min-h-[90px] p-4 sm:w-[110px] sm:min-h-[110px] sm:p-4 md:w-[125px] md:min-h-[125px] md:p-5 lg:w-[140px] lg:min-h-[140px] lg:p-6">
                        <skill.Icon />
                        <span className="text-center">{skill.title}</span>
                    </li>
                    <li  className=" flex flex-col flex-nowrap items-center justify-center gap-5 glassy-screen w-[90px] min-h-[90px] p-4 sm:w-[110px] sm:min-h-[110px] sm:p-4 md:w-[125px] md:min-h-[125px] md:p-5 lg:w-[140px] lg:min-h-[140px] lg:p-6">
                        <skill.Icon />
                        <span className="text-center">{skill.title}</span>
                    </li>
                
            </ul>
            <h3 className="text-center mb-4 sm:mb-5 md:mb-6 lg:mb-7 ">{category.category}</h3>
            <ul className="grid justify-items-center items-stretch justify-center grid-cols-[repeat(auto-fit,minmax(90px,90px))] gap-7 sm:grid-cols-[repeat(auto-fit,minmax(110px,110px))] sm:gap-8 md:grid-cols-[repeat(auto-fit,minmax(125px,125px))] lg:grid-cols-[repeat(auto-fit,minmax(140px,140px))]">
                
                    <li  className=" flex flex-col flex-nowrap items-center justify-center gap-5 glassy-screen w-[90px] min-h-[90px] p-4 sm:w-[110px] sm:min-h-[110px] sm:p-4 md:w-[125px] md:min-h-[125px] md:p-5 lg:w-[140px] lg:min-h-[140px] lg:p-6">
                        <skill.Icon />
                        <span className="text-center">{skill.title}</span>
                    </li>
                
            </ul>
            <h3 className="text-center mb-4 sm:mb-5 md:mb-6 lg:mb-7 ">{category.category}</h3>
            <ul className="grid justify-items-center items-stretch justify-center grid-cols-[repeat(auto-fit,minmax(90px,90px))] gap-7 sm:grid-cols-[repeat(auto-fit,minmax(110px,110px))] sm:gap-8 md:grid-cols-[repeat(auto-fit,minmax(125px,125px))] lg:grid-cols-[repeat(auto-fit,minmax(140px,140px))]">
                
                    <li  className=" flex flex-col flex-nowrap items-center justify-center gap-5 glassy-screen w-[90px] min-h-[90px] p-4 sm:w-[110px] sm:min-h-[110px] sm:p-4 md:w-[125px] md:min-h-[125px] md:p-5 lg:w-[140px] lg:min-h-[140px] lg:p-6">
                        <skill.Icon />
                        <span className="text-center">{skill.title}</span>
                    </li>
                
            </ul>
            <h3 className="text-center mb-4 sm:mb-5 md:mb-6 lg:mb-7 ">{category.category}</h3>
            <ul className="grid justify-items-center items-stretch justify-center grid-cols-[repeat(auto-fit,minmax(90px,90px))] gap-7 sm:grid-cols-[repeat(auto-fit,minmax(110px,110px))] sm:gap-8 md:grid-cols-[repeat(auto-fit,minmax(125px,125px))] lg:grid-cols-[repeat(auto-fit,minmax(140px,140px))]">
                
                    <li  className=" flex flex-col flex-nowrap items-center justify-center gap-5 glassy-screen w-[90px] min-h-[90px] p-4 sm:w-[110px] sm:min-h-[110px] sm:p-4 md:w-[125px] md:min-h-[125px] md:p-5 lg:w-[140px] lg:min-h-[140px] lg:p-6">
                        <skill.Icon />
                        <span className="text-center">{skill.title}</span>
                    </li>
                
            </ul>
            <h3 className="text-center mb-4 sm:mb-5 md:mb-6 lg:mb-7 ">{category.category}</h3>
            <ul className="grid justify-items-center items-stretch justify-center grid-cols-[repeat(auto-fit,minmax(90px,90px))] gap-7 sm:grid-cols-[repeat(auto-fit,minmax(110px,110px))] sm:gap-8 md:grid-cols-[repeat(auto-fit,minmax(125px,125px))] lg:grid-cols-[repeat(auto-fit,minmax(140px,140px))]">
                
                    <li  className=" flex flex-col flex-nowrap items-center justify-center gap-5 glassy-screen w-[90px] min-h-[90px] p-4 sm:w-[110px] sm:min-h-[110px] sm:p-4 md:w-[125px] md:min-h-[125px] md:p-5 lg:w-[140px] lg:min-h-[140px] lg:p-6">
                        <skill.Icon />
                        <span className="text-center">{skill.title}</span>
                    </li>
                
            </ul>
        </li>
   
</ul>
  )
}

export default Skills
