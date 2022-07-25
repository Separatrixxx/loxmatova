import React from "react";


function ContactForm() {
    return(
        <div className="flex mt-7">
            <div>
                <div className="flex flex-col _anim-items _anim-no-hide contacts_5">
                    <label htmlFor="formName" className="text-sm lg:text-base text-neutral-800">Имя:</label>
                    <input id="formName" type="text" name="name" className="w-72 h-8 rounded-lg mt-1 bg-neutral-200 text-neutral-800 px-3 focus:outline-none hover:bg-neutral-300 focus:bg-neutral-300 transition-colors duration-300 ease-in-out" />
                </div>
                <div className="flex flex-col mt-3 _anim-items _anim-no-hide contacts_6">
                    <label htmlFor="formEmail" className="text-sm lg:text-base text-neutral-800">E-mail:</label>
                    <input id="formEmail" type="text" name="email" className="w-72 h-8 rounded-lg mt-1 bg-neutral-200 text-neutral-800 px-3 focus:outline-none hover:bg-neutral-300 focus:bg-neutral-300 transition-colors duration-300 ease-in-out" />
                </div>
                <div className="flex flex-col mt-3 _anim-items _anim-no-hide contacts_7">
                    <label htmlFor="formMessage" className="text-sm lg:text-base text-neutral-800">Сообщение:</label>
                    <textarea name="message" id="myText" className="w-72 h-24 rounded-lg mt-1 bg-neutral-200 text-neutral-800 px-3 py-1 focus:outline-none hover:bg-neutral-300 focus:bg-neutral-300 transition-colors duration-300 ease-in-out"></textarea>
                </div>
                <div className="mt-7 _anim-items _anim-no-hide contacts_8">
                    <button id="contacts_btn" className="w-56 h-10 rounded-lg bg-neutral-200 text-violet text-sm lg:text-base hover:bg-violet hover:text-neutral-200 transition-colors duration-300 ease-in-out">Отправить сообщение</button>
                </div>
            </div>
        </div>
    );

}

export default ContactForm;