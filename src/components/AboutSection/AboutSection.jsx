import React from "react";
import { Link } from "react-router-dom";
import photo from '../../images/about/hanna-MarMel.jpeg'
import { BsArrowRightShort } from 'react-icons/bs';
import s from './AboutSection.module.css'
import Container from '../Container/Container'

const AboutSection = () => {
    return (
    
        <section className={s.sectionAbout}>
            <Container>
              <div className={s.wrapper}>
                <h2 className={s.description}>photographer</h2>
                 <h1 className={s.sectionTitle}>Hanna Martysheva</h1>
                
                    <div className={s.linkWrapper}>
                            <BsArrowRightShort className={ s.icon}/>
                            <Link to='/portfolio' className={s.aboutLink}>
                                SHOW PORTFOLIO        
                            </Link>
                    </div> 
                     
              </div>
                    <div className={s.imgWrapper}>
                    <img src={photo} alt="Анна Мартышева фото" className={s.img}/>
                </div> 
            </Container>
            
        </section>
           
   
            
    )

}

export default AboutSection