import React from "react";
// import s from './PortfolioGallery.module.css'
import s from './PortfolioGallery.module.css'

const PortfolioGallery = ({list}) => {
    return (
        <>
            
           
            <ul className={s.container}>
            {list.map(({img, id}) => (
            <li key={id} className={s.item}>
                    <img src={img} alt="фото" className={s.img}/>  
            </li>
                ))}
            </ul>
            
        </>
    )
}

export default PortfolioGallery