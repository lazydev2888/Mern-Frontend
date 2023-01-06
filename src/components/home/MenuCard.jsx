import React from 'react'
import { motion} from "framer-motion"

const MenuCard = ({ItemNum, burgerSrc, price, title, handler , delay = 0}) => {
  return (
    <motion.div className='menuCard' 
    initial={{
        x:"-100%",
        opacity:0,
    }}
    whileInView={{
        x:0,
        opacity:1,
    }}
    transition={{
        delay,
    }}


    >
        <div>Item{ItemNum}</div>
        <main>
            <img src={burgerSrc} alt={ItemNum}/>
            <h5>₹{price}</h5>
            <p>{title}</p>
            <button onClick={() => handler(ItemNum)} >Buy Now</button>
        </main>
        </motion.div>
  )
}

export default MenuCard