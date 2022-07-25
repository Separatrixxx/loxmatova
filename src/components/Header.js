import React from "react";
import logo from "../img/iconW.svg";
import {IoMdMenu, IoMdClose} from "react-icons/io";


function Header() {
    return(
        <div className="flex flex-col lg:flex-row justify-center w-full fixed top-0 bg-neutral-800 p-2">
            <div className="flex justify-between lg:justify-end w-full lg:w-1/4 items-center">
                <a className="link px-5 py-3 lg:py-0" href="/">
                    <img className="w-5 select-none hover:animate-spin-slow" draggable="false" src={logo} alt="logo_icon" />
                </a>
                <h1 id="burger_menu" className="text-3xl text-white px-5 flex lg:hidden" onClick={openMenu}>
                    <IoMdMenu/>
                </h1>
                <h1 id="close_menu" className="text-3xl text-white px-5 hidden lg:hidden" onClick={closeMenu}>
                    <IoMdClose/>
                </h1>
            </div>
            <div className="flex flex-col lg:flex-row justify-center w-1/2 items-start lg:items-center">
                <a id="link_1" href="/about" className="text-lg lg:text-base py-2 lg:py-0 mt-3 lg:mt-0 hover:text-neutral-300 transition-colors duration-300 text-neutral-400 mx-5 lg:mx-9 select-none hidden lg:flex">О себе</a>
                <a id="link_2" href="/portfolio" className="text-lg lg:text-base py-2 lg:py-0 mt-3 lg:mt-0 hover:text-neutral-300 transition-colors duration-300 text-neutral-400 mx-5 lg:mx-9 select-none hidden lg:flex">Портфолио</a>
                <a id="link_3" href="/price" className="text-lg lg:text-base py-2 lg:py-0 mt-3 lg:mt-0 hover:text-neutral-300 transition-colors duration-300 text-neutral-400 mx-5 lg:mx-9 select-none hidden lg:flex">Прайс-лист</a>
                <a id="link_4" href="/contacts" className="text-lg lg:text-base py-2 lg:py-0 mt-3 lg:mt-0 hover:text-neutral-300 transition-colors duration-300 text-neutral-400 mx-5 lg:mx-9 select-none hidden lg:flex mb-3 lg:mb-0">Контакты</a>
            </div>
            <div className="flex justify-center p-5 w-1/4 hidden lg:block">

            </div>
        </div>
    );
}

function openMenu() {
    document.getElementById('close_menu').classList.remove('hidden');
    document.getElementById('link_1').classList.remove('hidden');
    document.getElementById('link_2').classList.remove('hidden');
    document.getElementById('link_3').classList.remove('hidden');
    document.getElementById('link_4').classList.remove('hidden');
    document.getElementById('burger_menu').classList.add('hidden');
}

function closeMenu() {
    document.getElementById('close_menu').classList.add('hidden');
    document.getElementById('link_1').classList.add('hidden');
    document.getElementById('link_2').classList.add('hidden');
    document.getElementById('link_3').classList.add('hidden');
    document.getElementById('link_4').classList.add('hidden');
    document.getElementById('burger_menu').classList.remove('hidden');
}

export default Header;