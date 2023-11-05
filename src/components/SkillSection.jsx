import Skill from "./Skill";
import skills from "../skills";


export default function SkillSection() {
    return(
        <div className="skills-main-section" id="skills">
            <h2>Tech stack👌</h2>
            <div className="skills-section">{skills.map((item)=> {
                return (
                    <Skill key={item.id} id={item.id} name={item.name} percent={item.percent} img={item.img} />
                )
            })}</div>
            
        </div>
    );
}