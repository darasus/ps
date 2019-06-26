import styled from 'styled-components';

export const Header = styled.header`
  ${({ theme }) => {
    return `
      height: 80px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${theme.color.black}
      color: ${theme.color.white}
    `;
  }}
`;

export const Logo = styled.div`
  font-size: 20px;
`;
