import { useEffect, useState } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { Searchbar } from './Searchbar/Searchbar';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { fetchImages } from './api';
import { Loader } from './Loader/Loader';
import toast, { Toaster } from 'react-hot-toast';
import { GallerryModal } from './Modal/Modal';

export const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [loadMore, setLoadMore] = useState(0);
  const [selectedImag, setSelectedImag] = useState(null);
  const [selectedTag, setSelectedTag] = useState(null);

  const handleSubmit = evt => {
    evt.preventDefault();

    if (evt.target.elements.query.value.trim() === '') {
      toast.error('You have not entered anything!');
    } else {
      setQuery(`${Date.now()}/${evt.target.elements.query.value}`);
      setImages([]);
      setPage(1);
    }
  };

  useEffect(() => {
    if (query === '') {
      return;
    }
    async function getImages() {
      try {
        setLoading(true);
        setError(false);
        const perPage = 12;
        const allImages = await fetchImages(query, page, perPage);

        if (allImages.length === 0) {
          return toast.error(
            'Opps, there are no pictures according to your request... '
          );
        }
        setImages([...images, ...allImages.hits]);
        setLoadMore(page < Math.ceil(allImages.totalHits / 12));
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    getImages();
  }, [query, page]);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleOpenModal = (url, alt) => {
    setIsOpen(prevState => !prevState);
    setSelectedImag(url);
    setSelectedTag(alt);
  };

  const handleCloseModal = () => {
    setIsOpen(prevState => !prevState);
  };

  const isLoadBtn = !!(images.length > 0 && !loading && loadMore);

  return (
    <Layout>
      <Searchbar onSubmit={handleSubmit} />
      {images.length > 0 && (
        <ImageGallery isOpen={handleOpenModal} items={images} />
      )}
      {loading && <Loader />}
      {error && <div>OPPS! THERE WAS AN ERROR!</div>}
      {isLoadBtn && <Button onClick={handleLoadMore} />}
      <GallerryModal
        alt={selectedTag}
        url={selectedImag}
        isOpen={isOpen}
        isClose={handleCloseModal}
      />

      <GlobalStyle />
      <Toaster position="top-right" />
    </Layout>
  );
};
