import React from 'react'

import Project from './Project'
import  ProjectsList from "../data/data.json"
export default function Projects() {
  return (
    <div id='Projects' className="pt-36 container mx-auto">
      <h2 className='text-5xl lg:text-7xl m-auto' >Projects</h2>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-14 pb-20">

        {
          ProjectsList.map((project, key) => {
            return (
              <Project project={project} key={key} />
            )
          })
        }
      </div>
    </div>
  );
}