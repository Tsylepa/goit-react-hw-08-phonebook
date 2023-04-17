import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const List = styled.table`
  width: 100vw;
  max-width: 450px;
  border-collapse: collapse;
  text-transform: capitalize;
  border-radius: 8px;
  box-shadow: var(--shadow);
  overflow: hidden;

  tr:nth-of-type(2n + 1) {
    background-color: var(--table);
  }

  td {
    padding: 5px 15px;
  }
`;

export const ContactItem = styled.tr`
  width: 100%;
`;

export const Name = styled.td`
  max-width: 50%;
`;

export const Number = styled.td`
  text-align: center;
  min-width: 180px;
`;

export const Delete = styled.button`
  display: block;
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  text-transform: capitalize;
  background: var(--button);
  transition: background-color var(--transition-function),
    color var(--transition-function);
  cursor: pointer;

  :hover {
    background: var(--button-delete);
    color: var(--contrast-color);
  }
`;

export const ErrorMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 100%;
  max-width: 400px;
  padding: 20px;
  border-radius: 6px;
  font-weight: 500;
  color: var(--contrast-color);
  background-color: var(--error);
  box-shadow: var(--shadow);
`;
