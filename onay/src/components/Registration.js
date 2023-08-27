import {useRef, useState, useEffect } from "react";
import axios from '../api/axios';

const Registration = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const REGISTER_URL = '/register';
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(REGISTER_URL,
                JSON.stringify({ user, phoneNumber }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(response?.data);
            console.log(response?.accessToken);
            console.log(JSON.stringify(response))
            //clear state and controlled inputs
            //need value attrib on inputs for this
            setUser('');
            phoneNumber("");
        } catch (err) {
        }
    }
    return (
    <>
    <form onSubmit={handleSubmit}>
        <div class="view-5" id="registation-block">
            <div class="overlap-9">
                <div class="overlap-group-6">
                <p class="text-wrapper-18">Нужна помощь в выборе курса?</p>
                <p class="text-wrapper-19">
                    Получите подробную консультацию. Мы подберём для вас подходящий курс программирования
                </p>
                </div>
                <div class="overlap-10">
                <input type="text" placeholder="Фамилия и имя" class="rectangle-3" onChange={(e) => setUser(e.target.value)}/>
                </div>
                <div class="overlap-11">
                <input type="text" placeholder="Номер" class="rectangle-3" onChange={(e) => setPhoneNumber(e.target.value)}/>
                </div>
                <div class="overlap-12">
                    <button class="rectangle-4">
                        <span class="text-wrapper-22">Отправить заявку</span>
                    </button>
                </div>
                </div>
        </div>
    </form>
    
    
    </>
  )
}

export default Registration
