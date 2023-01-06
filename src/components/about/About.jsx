import React from 'react'
import { Link } from 'react-router-dom'
import { RiFindReplaceLine} from "react-icons/ri"
import me from "../../assets/Founder.jpg"

const About = () => {
  return (
    <section className='about'>
        <main>
            <h1>About Us</h1>
            <article>
                <h4>MBA Burger Wala</h4>
                <p>We are MBA Burger Wala. The Place for most tasty burgers on the entire earth.</p>
                <p>Explore the various types of food and burgers Click below to see the menu</p>
                <Link to="/" >
                <RiFindReplaceLine />
                </Link>
            </article>
            <div>
                <h2>Founder</h2>
                <article>
                    <div>
                        <img src={me} alt="Founder" />
                        <h3>Lazydev</h3>
                    </div>
                    <p>
                        I am Faraz, the founder of MBA Burger Waala. Affiliate to Good Taste...
                    </p>
                </article>
            </div>
        </main>
    </section>
  )
}

export default About