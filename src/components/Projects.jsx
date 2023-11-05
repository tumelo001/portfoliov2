import ProjectCard from "./ProjectCard";
import projects from "../container/projects";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useState } from "react";

const customStyle = {
    fontSize: "84px",
    color: "#FCA311",
    cursor: "pointer"
}
export default function Projects() {

    const [countProject, setCountProject] = useState(0);
    function handleLeftClick() {
        setCountProject(countProject === 0 ? projects.length - 1 : countProject-1);
    }
    function handleRightClick() {
        setCountProject(countProject === projects.length - 1 ? 0 : countProject + 1);
    }

    function handleCurrentClick(event) {
        setCountProject(event.target.id - 1);
    }

    return (
        <div className="projects-main-section" id="projects">
            <h2>Projects🔥</h2>
            <div className="project-slideshow">
                <div className="prev-arrow" onClick={handleLeftClick}><ChevronLeftIcon style={customStyle}  onClick={handleLeftClick}/></div>
                <div className="middle-section">
              
                <ProjectCard 
                key={projects[countProject].id}
                name={projects[countProject].name} 
                url={projects[countProject].url}
                description={projects[countProject].description}
                date={projects[countProject].date}
                tech={projects[countProject].tech}
                />
                   
                </div>
                <div className="next-arrow" onClick={handleRightClick}><ChevronRightIcon style={customStyle} onClick={handleRightClick}/></div>
            </div>
            <div className="current-project">
                {projects.map((item)=> {
                    
                    return(<div key={item.id} id={item.id} className="current" style={{backgroundColor: countProject === item.id-1 ? "#FCA311" : "transparent"}} onClick={handleCurrentClick}></div>)
                })}
            </div>
        </div>
    );
}