import React from 'react';
import style from '../themes/Navbar.module.css';
import img from '../GrupoFrigerio.png';
import img2 from '../GrupoFirgerioText.png.png';


const Navbar = () => {
  return (
    <div className={style.container}>
      <img className={style.logo} src={img} alt='Grupo' />
      <div className={style.anchorContainer}>
        <a href='#home'> Inicio </a>
        <a href='#aboutUs'> About Us </a>
      </div>
      <img className={style.logoCenter}src={img2} alt='Grupo'/>
      <div className={style.anchorContainer}>
        <a href='#contactUs'> Contact Us</a>
      </div>
    </div>
  );
};

export default Navbar;
