import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'


function About () {
    return (
        <div className="scroll-smooth bg-white">
            <div id="first_div" className="flex flex-col lg:flex-row w-full bg-neutral-800" onTouchStart={closeMenu}>
                <div id="about_photo" className="w-full lg:w-1/2 h-screen bg-neutral-800 bg-cover bg-center bg-no-repeat"></div>
                <div className="w-full lg:w-1/2 bg-white pt-5 lg:pt-20 pl-7 pr-10 pb-5">
                    <h1 className="text-violet text-3xl lg:text-5xl font-bold _anim-items _anim-no-hide about_h">Наталья Лохматова</h1>
                    <p className="text-neutral-800 text-base lg:text-lg mt-5 _anim-items _anim-no-hide about_text">Мы попросили рассказать фотографов о том, как они начали заниматься фотографией, когда это стало больше, чем хобби, какие сложности пришлось преодолеть.</p>
                    <p className="text-neutral-800 text-base lg:text-lg mt-3 _anim-items _anim-no-hide about_text_1">Специально ко Дню фотографа ребята поделились своими историями, которые можно посмотреть в соцсетях по хэштегу #моя_история_для_gophotoweb. В блоге публикуем историю победителя конкурса и несколько самых интересных и вдохновляющих, на наш взгляд, историй.</p>
                    <p className="text-neutral-800 text-base lg:text-lg mt-3 _anim-items _anim-no-hide about_text_2">Эта история о том, как важно мечтать и не бояться идти к своей мечте. После университета я понимала, что по специальности работать не хочу (поступила и закончила ради родителей), начала работать в офисе. Но внутреннее неудовлетворение, скука, чувство, что время трачу зря, смотивировали меня уволиться, потом были разные должности, меня бросало от одной сферы в другую и все приносило одни страдания.</p>
                    <p className="text-neutral-800 text-base lg:text-lg mt-3 _anim-items _anim-no-hide about_text_3">Я не знала как мне все это получить, но я решила довериться пространству! Никто в меня не верил (ну разве что сестры, говорили после каждой съемки, что получилось бомбезно за что им большое спасибо! Хотя это было ужасно), хотелось, чтобы кто-то говорил — ты сможешь, у тебя получится! Но я нашла постоянную поддержку одного человека — это была я сама. Я знала, что я смогу, у меня все получится! Порой впадала в депрессии, критиковала себя беспощадно, но все равно шла к своей мечте).</p>
                </div>
            </div>
            <Header />
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


export default About;
