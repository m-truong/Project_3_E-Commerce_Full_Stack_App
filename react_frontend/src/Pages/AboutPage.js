import React from 'react'
import { Link, Redirect } from "react-router-dom"

const AboutPage = (props) => {
    return (
        <>
            <div>
                <h1>"You only live once, but you get to serve twice." -- Founder Mike Truong 🎾 </h1>
                <h2>What Drives Us At Racquet Dash</h2>
                <hr />
                <p> We are based in Boston, Massachusetts, and we've welcomed customers from all over the World since opening our first store in 1991. Today we have expanded to several locations including Cambridge, MA, Providence, RI, Scranton, PA, and Albuquerque, New Mexico. Our e-comerce website www.racquetdash.herokuapp.com has helped supply professional tennis equipment for tennis players from all over the World. </p>
                <p> Aside from our commercial activity, Racquet Dash has helped sponser many premier tennis league tournaments in the Greater Boston Area such as the Cambridge Open, Junior Crimson Bowl, and the All-Paul-Revere Tennis Tournament amongst others. Needless to say that we are commited to promoting the sport of Tennis and contributing to its growth worldwide. </p>
                <p> We take pride in the tennis equipment we sell and providing our world-class selection of brand-named tennis equipment for pro and amateur players alike, so thank you for choosing Racquet Dash! </p>
            </div>
            <Link to="/register">
                <button> Ready To Up Your Tennis Game? </button>
            </Link>
        </>
    )
}

export default AboutPage