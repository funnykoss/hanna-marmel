const PhotoItems = ({ tags, src, dataLargeImg, openModal }) => {
  return (
    <li onClick={openModal}>
      <img src={src} alt={tags} data-largeimg={dataLargeImg} />
    </li>
  );
};

export default PhotoItems;
