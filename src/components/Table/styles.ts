import styled from 'styled-components';

export const TableContainer = styled.table`
  border: 1px solid var(--color-grey-150);
  border-collapse: collapse;
  text-align: center;
  
  margin: 48px 0;
  
  thead {
    tr {
      th {
        padding: 16px;
        border: 1px solid var(--color-grey-150);
        font-weight: 500;
        vertical-align: bottom;

        &:first-child {
          cursor: default;
        }
      }
    }
  }
  
  tbody {
    background-color: var(--color-blue-50);

    tr {
      td {
        border: 1px solid var(--color-grey-150);
        padding: 16px;

        width: 180px;

        &:first-child {
          padding: 16px 32px;
          max-width: 280px;
          font-weight: 700;
        }
      }
    }
  }

  tfoot {
    background-color: var(--color-grey-50);

    tr {
      td {
        border: 1px solid var(--color-grey-150);
        padding: 16px 24px;

        width: 180px;

        &:first-child {
          min-width: 228px;
          font-weight: 400;
          padding: 16px;
          background-color: var(--color-white);
        }
      }
    }
  }
`;
