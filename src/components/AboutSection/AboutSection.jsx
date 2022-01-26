import React from "react";
import { Link } from "react-router-dom";
import photo from '../../images/about/hanna-MarMel.jpeg'
import { BsArrowRightShort } from 'react-icons/bs';
import { AiOutlineInstagram } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import s from './AboutSection.module.css'
import Container from '../Container/Container'

const AboutSection = () => {

    const instagram = "https://www.instagram.com/hannamarmel/"
    return (
    
        <section className={s.sectionAbout}>
            <Container>
                <div className={s.wrapper}>
                    
                 <h1 className={s.sectionTitle}>Hanna Martysheva</h1>
                    <h2 className={s.description}>photographer</h2>
                    <ul className={s.socialLinks}>
                        <li> 
                            <a href="https://www.instagram.com/hannamarmel/" target="_blank" rel="noreferrer"> 
                             <AiOutlineInstagram className={s.socialIcon}/> 
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/MAnyapeace" target="_blank" rel="noreferrer">
                            <BsFacebook className={s.socialIcon}/>     
                            </a> 
                        </li>
                    </ul>
                       
                </div>
                <div className={s.linkWrapper}>
                            <BsArrowRightShort className={ s.icon}/>
                            <Link to='/portfolio' className={s.aboutLink}>
                                SHOW PORTFOLIO        
                            </Link>
                 </div>
                 <div className={s.imgWrapper}>
                    <img src={photo} alt="Анна Мартышева фото" className={s.img}/>
                </div> 
                
            </Container>
            
        </section>
           
   
            
    )

}

export default AboutSection