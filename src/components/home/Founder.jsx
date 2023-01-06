import { motion} from 'framer-motion'
import React from 'react'
import me from "../../assets/Founder.jpg"


const Founder = () => {
    const options = {
        initial:{
            x: "-100",
            opacity:0,
        },
        whileInView:{
            x:0,
            opacity:1,
        }
    }

  return (
    <>
    <section className='founder'>
        <motion.div {...options}>
            <img src={me} alt="Founder" height={200} width={200} />
            <h3>Md Faraz</h3>
            <p>Hey, Everyone This is Md Faraz, the not founder of MBA burger waala but the founder of website..<br />
            Our aim is to create the most tasty burger on planet..
            </p>
        </motion.div>
    </section>
    </>
  )
}

export default Founder