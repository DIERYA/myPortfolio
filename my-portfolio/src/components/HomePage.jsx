import React from 'react'
import Intro from "./Intro"
import ProjectSection from "./ProjectSection"

const HomePage = () => {
    return(
        <div className='homepage'>
            <Intro />
            <h1> Projects Section </h1>
            <ProjectSection />

        </div>
    )
    
    
}
export default HomePage;