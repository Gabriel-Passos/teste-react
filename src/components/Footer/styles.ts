import styled, { css } from 'styled-components';

interface FooterContainerProps {
  initialBoard?: string;
}

export const FooterContainer = styled.footer<FooterContainerProps>`
  background-color: var(--color-grey-750);
  width: 100%;

  ${props => props.initialBoard 
    ? css`
      position: static;
    ` : 
    css`
      position: fixed;
      left: 0;
      bottom: 0;
    `
  }
`;

export const FooterContent = styled.div`
  width: 100%;
  max-width: var(--max-width);

  margin: 0 auto;
  padding: 16px;

  display: flex;
  justify-content: center;

  strong {
    color: var(--color-white);
    text-align: center;
  }
`;
