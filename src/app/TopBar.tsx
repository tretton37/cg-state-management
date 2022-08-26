import styled from 'styled-components';

export const TopBar: React.FC = () => {
  return (
    <TopContainer>currentUser from the different data stores</TopContainer>
  );
};

const TopContainer = styled.div`
  position: sticky;
  top: 0;
  border-bottom: 1px solid #ccc;
  background: #fff;
  height: 70px;
  display: flex;
  align-items: center;
  justify-items: center;
  padding: 0 1rem;
  gap: 1rem;
`;
