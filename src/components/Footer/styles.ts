import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: var(--color-grey-750);
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
