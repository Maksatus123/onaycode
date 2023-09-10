import React from 'react'
import astro from "../Assets/astronaut2-hello.png"
import phone from "../Assets/telephone.png" 
import email from "../Assets/email.png"
import inst from "../Assets/instagram.png"
import tt from "../Assets/tik-tok.png"
import telega from "../Assets/telegram.png"

const Zaeb = () => {
  return (
    <div>
      
      <div class="view-4" id="socials-block">
          <div class="overlap-6">
            <div class="text-wrapper-13">Мы в соц сетях:</div>
            <div class="group-5">
              <div class="overlap-group-5">
                <img class="astronaut-2" src={astro} />
                <div class="text-wrapper-14">Onaycode</div>
              </div>
            </div>
            <div class="overlap-7">
              <div class="overlap-8">
                <div class="text-wrapper-15">Контакты</div>
                <div class="text-wrapper-16">+7783459164</div>
              </div>
              <img class="telephone" src={phone}/>
            </div>
            <div class="text-wrapper-17">onaycode@gmail.com</div>
            <img class="email" src={email} />
            <a href = "https://www.instagram.com/onay_code/">
            <img class="instagram" src={inst} />
            </a>
            <img class="tik-tok" src={tt} />
            
            <img class="tg" src={telega} />
          </div>
        </div>
    </div>
  )
}

export default Zaeb
