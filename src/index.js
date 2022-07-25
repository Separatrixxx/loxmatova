import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);


const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll(params) {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if(animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            // eslint-disable-next-line no-restricted-globals
            if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
            } else {
                if (!animItem.classList.contains('_anim-no-hide')) {
                    animItem.classList.remove('_active');
                }
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }

    setTimeout(() => {
        animOnScroll();
    }, 150);
}


document.getElementById('contacts_btn').addEventListener('click', () =>{
    let reg = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/
    let address = document.getElementById('formEmail').value
    if (document.getElementById('formName').value === "" || document.getElementById('formEmail').value === "" || document.getElementById('myText').value === "" || reg.test(address) === false) {
        if (document.getElementById('formName').value === "") {
            document.getElementById('formName').classList.add('bg-red-200')
            document.getElementById('formName').classList.add('hover:bg-red-200')
            document.getElementById('formName').classList.add('focus:bg-red-200')
        } else {
            document.getElementById('formName').classList.remove('bg-red-200')
            document.getElementById('formName').classList.remove('hover:bg-red-200')
            document.getElementById('formName').classList.remove('focus:bg-red-200')
        }
        if (document.getElementById('formEmail').value === "") {
            document.getElementById('formEmail').classList.add('bg-red-200')
            document.getElementById('formEmail').classList.add('hover:bg-red-200')
            document.getElementById('formEmail').classList.add('focus:bg-red-200')
        } else {
            document.getElementById('formEmail').classList.remove('bg-red-200')
            document.getElementById('formEmail').classList.remove('hover:bg-red-200')
            document.getElementById('formEmail').classList.remove('focus:bg-red-200')
        }
        if (reg.test(address) === false) {
            document.getElementById('formEmail').classList.add('bg-red-200')
            document.getElementById('formEmail').classList.add('hover:bg-red-200')
            document.getElementById('formEmail').classList.add('focus:bg-red-200')
        } else {
            document.getElementById('formEmail').classList.remove('bg-red-200')
            document.getElementById('formEmail').classList.remove('hover:bg-red-200')
            document.getElementById('formEmail').classList.remove('focus:bg-red-200')
        }
        if (document.getElementById('myText').value === "") {
            document.getElementById('myText').classList.add('bg-red-200')
            document.getElementById('myText').classList.add('hover:bg-red-200')
            document.getElementById('myText').classList.add('focus:bg-red-200')
        } else {
            document.getElementById('myText').classList.remove('bg-red-200')
            document.getElementById('myText').classList.remove('hover:bg-red-200')
            document.getElementById('myText').classList.remove('focus:bg-red-200')
        }
    } else {
        document.getElementById('formName').classList.remove('bg-red-200')
        document.getElementById('formName').classList.remove('hover:bg-red-200')
        document.getElementById('formName').classList.remove('focus:bg-red-200')
        document.getElementById('formEmail').classList.remove('bg-red-200')
        document.getElementById('formEmail').classList.remove('hover:bg-red-200')
        document.getElementById('formEmail').classList.remove('focus:bg-red-200')
        document.getElementById('myText').classList.remove('bg-red-200')
        document.getElementById('myText').classList.remove('hover:bg-red-200')
        document.getElementById('myText').classList.remove('focus:bg-red-200')

        window.location.href = "mailto:llnata@rambler.ru"
            + "?cc=llnata@rambler.ru"
            + "&subject=Вопрос от пользователя " + encodeURIComponent(document.getElementById('formName').value)
            + "&body=" + encodeURIComponent(document.getElementById('myText').value);
    }
})
