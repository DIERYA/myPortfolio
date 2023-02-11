import React from 'react';


const ProjectCard = ( {title, image, description} ) => {
    return(

    <div className="project-card">
        <img className="project-image" href="" src={ image } />
        <h4 className="project-title">{ title }</h4>
        <div className="project-description">{ description }</div>
        
    </div>
    )
}
export default ProjectCard;

