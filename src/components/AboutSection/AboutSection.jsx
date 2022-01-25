import React from "react";
import { Link } from "react-router-dom";
import photo from '../../images/about/hanna-MarMel.jpeg'
import { BsArrowRightShort } from 'react-icons/bs';
import s from './AboutSection.module.css'
import Container from '../Container/Container'

const AboutSection = () => {
    return (
     <>
        <section className={s.sectionAbout}>
            <Container>
              <div className={s.wrapper}>
                <p>photographer</p>
                 <h1>Hanna Martysheva</h1>
                <div className={s.imgWrapper}>
                <img src={photo} alt="Анна Мартышева фото" className={s.img}/>
                </div>
                <div className={s.linkWrapper}>
                    <Link to='/portfolio' className={s.aboutLink}>
                            <BsArrowRightShort className={ s.icon}/>
                            SHOW PORTFOLIO        
                    </Link>
                </div>       
                </div>
            
            </Container>
        </section>
           
    </>
            
    )
}

export default AboutSection