import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'


function Home () {
    return (
        <div className="scroll-smooth bg-white">
            <Header />
            <div id="first_div" className="w-full h-screen bg-white" onTouchStart={closeMenu}>
                <input id="qqq" type="text" name="name" className="mt-20 w-72 h-8 rounded-lg mt-1 bg-neutral-200 text-neutral-800 px-3 focus:outline-none hover:bg-neutral-300 focus:bg-neutral-300 transition-colors duration-300 ease-in-out" />
                <button id="www" className="w-56 h-10 rounded-lg bg-neutral-200 text-violet text-sm lg:text-base hover:bg-violet hover:text-neutral-200 transition-colors duration-300 ease-in-out">Хоба</button>
                <button id="eee" className="w-56 h-10 rounded-lg bg-neutral-200 text-violet text-sm lg:text-base hover:bg-violet hover:text-neutral-200 transition-colors duration-300 ease-in-out">Опа</button>
            </div>
            <Footer />
        </div>
    );
}

function closeMenu() {
    document.getElementById('close_menu').classList.add('hidden');
    document.getElementById('link_1').classList.add('hidden');
    document.getElementById('link_2').classList.add('hidden');
    document.getElementById('link_3').classList.add('hidden');
    document.getElementById('link_4').classList.add('hidden');
    document.getElementById('burger_menu').classList.remove('hidden');
}


export default Home;
