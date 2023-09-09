import styled from 'styled-components';

export const LoadBtn = styled.button`
  max-width: 100px;
  padding: 8px 16px;
  border-radius: 2px;
  background-color: #c46d87;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  justify-self: center;
  display: inline-block;
  color: #fff;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 180px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  &:hover,
  &:focus {
    background-color: #c24a6e;
  }
`;
