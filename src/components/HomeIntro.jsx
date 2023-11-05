import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

export default function HomeIntro(){
    return (
        <div className="main-block">
            <div className='div-social-icons'>
                <ul className='social-icons'>
                    <li><a href="https://github.com/tumelo001/" target='blank' title='GitHub profile'><GitHubIcon className='social-icons-icon'/></a></li>
                    <li><a href="https://www.linkedin.com/in/tumelo-ditlou-57051420b" target='blank' title='LinkedIn profile' ><LinkedInIcon className='social-icons-icon'/></a></li>
                    <li><a href="mailto:tumeloditlou7gamil.com" title='Gmail'><EmailIcon className='social-icons-icon'/></a></li>
                </ul>
            </div>
            <div className="profile-img">
                <img src="./images/profileimg.png" alt="profile image_2"/>
            </div>
            <div className='profile-info'>
                <h1 className="heading">Hi, I'm Tumelo</h1>
                <h3 className="sub-heading">Junior Software Developer</h3>
                <p className="discription">I'm third year student at the University of the Free State studying BSc in Information Technology with a major in Computer Science and Business Management. I am passionate about using technology to solve real-world problems. </p>
                <button className="btn-contact-me"><a href="#contact">Get in touch</a></button>
            </div>
        </div>
    );
}