import React, { useEffect } from 'react';
import './components.css';
import bookstore from './images/bookstore.jpg'
import translator from './images/translator.avif'
import {TiDeviceDesktop} from "react-icons/ti";
import Aos from "aos";
import 'aos/dist/aos.css';
export default function Skills(){    
    useEffect(()=>{
        Aos.init({duration:1000})
    },[])

    const myprojects=[
        {
            id:1,
            name:bookstore,
            title:"ONLINE BOOK STORE ",
            description:"Book Store Website UI using HTML and CSS",
            address:"https://shirali-saraf.github.io/online-Book-store/",
            code:"https://github.com/shirali-saraf/online-Book-store"
           
        },
        {
            id:2,
            name:translator,
            title:"LANGAUGE TRANSLATER",
            description:"Lanaguge translation website using HTML CSS and JavaScript",
            address:"https://shirali-saraf.github.io/langauge-translator/",
            code:"https://github.com/shirali-saraf/langauge-translator"
        }
    ]
    return(

        <div className='project-container'>
        <div className='about_heading' id='project'>
            <h1 data-Aos='fade-down'><TiDeviceDesktop /> Projects</h1>
        </div>

        <div className='skill_section'>
            <div className='skill_section1'>
                {
                    myprojects.map((data)=><div className='myproject' data-Aos='fade-down'>
                    <div className='project_image'>
                     <img src={data.name} alt='logo'/>
                     <div className='project_description'>
                         <p className='project_para1'>{data.title}</p>
                         <p className='project_para2'>
                             {data.description}
                         </p>
                         <div className='project_buttons'>
                             <button className='project_btn'><a href={data.address} className='btn_link' target='blank'>View</a></button>
                             <button className='project_btn'><a href={data.code} className='btn_link' target='blank'>Github</a></button>
                         </div>
                     </div>     
                    </div> 
                 </div>

                    )
                }

                
                   
            </div>
        </div>


        </div>
        
    )
}