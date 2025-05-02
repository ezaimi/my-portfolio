import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PushPinIcon from '@mui/icons-material/PushPin';

export const contactInfo = [
    {
        logo: <MapOutlinedIcon className="text-[#d33857]"
            sx={{
                fontSize: {
                    xs: '20px',
                    sm: '30px',
                    md: '40px',
                    lg: '50px',
                    xl: '50px'
                }
            }} />,
        info: "Vettersstr. 64, 09126 Chemnitz"
    },
    {
        logo: <LocalPhoneOutlinedIcon className="text-[#d33857]"
            sx={{
                fontSize: {
                    xs: '20px',
                    sm: '30px',
                    md: '40px',
                    lg: '50px',
                    xl: '50px'
                }
            }} />,
        info: "+4915754765394"
    },
    {
        logo: <EmailOutlinedIcon className="text-[#69afff]"
            sx={{
                fontSize: {
                    xs: '20px',
                    sm: '30px',
                    md: '40px',
                    lg: '50px',
                    xl: '50px'
                }
            }} />,
        info: "zaimi.erisa2@gmail.com"
    }
];


export const educationInfo = [
    {
        logo: <PushPinIcon className="text-[#000000]" fontSize="large" />,
        title: "Web Engineering",
        school: "TU Chemnitz",
        year: "2024-2026",
        description: "I'm currently pursuing a master's in Web Engineering, where I’m diving deeper into modern web technologies, software architecture, and system design. The program combines both theoretical and practical learning, and has allowed me to explore areas like cloud security, semantic web, and intelligent information systems. I’ve also worked on research topics such as access control models for knowledge graphs as part of my seminar courses."
    },
    {
        logo: <PushPinIcon className="text-[#000000]" fontSize="large" />,
        title: "Software Engineering",
        school: "Epoka University",
        year: "2021-2024",
        description: "I completed my bachelor's with a GPA of 3.77/4.0, focusing on both the theoretical and practical aspects of software development. The program covered a wide range of subjects, including data structures and algorithms, object-oriented programming, database management systems, software engineering principles, operating systems, and web technologies."
    }

]


export const workInfo = [
    {
        logo: <PushPinIcon className="text-[#000000]" fontSize="large" />,
        title: "Freelance Developer",
        company: "Nexus",
        year: "Ongoing since 2022",
        description: "I co-founded Nexus, a small startup where my teammates and I provide freelance software development services. We've built websites, management systems, and maintained existing platforms for various businesses. This experience has helped me deepen my technical skills, take ownership of end-to-end development processes, and better understand how to build practical, client-oriented solutions."
    },
    {
        logo: <PushPinIcon className="text-[#000000]" fontSize="large" />,
        title: "Internship",
        company: "Vodafone Albania",
        year: "Summer 2023",
        description: "During my remote internship at Vodafone Albania, I worked on projects focused on digital transformation and innovation. I gained hands-on experience through case studies and learned how large companies approach problem-solving and teamwork in real-world settings. It was a valuable experience that strengthened both my technical and collaboration skills."
    },
];


export const personalInfo =
{
    full_name: "Erisa Zaimi",
    profession: "Software Engineer",
    abautMe: "I'm a software engineer who enjoys turning ideas into real, useful applications. I’ve worked with a range of technologies including Java (Spring Framework), React.js, Node.js, PostgreSQL, and MongoDB. I like building full-stack solutions that are both efficient and user-friendly. Some of my favorite projects have combined creativity and logic—like an emotion-based music recommendation system and a web-based art marketplace. I’m also really interested in how tech, design, and teamwork come together to solve meaningful problems."
}

export const skills = [
    "Java",
    "Spring",
    "JWT/OAuth",
    "Microservices",
    "JavaScript",
    "TypeScript",
    "React",
    "HTML",
    "CSS",
    "Tailwind",
    "React Native",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "SQL",
    "Git",
    "Github Actions (CI/CD)",
    "WebSocket/Socket.io",
    "Python",
    "C#",
    "PHP",
    "Laravel"
];
