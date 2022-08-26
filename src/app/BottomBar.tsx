import styled from 'styled-components';

export const BottomBar: React.FC = () => {
  return (
    <BottomContainer>
      customTheme from global state
      <ThemeDemo color="red">red</ThemeDemo>
    </BottomContainer>
  );
};

const ThemeDemo = styled.div<{ color: string }>`
  height: 20px;
  width: 60px;
  background-color: ${(p) => p.color};
`;

const BottomContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 70px;
  border-top: 1px solid #ccc;
  background: #fff;
  display: flex;
  align-items: center;
  justify-items: center;
  padding: 0 1rem;
  gap: 1rem;
`;
