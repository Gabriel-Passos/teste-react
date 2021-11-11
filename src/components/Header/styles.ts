import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: var(--color-blue-500);
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: var(--max-width);
  
  margin: 0 auto;
  padding: 16px;
  
  display: flex;
  justify-content: center;
  
  h1 {
    color: var(--color-white);
    text-align: center;
    
    @media (max-width: 1320px) {
      font-size: 28px;
    }
  }
`;
