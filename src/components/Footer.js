import React from "react";
import logo from "../img/iconG.svg";
import ScrollIntoView from "react-scroll-into-view";


function Footer() {
    return(
        <div className="flex flex-col items-center w-full bg-neutral-800">
            <div className="mt-7">
                <ScrollIntoView selector="#first_div">
                    <img className="w-6 select-none cursor-pointer hover:animate-spin-slow" draggable="false" src={logo} alt="logo_icon" />
                </ScrollIntoView>
            </div>
            <h1 className="text-neutral-400 text-a mt-5">Семейный фотограф Наталья LOхматова</h1>
            <h1 className="text-neutral-400 text-xs mt-3">© LOхматова, 2022 г. Все права защищены</h1>
            <p id="spr" className="text-neutral-400 text-xs mt-10 m-7">by <span className="font-bold">separatrix</span></p>
        </div>
    );

}

export default Footer;