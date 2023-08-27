import React from 'react'
import Arrow6 from "../Assets/Arrow 6.png"
import Arrow7 from "../Assets/Arrow 7.png"
import python from "../Assets/python.png"
import onPlanet from "../Assets/astronaut_on_the_planet 1.png"

const Courses = () => {
  return (
    <>
        <div class="view-2" id="courses-block">
            <div class="overlap-4">
                <img class="arrow-2" src={Arrow6} />
                <img class="arrow-3" src={Arrow7} />
                <div class="overlap-group-3">
                <div class="text-wrapper-10">Python</div>
                <img class="python" src={python} />
                </div>
                <p class="discord">
                Курс &#34;С нуля до профессионала&#34; включает в себя основы программирования, работу с данными и
                графикой, разработку Discord-ботов, интеграцию с внешними сервисами и завершается созданием собственного
                проекта.
                </p>
                <div class="overlap-5">
                <div class="text-wrapper-11">12+</div>
                <img class="astronaut-on-the" src={onPlanet} />
                </div>
            </div>
        </div>
    </>
  )
}

export default Courses
