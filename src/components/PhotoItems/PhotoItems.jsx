const PhotoItems = ({ tags, src, dataLargeImg }) => {
  return (
    <li>
      <img src={src} alt={tags} data-largeimg={dataLargeImg} />
    </li>
  );
};

export default PhotoItems;
