import React,{useEffect, useState} from "react";
import "./components.css";
import Aos from "aos";
import 'aos/dist/aos.css';
// import './Home.css';
import  developer from './images/developer.png';
import Typewriter from "typewriter-effect";
import {IoMdMail} from "react-icons/io";
import {AiFillLinkedin} from "react-icons/ai";
import {FaGithub} from "react-icons/fa";
import {SiLeetcode} from "react-icons/si";
import { BrowserRouter } from 'react-router-dom';
import { NavHashLink} from 'react-router-hash-link';
// import { Height } from "@material-ui/icons";
// import EmailIcon from '@mui/icons-material/Email';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import mylogo from './images/mylogo.png'
export default function Main() {
  const[mytitle]=useState({
    t1:'Hello',
    t2:"I'am",
    t3:'Shirali Saraf',
  });
  useEffect(()=>{
    Aos.init({duration:1000});
  },[])
  
  return (
    <>
    
      <BrowserRouter>
      <div className="main_page">
        <div className="content">
          <div className="content1">
            <div>
              <div>
                <h1>{mytitle.t1},</h1>
              </div>
              {/* <div>
                <h1>{mytitle.t2}</h1>
              </div> */}
              <div>
                <h1>{mytitle.t2} {mytitle.t3}</h1>
              </div>
              <div>
                <Typewriter  options={
                  {autoStart:true,
                  loop:true,
                  delay:40,
                  strings:[
                    "I'm a Web Developer",
                    "FrontEnd Web Developer"
                  ]}
                }/>
              </div>
              <div>
                <NavHashLink to="#about" smooth><button className="main_btn">AboutMe</button></NavHashLink>
              </div>
              <div className="main_icons">
                <div className="mi">
                <a href="mailto: 29shirali@gmail.com" target="blank"><IoMdMail size='1.5rem' /></a>
          
                </div>
                <div className="mi">
                <a href="https://www.linkedin.com/in/shirali-saraf/" target="blank"><AiFillLinkedin size='1.5rem' /></a>
      
                </div>
                <div className="mi">
                  <a href="https://github.com/shirali-saraf" target="blank"><FaGithub size='1.5rem' /></a>
          
                </div>
                <div className="mi">
                  <a href="https://leetcode.com/29shirali/" target="blank"> <SiLeetcode size='1.5rem' /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="content2">
            <img src={developer} alt="logo" />
          </div>
        </div>
      </div>
      </BrowserRouter>
  
  
      {/* <h1>shirali</h1> */}
    </>
  );
}
