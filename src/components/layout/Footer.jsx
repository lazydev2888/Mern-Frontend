import React from 'react'
import {AiFillInstagram,AiFillGithub,AiFillYoutube} from "react-icons/ai"

const Footer = () => {
  return (
   <footer>
    <div>
        <h2>MBA Burger Waala</h2>
        <p>We are trying to give you the best taste possible.</p>
        <br />
        <em>We Give Attention to genuine Feedback.</em>
        <strong>All rights received @mbaBurgerwaala</strong>
    </div>
    <aside>
        <h4>Follow Us</h4>
        <a href='/'><AiFillYoutube /></a>
        <a href='/'><AiFillInstagram /></a>
        <a href='/'><AiFillGithub /></a>
    </aside>
   </footer>
  )
}

export default Footer