import { GalleryImg, ImageItem } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ image, onClick }) => {
  return (
    <ImageItem onClick={() => onClick(image.largeImageURL, image.tags)}>
      <GalleryImg
        src={image.webformatURL}
        alt={image.tags}
        width={480}
        height={260}
      />
    </ImageItem>
  );
};
