import React from 'react'
import './header.css'
import people from '../../assets/people.png';
import circle from '../../assets/Ellipse 1.png';

const Header = () => {
  return (
    <div className='fruitbasket__header section__padding' id='home'>
      <div className='fruitbasket__header-content'>
        <h1 className='gradient__text'>Hello - Welcome to the Fruit Basket!</h1>
        <p>NO BITCHES?NO BITCHES?NO BITCHES?NO BITCHES?NO BITCHES?NO BITCHES?NO BITCHES?NO BITCHES?NO BITCHES?NO BITCHES?NO BITCHES?</p>
        <div className='fruitbasket__header-content__input'>
          <input type='email' placeholder='Your Email Address'></input>
          <button type='button'>Get Started</button>
        </div>

        <div className='fruitbasket__header-content__people'>
          <img src={people} alt='people'/>
          <p>...1600 bitches waiting for you...</p>
        </div>
      </div>
      <div className='fruitbasket__header-image'>
          <img src={circle} alt='circle'/>
      </div>
    </div>
  )
}

export default Header
