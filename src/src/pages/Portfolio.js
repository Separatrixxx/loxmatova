import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'


function Portfolio () {
    return (
        <div className="scroll-smooth bg-white">
            <Header />
            <div id="first_div" className="w-full h-screen bg-white" onTouchStart={closeMenu}>
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


export default Portfolio;
