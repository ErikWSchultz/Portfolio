import {FaRegHandshake} from 'react-icons/fa6'
import {GiJuggler} from 'react-icons/gi'
import {LuCalendarClock} from 'react-icons/lu' 
import {PiPuzzlePieceBold} from 'react-icons/pi'







export const techSkills = [
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
            {
                title: 'C++',
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

export const softSkills = [
    {
        title: 'Teamwork',
        Icon: <FaRegHandshake size={100}></FaRegHandshake>,
    },
    {
        title: 'Adaptability',
        Icon: <GiJuggler size={100}/>,
    },
    {
        title: 'Problem Solving',
        Icon: <PiPuzzlePieceBold size={100}/>,
    },
    {
        title: 'Time Management',
        Icon: <LuCalendarClock size={100}/>,
    },
];


export const extracurriculars = [
    {
        company: 'Toastmasters International Organization',
        location: 'Pittsford, NY',
        positions: [
            {
                title: 'Vice President of Public Relations',
                startDate: new Date(2023, 6),
                endDate: 'present',
            },
            {
                title: 'Sergeant at Arms',
                startDate: new Date(2022, 4),
                endDate: new Date(2023, 6),
            },
        ],
        tasks: [
            "Develop strategies to promote the club to the community, potential members, and guests",
            "Manage the club's social media accounts and website to share club events, achievements, and information",
            "Create content that showcases the club's activities and benefits",
        ],
    },
    {
        company: 'Literacy Rochester',
        location: 'East Rochester, NY',
        positions: [
            {
                title: 'Digital Volunteer',
                startDate: new Date(2022, 3),
                endDate: 'present',
            },
        ],
        tasks: [
            "Diagnose and troubleshoot technical problems",
            "Demonstrate strong communication skills by explaining technical concepts in a clear and understandable manner",
            "Recognized for outstanding problem-solving capabilities",
        ],
    },
];

export const educations = [
    {
        degree: 'B.S. Computer Science',
        school: 'Rowan University',
        startDate: new Date(2020, 10),
        endDate: new Date(2022, 4),
        location: 'Glassboro, NJ',
    },
    {
        degree: 'A.S. Computer Science',
        school: 'Raritan Valley Community College',
        startDate: new Date(2017, 10),
        endDate: new Date(2020, 4),
        location: 'Branchburg, NJ',
    },
];





