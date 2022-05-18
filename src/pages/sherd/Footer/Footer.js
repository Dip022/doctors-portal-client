import React from "react";
import footerBg from "../../../assets/images/footer.png";

const Footer = () => {
  return (
    <footer
      style={{
        background: `url(${footerBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      class="footer px-12 mt-5 mb-5 text-black"
    >
      <div>
        <span class="footer-title">SERVICES</span>
        <a class="link link-hover">Emergency Checkup</a>
        <a class="link link-hover">Monthly Checkup</a>
        <a class="link link-hover">Weekly Checkup</a>
        <a class="link link-hover">Deep Checkup</a>
      </div>
      <div>
        <span class="footer-title">ORAL HEALTH</span>
        <a class="link link-hover">Fluoride Treatment</a>
        <a class="link link-hover">Cavity Filling</a>
        <a class="link link-hover">Teath Whitening</a>
      </div>
      <div>
        <span class="footer-title">OUR ADDRESS</span>
        <a class="link link-hover">New York - 101010 Hudson</a>
      </div>
    </footer>
  );
};

export default Footer;
