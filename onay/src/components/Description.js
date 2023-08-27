import React from 'react'
import group from "../Assets/Group 109.png"

const Description = () => {
  return (
    <>
        <div class="overlap-wrapper" id="About-us-block">
            <div class="overlap-3">
                <div class="text-wrapper-9">OnayСode</div>
                <div class="div-wrapper">
                <div class="overlap-group-2">
                    <img src={group} alt=""/>
                </div>
                </div>
                <p class="onay-code-2">
                OnayCode - школа программирования, которая делает упор на практику. В нашей школе не бывает скучных
                занятий, ведь ученик на протяжении всего курса будет получать знания, создавая практические проекты,
                которые ему помогут в будущем. <br />Также наши преподаватели дают людям понять, что программирование это
                просто и что любой человек способен выучить новый навык. Если тебе интересно создавать нечто новое,
                использовать свое воображение в правильное русло, а также идти в ногу со временем, то тогда тебе к нам
                </p>
            </div>
        </div>
    </>
  )
}

export default Description
