import React, { useState } from 'react'
import Arrow6 from "../Assets/Arrow 6.png"
import Arrow7 from "../Assets/Arrow 7.png"
import python from "../Assets/python.png"
import scratch from "../Assets/scratch.jpg"
import unity from "../Assets/unity.png"
import js from '../Assets/js.png'
import andr from '../Assets/andr.png'
import onPlanet from "../Assets/astronaut_on_the_planet 1.png"

const Courses = () => {
  const nextSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? Slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  const prevSlide = () => {
    
    const isLastSlide = currentIndex === Slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }
  const Slides =[
    {
      name: 'python',
      descr : 'Курс ;С нуля до профессионала&#34; включает в себя основы программирования, работу с данными и \n графикой, разработку Discord-ботов, интеграцию с внешними сервисами и завершается созданием собственного \n проекта.',
      img: python,
      age: '12+'
    },
    {
      name: 'Scratch',
      descr : 'На данном курсе вы или ваш ребенок научатся создавать простейшие, но увлекательные игры, используя уже готовые блоки, без всякого сложного или непонятного кода. Научитесь воплощать свои идеи в жизнь, не беспокоясь о сложных вещах.',
      img: scratch,
      age: '6+'
    },
    {
      name: 'Unity',
      descr: "С нами вы освоите не только технические навыки, но и научитесь воплощать свои фантазии в интерактивные миры, где лишь ваша воображение является ограничением. У нас нет границ – только бескрайние возможности творчества и создания увлекательных игр. Добро пожаловать в увлекательное путешествие в мир Unity!",
      img: unity,
      age: '12+'
    },
    {
      name:'web-dev',
      descr: 'Научат основам главным языкам браузеров - JavaScript, HTML, CSS. На практике, вы будете создавать различные анимации, сайты и веб-страницы которые ограничиваются только вашим воображением и вашим желанием учится',
      img: js,
      age: '12+'
    },
    {
      name:'android',
      descr: 'Наш курс отправит вас в удивительное путешествие с азов программирования до мастерства, где вы сможете разрабатывать приложения, сравнимые с Twitter и Youtube.Вы сможете освоить языки программирования, инструменты разработки, искусство создания потрясающих пользовательских интерфейсов и многое другое.',
      img: andr,
      age: '12+'
    }
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  
  return (
    <>
        <div class="view-2" id="courses-block">
            <div class="overlap-4">
                <img class="arrow-2" src={Arrow6} onClick={prevSlide}/>
                <img class="arrow-3" src={Arrow7} onClick={nextSlide}/>
                <div class="overlap-group-3">
                <div class="text-wrapper-10">{Slides[currentIndex].name}</div>
                <img class="python" src={Slides[currentIndex].img} />
                </div>
                <p class="discord">
                {Slides[currentIndex].descr }
                </p>
                <div class="overlap-5">
                <div class="text-wrapper-11">{Slides[currentIndex].age}</div>
                <img class="astronaut-on-the" src={onPlanet} />
                </div>
            </div>
        </div>
    </>
  )
}

export default Courses
