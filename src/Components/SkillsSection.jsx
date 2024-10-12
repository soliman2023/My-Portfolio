import React from 'react'

let skillList = [
  {
    stackName: "Programming Languages",
    stackTech: ["C++", "JS", "Python", "PHP", "Node.Js" , "Java"]
  },{
    stackName: "Software Testing",
    stackTech: ["Java", "Postman", "Selenium", "Playwright", "JMeter", "TestNG", "Robot Framework", "Testlink", "Katalon Studio" ]
  },{
    stackName: "Frameworks",
    stackTech: ["MERN", "Laravel", "Selenium","WordPress", "Frappe"]
  },{
    stackName: "Front-end",
    stackTech: ["HTML", "CSS", "Bootstrap", "JavaScript", "Jquery", "SCSS", "Tailwind", "React.JS" ]
  },{
    stackName: "Back-end",
    stackTech: ["Node.Js", "Express.js", "PHP", "Laravel", "Restful API", "postman"]
  },{
    stackName: "DataBases",
    stackTech: ["MySQL", "PostgreSQL", "MongoDB", "Mongoose" ]
  },{
    stackName: "Other Tools & Operating Systems",
    stackTech: ["Git", "Jira", "Trello","Agile", "Ubuntu" , "Kali Linux" , "Windows" ]
  }]
export default function SkillsSection() {
  return (

    <div id='Skills' className=" container mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 ">
        <h2 className='text-6xl  mt-10 m-auto lg:m-auto  ' >Tech Skills</h2>
      {
        skillList.map((skills, key) => {
          return (
            <div className="card  bg-theme-cc shadow-xl " key={key}>
              <div className="card-body">
                {/* <figure>{images}</figure> */}
                <h2 className="card-title text-2xl font-extrabold pb-6">{skills.stackName}</h2>
                <ul>
                  {skills.stackTech.map((tech, liKey) => {
                    return (
                      <li key={liKey} className='flex flex-row-reverse items-center justify-between my-2 '>
                        <figure >
                          <img src={"src/assets/Imgs/Skills/"+ tech + ".png"} className='h-7' alt={tech + ".png"} />
                        </figure>
                        <h3 className='text-lg font-bold'>
                        {tech}
                        </h3>
                      </li>
                    )
                  })}
                </ul>
                {/* <div className="card-actions justify-end">
        <button className="btn btn-primary">Buy Now</button>
       </div> */}
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

