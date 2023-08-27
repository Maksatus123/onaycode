import React from 'react'
import Navbar from './Navbar';
import astro2 from "../Assets/astronaut2-hello.png"

const Home = () => {
  return (
    
      <>
        <Navbar/>
        <div class="view" id="main">
        <div class="overlap">
          <div class="rectangle"></div>
          <div class="ellipse"></div>
          <div class="overlap-group-wrapper">
            <div class="overlap-group">
              <div class="ellipse-2"></div>
              <img class="element-removebg" src={astro2} />
            </div>
          </div>
          <p class="p">
            <span class="span">Programming school<br />OnayCode!<br />“Coding is</span>
            <span class="text-wrapper-6">&nbsp;</span>
            <span class="text-wrapper-7">&lt;onay&gt;</span>
            <span class="span">!”</span>
          </p>
          <p class="onay-code">
            Вас приветствует школа программирования OnayCode!:)<br />Именно мы даем те знания, которые нужны
            программисту
          </p>
          <div class="group">
            <div class="overlap-2">
              <a href="#" class="text-wrapper-8">Пробный урок</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;
