import React from 'react'
import "./body.css"
import About from "./about/About"
import Projects from './projects/Projects'
import Skills from './skills/Skills'
import Work from './work/Work'
import Contact from './contact/Contact'
function Body() {
    return (
        <div className="body">
            <section id="About">
                <About />
            </section>
            <section id="Projects">
                <Projects />
            </section>
            <section id="Skills">
                <Skills />
            </section>
            <section id="Work">
                <Work />
            </section>
            <section id="Contact">
                <Contact />
            </section>
        </div>
    )
}

export default Body
