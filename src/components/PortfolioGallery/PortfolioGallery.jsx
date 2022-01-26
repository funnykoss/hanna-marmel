import React from "react";
// import s from './PortfolioGallery.module.css'
import Gallery from "react-photo-gallery";
import { photos } from "./photos";

const PortfolioGallery = () => {
    return (
        <>
            
            < Gallery photos={photos}/>
            {/* <ul className={s.container}>
            {list.map(({img, id}) => (
            <li key={id} className={s.item}>
                    <img src={img} alt="фото" className={s.img}/>  
            </li>
                ))}
            </ul> */}
            
        </>
    )
}

export default PortfolioGallery