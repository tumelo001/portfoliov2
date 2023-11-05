import LinkIcon from '@mui/icons-material/Link';

export default function ProjectCard(props) {
    return (
        <>
            <a className='project-name' href={props.url}>{props.name} <LinkIcon style={{color: "#FCA311"}}/></a>
            <h4 className='project-date'>{props.date}</h4>
            <p className='project-decsription'>{props.description}</p>
            <ul className='project-tech-used'>
                {props.tech.map((item)=> {
                    return (<li key={item.id}>{item.name}</li>)
                })}
            </ul>
        </>
    );
}