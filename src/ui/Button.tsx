import { useState } from 'react';
import styled from 'styled-components';
import { formItemCss } from './styles';

export const Button: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ onClick, ...props }) => {
  const [disabled, setDisabled] = useState(false);
  const onClickHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick && !disabled) {
      setDisabled(true);
      await onClick(e);
      setDisabled(false);
    }
  };
  return (
    <StyledButton onClick={onClickHandler} {...props} disabled={disabled} />
  );
};

export const StyledButton = styled.button`
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
  &:disabled {
    background-color: #ddd;
    cursor: wait;
    border-color: transparent;
    color: #aaa;
  }
`;
