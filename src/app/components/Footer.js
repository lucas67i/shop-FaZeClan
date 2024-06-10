import React from "react";
import style from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <ul className={style.social}>
        <li>E-Mail</li>
        <li>Instagram</li>
        <li>WhatsApp</li>
        <li>Facebook</li>
      </ul>
      <p>Since 13/03/2024</p>
      <div className={style.logo}>
        <Image
          width={100}
          height={100}
          src={"https://i.pinimg.com/564x/98/82/34/988234427ba8e088c092b11ca155af5e.jpg"} 
          alt="Logo da Loja"
        />
      </div>
    </footer>
  );
};

export default Footer;
