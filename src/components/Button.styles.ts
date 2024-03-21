import styled, { css } from "styled-components";

export type ButtonVariant = 'primary' | 'secondary' |  'success' | 'danger';

interface ButtonContainerProps {
    variant: ButtonVariant;
}

const buttonVariants = {
    primary: 'pink',
    secondary: 'yellow',
    success: 'green',
    danger: 'red',

};

export const ButtonContainer = styled.button<ButtonContainerProps>`
    width: 100px;
    height: 40px;

    ${props =>css`background-color: ${buttonVariants[props.variant]}`}
`