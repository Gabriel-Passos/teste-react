import styled from 'styled-components';

export const Main = styled.main`
  width: 100%;
  max-width: var(--max-width);

  margin: 24px auto;

  padding: 0 16px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  section {
    width: 100%;

    @media (max-width: 1320px) {
      overflow-x: scroll;
    }
  }
`;
