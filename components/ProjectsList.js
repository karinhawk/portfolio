import React from 'react'
import Card from "./Card"

const ProjectsList = ({projectsArr}) => {
    return (
        <div>
            {projectsArr.map((project) => {
                return (
                    <div key={project.id}>
                        <Card name={project.name} description={project.description} repo={project.repo} liveSite={project.liveSite}  />
                    </div>
                )
            })
            }
        </div>
    )
}

export default ProjectsList