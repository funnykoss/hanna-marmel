const PhotoItems = ({ tags, src, dataLargeImg, openModal }) => {
  return (
    <li>
      <img src={src} alt={tags} data-largeimg={dataLargeImg} />
    </li>
  );
};

export default PhotoItems;
