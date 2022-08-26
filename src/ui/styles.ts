import styled, { css } from 'styled-components';

export const formItemCss = css`
  padding: 0.6rem 0.9rem;
  border: 1px solid #ddd;
  border-radius: 2px;
  color: #777777;
  &:focus-visible,
  &:focus {
    outline-color: #ffdeb1;
  }
`;

export const Input = styled.input`
  ${formItemCss}
  min-width: 200px;
`;

export const InputReadonly = styled.input.attrs({ readonly: true })`
  ${formItemCss}

  min-width: 200px;
  border-color: transparent;
  background-color: transparent;
  color: #999;
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
