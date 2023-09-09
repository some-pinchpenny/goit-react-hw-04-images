import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageList } from './ImageGallery.styled';

export const ImageGallery = ({ items, isOpen }) => {
  return (
    <ImageList>
      {items.map(img => (
        <ImageGalleryItem key={img.id} image={img} onClick={isOpen} />
      ))}
    </ImageList>
  );
};
