import HomeIcon from '@mui/icons-material/Home';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import MailIcon from '@mui/icons-material/ContactMail';
import FactCheckIcon from '@mui/icons-material/FactCheck';

export default function Navbar() {
    return (
        <>
        <header><a href="#">Tumelo</a></header>
        <nav>
            <div className="left-nav-section"><a href="#">Tumelo</a></div>
            <div className="right-nav-section">
                <ul>
                    <li><a href="#">Home</a></li>
                   {/*  <li><a href="#about">About</a></li> */}
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
            <div className="mobile-nav-section">
                <ul>
                    <li><a href='#'><HomeIcon/></a></li>
                   {/*  <li><a href='#about'><PersonSearchIcon/></a></li> */}
                    <li><a href='#skills'><EmojiObjectsIcon/></a></li>
                    <li><a href='#projects'><FactCheckIcon/></a></li>
                    <li><a href='#contact'><MailIcon/></a></li>
                </ul>
            </div>
        </nav>
        </>
    );
}