import {FaRegHandshake} from 'react-icons/fa6'
import {GiJuggler} from 'react-icons/gi'
import {LuCalendarClock} from 'react-icons/lu' 
import {PiPuzzlePieceBold} from 'react-icons/pi'

export default function SoftSkills() {
    return (
        <ul className="w-[100%] grid justify-items-center items-stretch justify-center md:gap-10 grid-cols-[repeat(auto-fit,minmax(90px,90px))] gap-7 sm:grid-cols-[repeat(auto-fit,minmax(110px,110px))] sm:gap-8 md:grid-cols-[repeat(auto-fit,minmax(125px,125px))] lg:grid-cols-[repeat(auto-fit,minmax(140px,140px))] text-white">
           
                <li className="text-white flex flex-col flex-nowrap items-center justify-center gap-5 glassy-screen w-[90px] min-h-[90px] p-4 sm:w-[110px] sm:min-h-[110px] sm:p-4 md:w-[125px] md:min-h-[125px] md:p-5 lg:w-[140px] lg:min-h-[140px] lg:p-6">
                <GiJuggler size={100}></GiJuggler>
                    <span className="text-center">Adaptability</span>
                </li>
                <li className="text-white flex flex-col flex-nowrap items-center justify-center gap-5 glassy-screen w-[90px] min-h-[90px] p-4 sm:w-[110px] sm:min-h-[110px] sm:p-4 md:w-[125px] md:min-h-[125px] md:p-5 lg:w-[140px] lg:min-h-[140px] lg:p-6">
                <FaRegHandshake size={100}></FaRegHandshake>
                    <span className="text-center">Teamwork</span>
                </li>
                <li className="text-white flex flex-col flex-nowrap items-center justify-center gap-5 glassy-screen w-[90px] min-h-[90px] p-4 sm:w-[110px] sm:min-h-[110px] sm:p-4 md:w-[125px] md:min-h-[125px] md:p-5 lg:w-[140px] lg:min-h-[140px] lg:p-6">
                <LuCalendarClock size={100}></LuCalendarClock>
                    <span className="text-center">Time Management</span>
                </li>
                <li className="text-white flex flex-col flex-nowrap items-center justify-center gap-5 glassy-screen w-[90px] min-h-[90px] p-4 sm:w-[110px] sm:min-h-[110px] sm:p-4 md:w-[125px] md:min-h-[125px] md:p-5 lg:w-[140px] lg:min-h-[140px] lg:p-6">
                <PiPuzzlePieceBold size={100}></PiPuzzlePieceBold>
                    <span className="text-center">Problem Solving</span>
                </li>
        </ul>
    );
}