import React from 'react'
import Logo from "../Assets/Logo.png"
import phone from "../Assets/telephone.png"

const Navbar = () => {
  return (
    <div class='navbar'>
      <div >
        <img class="astronaut" src={Logo} alt="" />
      </div>
      <div >
        <a class="text-wrapper" href="">О нас</a>
        <a href="" class="text-wrapper-2">Отзывы</a>
        <a href="" class="text-wrapper-3">Консультация</a>
        <a href="" class="text-wrapper-4">Контакты</a>
        <img class="phone-call" src ={phone} alt =""/>
        
        <a href="" class="text-wrapper-5">Отзывы</a>
      </div>
    </div>
  )
}

export default Navbar;
