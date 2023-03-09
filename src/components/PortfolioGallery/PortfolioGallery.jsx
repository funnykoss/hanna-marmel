import React from 'react';
// import s from './PortfolioGallery.module.css'
import s from './PortfolioGallery.module.css';
import PhotoItems from './PhotoItems';

const PortfolioGallery = ({ list, onClick }) => {
  return (
    <>
      <ul className={s.container}>
        {list.map(({ img, id, alt, largeImg }) => {
          return (
            <PhotoItems key={id} tags={alt} src={img} dataLargeImg={largeImg} openModal={onClick} />
          );
        })}
      </ul>
    </>
  );
};

export default PortfolioGallery;
