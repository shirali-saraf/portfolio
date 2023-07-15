import React, { useEffect} from 'react';
import './components.css';
import Aos from "aos";
import 'aos/dist/aos.css';
import {FaUser} from "react-icons/fa";
import mypic from "./images/mypic.jpg";
export default function AboutMe(){
    useEffect(()=>{
        Aos.init({duration:1000})
    },[])

    // const [data,setData]=useState("Welcome to my portfolio! I'm Shirali Saraf, a passionate frontend web developer. Currently I am learning React and working on some frontend technologies including HTML, CSS, JavaScript, React.");
   
    return(
        <div className='about-component'>
        <div className='about_heading' id='about'>
            <h1 data-Aos='fade-down'><FaUser />AboutMe</h1>
        </div>
        <div className='about_section'>
            <div className='about_section1' data-Aos='fade-right'>
                <div className='about_pic'>
                    <img src={mypic} alt='logo'/>
                </div>
            </div>
            <div className='about_section2' data-Aos='fade-left'>
                <div><p>Welcome to my portfolio! I'm Shirali Saraf, a passionate frontend web developer. Currently I am learning React and working on some frontend technologies including HTML, CSS, JavaScript, React.
                <br/><br/>As a frontend web developer, I specialize in bringing designs to life through clean, semantic code and immersive user experiences. My goal is to create engaging websites that not only look stunning but also provide seamless interactions for users. From responsive layouts to intuitive navigation and dynamic content.
                    <br/><br/>In addition to frontend development,I use C++ as the programming langauge for Data Structure And Algorithm.
                    <br/><br/> I am always eager to expand my skillset and take on new challenges, embracing opportunities to grow both professionally and personally.
                    <br/><br/>
                    Thank you for taking the time to learn more about me. I look forward to collaborating on exciting projects and creating innovative digital experiences. Feel free to reach out to discuss potential opportunities or to simply connect and share ideas. Let's build something incredible together!
                    </p></div>
                <div><button className='btn'>Resume</button></div>
            </div>
        </div>
        </div>
    )
}