import { RiSearch2Line } from 'react-icons/ri';
import {
  SearchButton,
  SearchForm,
  SearchInput,
  SearchbarWrapper,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  return (
    <SearchbarWrapper>
      <SearchForm onSubmit={onSubmit}>
        <SearchButton type="submit">
          <RiSearch2Line size={'24px'} />
        </SearchButton>
        <SearchInput
          type="text"
          name="query"
          placeholder="Start typing here..."
        />
      </SearchForm>
    </SearchbarWrapper>
  );
};
