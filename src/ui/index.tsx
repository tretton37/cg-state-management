import styled, { css } from 'styled-components';

const formItemCss = css`
  padding: 0.6rem 0.9rem;
  border: 1px solid #ddd;
  border-radius: 2px;
  color: #777777;
  &:focus-visible,
  &:focus {
    outline-color: #ffdeb1;
  }
`;

export const Button = styled.button`
  ${formItemCss}
  background-color: #ffd8a2ba;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px,
    rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;
  border-color: transparent;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  &:hover {
    background-color: #ffd8a2ff;
    box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px -1px,
      rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px;
    border-color: #ffdeb1;
  }
`;

export const Input = styled.input`
  ${formItemCss}
  & + ${Button} {
    margin-left: 0.5rem;
  }
  min-width: 200px;
`;

export const Label = styled.label`
  display: block;
  font-weight: 500;
  font-size: 0.7em;
  margin-bottom: 0.2em;
`;

export const Select = styled.select`
  ${formItemCss}
  min-width: 200px;
`;

export const FormGroup = styled.div`
  margin-bottom: 1rem;
`;
