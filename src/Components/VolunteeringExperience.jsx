import React from 'react'

let workList = [{
    startDate: "september 2021",
    location: "Cairo, Egypt",
    endDate: "september 2022",
    comName: "Enactus Modern Academy",
    title: "Head of Finical Committee",
    responsibility: <ul><li>Develop and oversee the organization's budget, including revenue projections, expense tracking, and financial reporting.</li> <br /><li>Lead the development and execution of comprehensive fundraising strategies to secure financial resources from various sources, including sponsorships, donations, and grants.</li> <br /> <li>Develop and oversee the organization's budget, including revenue projections, expense tracking, and financial reporting. As well as Work collaboratively with other committee heads and organizational leadership to align financial planning with the organization's goals and priorities.</li></ul>,
    
}, {
    startDate: "November 2021",
    location: "Cairo, Egypt",
    endDate: "june 2022",
    comName: "GDSC - GOOGLE DEVELOPER STUDENT CLUB AL-AZHAR UNIVERSITY",
    title: "Head of web development committee",
    responsibility:<ul className='list'><li>Managed a team of 24 members in Front-end and Back-end development.</li> <br /> <li>Presented a web development bootcamp in al-Azhar university in and off-campus, as well as prepare instructors in my committee members to do a workshops for GDSC participants.</li> <br /> <li>Lead the design, development, and maintenance of the organization's website, ensuring functionality, usability, and responsiveness across desktop and mobile platforms.</li> </ul>,
    
},{
    startDate: "October 2021",
    location: "Cairo, Egypt",
    endDate: "December 2021",
    comName: "MSP (MICROSOFT STUDENT PARTNERS) -TECH AIN SHAMS UNIVERSITY",
    title: "Head of web development committee",
    responsibility: <ul><li>Oversee the creation and management of website content, including text, images, videos, and other multimedia elements, to ensure accuracy, relevance, and alignment with organizational goals.</li> <br /> <li>Write progress reports to the organization’s executive committee on the website and other projects.</li> <br /> <li>Coordinate with developers, designers, and other team members to implement technical features and functionality on the website, such as online forms, event registration, and member profiles.</li> </ul>,
    
},{
    startDate: "September 2020",
    location: "Cairo, Egypt",
    endDate: "September 2021",
    comName: "Enactus Modern Academy",
    title: "Member at External Relations (ER) Committee",
    responsibility: <ul className='list'><li>Working part of a team and collaborating with business units stakeholders, and technical teams to achieve the project goals.</li> <br /> <li>Responsible for getting us funded by dealing with sponsors and getting us beneficial deals.</li> <br /> <li>Come up with and organize any event we’re holding.</li> <br /> <li>Establish a database containing the contact information of speakers and sponsors for enactus modern academy.</li> </ul>,
    
},{
    startDate: "September 2020",
    location: "Cairo, Egypt",
    endDate: "September 2021",
    comName: "American Association of Petroleum Geologists (AAPG)",
    title: "Member at Public Relations (PR) Committee",
    responsibility: <ul><li>Supporting in any external event and Planning and getting the needed summer training, field trips and job vacancies setting the event data list ,contact with speakers ,find a convenient venue for offline events</li> <br /> <li>getting us fund by dealing with sponsors and getting us beneficial deals.</li> <br /> <li>Making Publicity and Marketing between other organizations/activities media coverage for the event, representing the whole event organization team for publicity purposes,are responsible for any contracts and permits.</li></ul>,
    
},]
export default function WorkExperience() {
    return (
        <div id='Volunteering' className="container mx-auto ">
            <h2 className='text-5xl lg:text-7xl pt-36 w-fit ' >Volunteering Experiences</h2>

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

