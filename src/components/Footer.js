import React, { useEffect } from "react";
import "./components.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { IoMdMail } from "react-icons/io";
import { AiFillLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
export default function Footer() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="footer-container">
      <div className="footer_section">
        <div className="footer">
          <span>Designed and Developed by Shirali Saraf</span>
          <div className="footer_logo">
            <IoMdMail /> &nbsp;&nbsp;
            <AiFillLinkedin />&nbsp;&nbsp;
            <FaGithub />&nbsp;&nbsp;
            <SiLeetcode />&nbsp;&nbsp;
          </div>
        </div>
      </div>
    </div>
  );
}
