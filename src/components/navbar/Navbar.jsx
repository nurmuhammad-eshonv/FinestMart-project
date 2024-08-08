
import React, { useState, useEffect } from "react";
import "./Navbar.css";
import Logo from "../../assets/img/logo.png";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Home from "../../pages/home/Home";
import Likes from "../../pages/likes/Likes";
import Account from "../../pages/account/Account";
function Navbar() {
  const navigate = useNavigate()
    function handleChangeLanguage(event) {
        i18n.changeLanguage(event.target.value);
    } 
    const { t, i18n } = useTranslation();
    const ozgartirish=()=>{
      return localStorage.getItem('rejim')||"dark"
  }


  const [rejim,setRejim]=useState(ozgartirish)
  const thema=()=>{
      const newThema=rejim=="dark"?'retro':'dark'
      setRejim(newThema)
  };
  useEffect(()=>{
      document.documentElement.setAttribute('data-theme',rejim)
      localStorage.setItem('rejim',rejim)
  },[rejim])


  function handleHome() {
    navigate("/")
  }
    return (
    <>
      <div className="containerr">
        <div className="wrapper m-10 flex justify-between">
          <div className="nav-card1">
            <img className="cursor-pointer" onClick={handleHome} src={Logo} alt="Logo" />
          </div>
          <div className="nav-card2 flex gap-10">
            <NavLink to="/">{t("home")}</NavLink>
            <NavLink to="/likes">{t("categories")}</NavLink>
            <NavLink to="/account">{t("sales")}</NavLink>
          </div>
          <div className="nav-card3 -mt-3 flex gap-3 ">
          <label className="swap swap-rotate dropdown dropdown-end">
  <input onClick={()=>{thema()}} checked={rejim=='dark'} readOnly type="checkbox"  />

  <svg
    className="swap-on h-7 w-7 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
  </svg>

  {/* moon icon */}
  <svg
    className="swap-off h-7 w-7 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
  </svg>
</label>

             <select onChange={handleChangeLanguage} className="select">
                <option value="en">en</option>
                <option value="uz">uz</option>
             </select>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
