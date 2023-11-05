import HomeIntro from "../components/HomeIntro";
import Navbar from "../components/Navbar";
import About from "../components/About";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { useState } from "react";
import SkillSection from "../components/SkillSection";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function App() {
    const [scroll, setScroll] = useState(false)
    window.onscroll = ()=> {
        (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) ? setScroll(true) : setScroll(false);
    }

    return (
        <div>
            <Navbar />
            <div className="olive"><HomeIntro/>
            {/* <About /> */}</div>
            
            <button className="goUp" onClick={()=>{
                                    document.body.scrollTop = 0;
                                    document.documentElement.scrollTop = 0;
                                        }}><ArrowUpwardIcon  style={{fontSize:"50px", border: "2px solid #FCA311", borderRadius: "100%", color: "#FCA311", display: scroll ? "block" : "none"}}/></button>
            <SkillSection /> 
            <Projects />
            <Contact /> 
        </div>
    );
}