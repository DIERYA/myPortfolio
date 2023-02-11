import React from 'react';
import ProjectCard from './ProjectCard';
import falcon from '../images/falcon1.jpeg';
import falcon2 from '../images/falcon2.jpg';
import triangle from '../images/triangle.jpg';

const ProjectSection = () => {
    return(
    
    
    <div className="project-container">
      
      < ProjectCard title="project 1" image={falcon} description="First project"/>
      < ProjectCard title="project 2" image={falcon2} description="Second project"/>
      < ProjectCard title="project 3" image={triangle} description="Third project"/>

    </div>



    )
}
export default ProjectSection;

