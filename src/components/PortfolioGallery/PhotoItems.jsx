import s from './PortfolioGallery.module.css';

const PhotoItems = ({ tags, src, dataLargeImg, openModal }) => {
  return (
    <li className={s.photoItem} onClick={openModal}>
      <img src={src} alt={tags} data-largeimg={dataLargeImg} />
    </li>
  );
};

export default PhotoItems;
