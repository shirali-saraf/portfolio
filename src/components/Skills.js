import React, { useEffect } from 'react';
import './components.css';
import html from './images/html.png';
import css from './images/css.png';
import javascript from './images/javascript.png';
import tailwind from './images/tailwind.png';
import react from './images/react.png';
import github from './images/github.png';
import cpp from './images/cpp.png';
import git from './images/git.png';
import bootstrap from './images/bootstrap.png';


import {FaLaptopCode} from "react-icons/fa";
import Aos from "aos";
import 'aos/dist/aos.css';
export default function Skills(){    
    useEffect(()=>{
        Aos.init({duration:1000})
    },[])

   const techs=[
    {
        id:1,
        name:html,
        title:"HTML",
        col:"rgb(255, 92, 51)"
    },
    {
        id:2,
        name:css,
        title:"CSS",
        col:"rgb(153, 204, 255)"
    },
    {
        id:3,
        name:javascript,
        title:"JavaScript",
        col:"orange"
    },
    {
        id:4,
        name:tailwind,
        title:"Tailwind",
        col:"rgb(26, 163, 255)"
    },
    {
        id:5,
        name:react,
        title:"React",
        col:"rgb(26, 163, 255)"
    },
    {
        id:6,
        name:github,
        title:"Github",
        col:"orange"
    },
    {
        id:7,
        name:cpp,
        title:"C++",
        col:"rgb(77, 184, 255)"
    },
    {
        id:8,
        name:bootstrap,
        title:"Bootstrap",
        col:"rgb(159, 34, 159)"
    },
    {
        id:8,
        name:git,
        title:"Git",
        col:"rgb(250, 98, 32)"
    }
    

   ]


    return(
        <div className='skill-container'>
        <div className='about_heading' id='skill'>
            <h1 data-Aos='fade-down'><FaLaptopCode /> MySkills</h1>
        </div>

        <div className='skill_section'>
            <div className='skill_section1'>
                {
                    techs.map((data) =>
                        <div className='myskills' data-Aos='fade-down' style={{color:data.col}}>
                        <img src={data.name} alt='logo' />
                        <p className='skill'>{data.title}</p>
                    </div>
    
                    )
                }
                   
            </div>
        </div>

        </div>
    )
}