export default function Skill(props) {
  return (
    <div className="skills-section-skill" title={props.name}>
      <div className={props.name}>
        <img src={props.img} alt="tech-icon" /> 
        {/* <div className="skill-name" id={props.id}>{props.name}</div> */}
       {/*  <div className="skill-percentage">{props.percent}</div> */}
      </div>
      {/* <div className="skill-level-bar" style={{background: `linear-gradient(to right, #FCA311 ${props.percent}, #fff 20%)`}}></div> */}
    </div>
  );
}
