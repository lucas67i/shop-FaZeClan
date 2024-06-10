import React from "react";
import style from "./header.module.css";
import Image from "next/image";

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.logo}>
        <Image
          width={100}
          height={100}
          src={"https://i.pinimg.com/564x/98/82/34/988234427ba8e088c092b11ca155af5e.jpg"} 
          alt="Logo da Loja"
        />
      </div>
      <p className={style.marketing}>Eles vêm ganhando desde 2010. Agora junte-se a eles.</p>
      <button className={style.addButton}>Adicionar novos produtos</button>
      <div className={style.cartIcon}>
        <Image
          width={70}
          height={48}
          src={"https://static.vecteezy.com/system/resources/previews/019/660/726/non_2x/shopping-cart-icon-on-transparent-background-free-png.png"}
          alt="Ícone de Carrinho"
        />
      </div>
    </header>
  );
};

export default Header;