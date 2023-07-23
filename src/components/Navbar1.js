import React, { useEffect } from 'react';
import './components.css';
import mylogo from './images/mylogo.png';
import {FaBars} from "react-icons/fa";
import Aos from "aos";
import 'aos/dist/aos.css';
import { BrowserRouter } from 'react-router-dom';
import { NavHashLink} from 'react-router-hash-link';
// import { Link } from 'react-router-dom';
export default function Navbar(){
    function func(){
        // alert("helo");
        const navbar=document.querySelector(".list");
        navbar.classList.toggle("active");
    }
    var x = window.matchMedia("(max-width: 660px)");
    // document.getElementsByClassName("testing").onClick=check_media(x);
    function check_media(x){
        if(window.matchMedia("(max-width: 660px)")){
          
           func();
        }
    }
    useEffect(()=>{
        Aos.init({duration:1000})
    },[])
    return(
        <>
        <BrowserRouter>
        <div className='nav_bar'>
        <div className='logo'><img src={mylogo} alt='logo'/>
           <div className='bar' onClick={func}><FaBars size='25px'/></div>
        </div>
            <div className='list'>
                <ul className='abc'>
                    <li className='testing'><NavHashLink to='#' smooth className='navlinks' onClick={() => check_media({x})}>Home</NavHashLink></li>
                    <li><NavHashLink to='#about' smooth className='navlinks'>AboutMe</NavHashLink></li>
                    <li><NavHashLink to='#skill' smooth className='navlinks'>Skills</NavHashLink></li>
                    <li><NavHashLink to='#project' smooth className='navlinks'>Projects</NavHashLink></li>
                    <li><NavHashLink to='#contact' smooth className='navlinks'>ContactMe</NavHashLink></li>
                </ul>
            </div>
        </div>
        </BrowserRouter>
        </>
    )
}