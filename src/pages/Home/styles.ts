import styled from 'styled-components';

export const Main = styled.main`
  width: 100%;
  max-width: var(--max-width);
  
  margin: 24px auto;
  
  padding: 0 16px;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  
  strong {
    margin: 16px 0 32px;
    font-size: 1.5rem;
    text-align: center;
  }
  
  section {
    width: 100%;

    @media (max-width: 1320px) {
      overflow-x: scroll;
    }
  }
`;
