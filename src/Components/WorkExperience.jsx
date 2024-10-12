import React from 'react'

let workList = [{
    startDate: "september 2022",
    location: "Cairo, Egypt",
    endDate: "october 2022",
    comName: "Orange",
    title: "Scrum Master Intern",
    responsibility: <ul><li>Facilitated daily stand-ups, sprint planning, retrospectives, and reviews, ensuring smooth sprint progress.</li><li>Managed and prioritized product backlogs, ensuring 95% of user stories were ready for development.</li> <li>Monitor sprint progress, assist in identifying and resolving impediments, and ensure that sprint goals are achieved.</li> <li>Maintained detailed Scrum-related documentation, such as sprint reports and improvement plans.</li></ul>,
    workedWith: ["Frappe" , "Python","JS" , "Jinja" , "SCSS" , "Tailwind" , "Flask" , "MongoDB" , "Docker" , "GIT" ]
}, {
    startDate: "November 2021",
    endDate: "january 2022",
    title: "Information Technology Intern",
    responsibility:<ul className='list'><li>Maintained server room, network of the company branch, database using phpMyAdmin.</li><li>•	Developed website representing database of branches using HTML5, CSS3 and vanilla JS.</li> <li>• Assisted in developing APIs that supported seamless integration for e-commerce developers.</li> <li>• Collaborated with designers and developers to optimize website performance and scalability by 15%.</li> <li>• Assist in the integration of third-party plugins and APIs to enhance website functionality, as well as Optimize website performance for speed and scalability.</li> </ul>,
    comName: "ARAMEX",
    workedWith: ["wordpress" , "Elementor" , "PHP" , "HTML" , "CSS" , "SCSS" , ]
},{
    startDate: "October 2021",
    endDate: "December 2021",
    comName: "eBen.work",
    title: "Growth Associate Intern",
    responsibility: <ul><li>• Working part of a team and collaborating with business units stakeholders, and technical teams to achieve the project goals.</li><li>• Using many techs. to customizing, enhancing, and integrating ERPNEXT application.</li></ul>,
    workedWith: ["Frappe" , "Python","JS" , "Jinja" , "SCSS" , "Tailwind" , "Flask" , "MongoDB" , "Docker" , "GIT" ]
},{
    startDate: "September 2021",
    endDate: "October 2021",
    comName: "CIB Bank",
    title: "Intern",
    responsibility: <ul className='list'><li>• Adhere to banking regulations and compliance standards to ensure the security and confidentiality of customer information.</li><li>• Participate in team meetings and training sessions on entrepreneurship, financial inclusion, online banking, tech in finance, and digital transformation. to learn about various banking products.</li></ul>,
    workedWith: ["Frappe" , "Python","JS" , "Jinja" , "SCSS" , "Tailwind" , "Flask" , "MongoDB" , "Docker" , "GIT" ]
},{
    startDate: "August 2021",
    endDate: "September 2021",
    comName: "INFORMATION TECHNOLOGY INDUSTRY DEVELOPMENT AGENCY (ITIDA)",
    title: "Intern",
    responsibility: <ul><li>• Completed a 45-hour training course and completed a final project for a potential startup.</li><li>• Being exposed to the Innovation and Technology Management, Design Thinking, and Entrepreneurship 101 Module uncovers the basic concepts of entrepreneurship which was the core of the program.</li> <li>• Completed a final project that ranked as the 3rd best project out of 24 projects in our training group.</li></ul>,
    workedWith: ["Frappe" , "Python","JS" , "Jinja" , "SCSS" , "Tailwind" , "Flask" , "MongoDB" , "Docker" , "GIT" ]
},{
    startDate: "July 2021",
    endDate: "August 2021",
    comName: "DELOITTE",
    title: "Technology Consulting intern",
    responsibility: <ul className='list'><li>• Participate in quality assurance activities, including testing, debugging, and troubleshooting software applications and systems to ensure functionality, reliability, and performance.</li><li>• Assist In The Design, Development, And Implementation Of Technology Solutions, Including Software Applications, Digital Platforms, And It Infrastructure, To Address Client Needs.</li></ul>,
    workedWith: ["Frappe" , "Python","JS" , "Jinja" , "SCSS" , "Tailwind" , "Flask" , "MongoDB" , "Docker" , "GIT" ]
},{
    startDate: "July 2021",
    endDate: "September 2021",
    comName: "ELNADY ENGINEERING",
    title: "Software Engineer Intern",
    responsibility: <ul><li>• Collaborate with software engineers to design and implement software solutions that meet project requirements. As well as Writing a clean, efficient, code using programming languages such as Java, Python, and C++.</li><li>• Participate in all phases of the software development lifecycle, including requirements analysis, design, coding, testing, and deployment.</li> <li>• Create solutions to run predictions on distributed systems with exposure to innovative technologies at incredible scale and speed.</li></ul>,
    workedWith: ["Frappe" , "Python","JS" , "Jinja" , "SCSS" , "Tailwind" , "Flask" , "MongoDB" , "Docker" , "GIT" ]
},]
export default function WorkExperience() {
    return (
        <div id='Work' className="container mx-auto ">
            <h2 className='text-5xl lg:text-7xl pt-36 w-fit ' >Work Experiences</h2>

            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                {workList.map((work, key) => {
                    return (
                        <li key={key} className=' p-4 '>
                            <div className="timeline-middle ">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                            </div>
                            <div className={(key % 2 ? "timeline-start md:text-end mb-10 " : "timeline-end mb-10" ) + " p-6 rounded-3xl bg-base-100 shadow-xl bg-theme-cc"}>
                                <div className="font-mono italic">{work.startDate + " - " + work.endDate}</div>
                                <h2 className="text-2xl font-black text-left ">{work.comName + " - " + work.title}</h2>
                                {work.responsibility}
                            {work.workedWith && work.workedWith.map((skill, key) => {return (<img src={"src/assets/Imgs/Skills/"+ skill + ".png"} alt={skill + ".png"}  className='h-7 inline m-3' />)})}
                            </div>
                            <hr />
                        </li>

                    )
                })}
            </ul>
        </div>
    )
}

