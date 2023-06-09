import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 50px;
  padding: 30px 15px;
  gap: 30px;
  font-size: 24px;
  border-radius: 10px;
  color: var(--font-color);
`;

export const Container = styled.div`
  display: inherit;
  flex-direction: inherit;
  justify-content: inherit;
  align-items: inherit;
  gap: inherit;
  margin: 0 auto;
  width: 100%;
  max-width: 1000px;
`;
