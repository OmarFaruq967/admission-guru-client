import React from "react";
import logo from "../../../../public/Images/Logo/logo.png";
import Container from "../Container/Container";

const Footer = () => {
  return (
    <div className="bg-base-200">
      <Container>
      <div className="footer py-10  text-base-content">
          <div className="w-[160px]">
            <img src={logo} alt="" />
            <p>
              Admission Guru.
              <br />
              Providing reliable tech since 1992
            </p>
          </div>
          <div>
            <span className="footer-title">Services</span>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </div>
          <div>
            <span className="footer-title">Company</span>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </div>
          <div>
            <span className="footer-title">Legal</span>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </div>
        </div>
      </Container>
       
        <div className="footer footer-center p-4 bg-base-300 text-base-content">
          <div>
            <p>Copyright © 2023 - All right reserved by Admission Guru</p>
          </div>
        </div>
      
    </div>
  );
};

export default Footer;
