import React from "react";
import { Link } from "react-router-dom";
import photo from '../../images/about/hanna-MarMel.jpeg'
import { BsArrowRightShort } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import { RiFacebookCircleFill } from 'react-icons/ri';
import s from './AboutSection.module.css'
import Container from '../Container/Container'
import useWindowDimensions from '../../hooks/useWindowDimensions';


const AboutSection = () => {
  const viewPort = useWindowDimensions()

    return (
    
        <section className={s.sectionAbout}>
            {viewPort.width < 768 && (
                <Container>
                    <div className={s.wrapper}>
                          <Link to='/portfolio'className={s.aboutLink}>
                            <BsArrowRightShort className={ s.icon}/>
                        </Link>
                    <div className={s.imgWrapper}>
                    <img src={photo} alt="Анна Мартышева фото" className={s.img}/>
                    </div> 
                    <h1 className={s.sectionTitle}>Hanna Martysheva</h1>
                    <h2 className={s.description}>photographer</h2>
                    <ul className={s.socialLinks}>
                        <li className={s.socialItem}> 
                            <a href="https://www.instagram.com/hannamarmel/" target="_blank" rel="noreferrer"> 
                             <AiFillInstagram className={s.socialIcon}/> 
                            </a>
                        </li>
                        <li className={s.socialItem}>
                            <a href="https://www.facebook.com/MAnyapeace" target="_blank" rel="noreferrer">
                            <RiFacebookCircleFill className={s.socialIcon}/>     
                            </a> 
                        </li>
                    </ul>   
                </div>
                 
                
            </Container>
            )}
             {viewPort.width >= 768 && (
                <Container>
                <div className={s.wrapper}>
                    
                    <h1 className={s.sectionTitle}>Hanna Martysheva</h1>
                    <h2 className={s.description}>photographer</h2>
                    <ul className={s.socialLinks}>
                        <li className={s.socialItem}> 
                            <a href="https://www.instagram.com/hannamarmel/" target="_blank" rel="noreferrer"> 
                             <AiFillInstagram className={s.socialIcon}/> 
                            </a>
                        </li>
                        <li className={s.socialItem}>
                            <a href="https://www.facebook.com/MAnyapeace" target="_blank" rel="noreferrer">
                            <RiFacebookCircleFill className={s.socialIcon}/>     
                            </a> 
                        </li>
                    </ul>   
                </div>
                <Link to='/portfolio'className={s.aboutLink}>
                            <BsArrowRightShort className={ s.icon}/>
                          
                                SHOW PORTFOLIO        
                           
                 </Link>
                 <div className={s.imgWrapper}>
                    <img src={photo} alt="Анна Мартышева фото" className={s.img}/>
                </div> 
                
            </Container>
            )}
            
            
        </section>
           
   
            
    )

}

export default AboutSection