import { Watch } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Watch
      height="80"
      width="80"
      radius="48"
      color="#48778a"
      ariaLabel="watch-loading"
      wrapperStyle={{ justifyContent: 'center', alignContent: 'center' }}
    />
  );
};
