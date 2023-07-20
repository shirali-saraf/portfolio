import React, { useEffect } from 'react';
import './components.css';
import contactme from './images/contactme.png';
import Aos from "aos";
import 'aos/dist/aos.css';
export default function Contact(){    
    useEffect(()=>{
        Aos.init({duration:1000})
    },[])

    
    // function handler(e){
        
    //     e.preventDefault();
    // }
    function form_validate(){
        var name=document.getElementById("name");
        var email=document.getElementById("email");
        var message=document.getElementById("message");
        var mailformat = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;;
        if(name.value===""){
            alert("oopss...plzz enter your name");
        }
        if(email.value===""){
            alert("email is required...plzz enter a valid email address");
        }
        else if(!(email.value.match(mailformat))){
            alert("plzz enter a valid email address");

        }
        
        if(message.value===""){
            alert("message cant't be empty plzz enter some message");
        }
        
    }
    return(
        <div className='contact-container'>
        <div className='about_heading' id='contact'>
            <h1 data-Aos='fade-down'>Get In Touch</h1>
        </div>

        <div className='skill_section'>
            <div className='contact_section' data-Aos='fade-down'>
               <div className='contact_logo' data-Aos='fade-right'><img src={contactme} alt='logo'/></div>
               <div className='contact_fields' data-Aos='fade-left'>
                  <form action="https://formspree.io/f/mdorkzve" method="POST">
                  <table>
                    <tbody>
                        <tr>
                            <td><input type='text' placeholder='Name' className='contact_input' id='name' name='name' required/> </td>
                        </tr>
                        <tr>
                            <td><input type='text' placeholder='Email' className='contact_input' id='email' name='email' required/> </td>
                        </tr>
                        <tr>
                            <td><input type='text' placeholder='Phone' className='contact_input' name='phone' /> </td>
                        </tr>
                        <tr>
                            <td><textarea placeholder='Message' className='contact_input' style={{height:'160px'}} id='message' name='message' required/> </td>
                        </tr>
                        <tr>
                            <td><button type='submit' className='contact_btn' onClick={form_validate}>Submit</button></td>
                        </tr>
                    </tbody>
                  </table>
                  </form>
               </div>
                   
            </div>
        </div>


        </div>
    )
}