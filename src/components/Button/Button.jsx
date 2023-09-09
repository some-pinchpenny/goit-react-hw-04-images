import { LoadBtn } from './Button.styled';

export const Button = ({ onClick }) => {
  return (
    <LoadBtn type="button" onClick={onClick}>
      Load more
    </LoadBtn>
  );
};
