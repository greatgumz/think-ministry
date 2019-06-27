import styled from 'styled-components';

const HeaderStyles = styled.header`
  display: flex;
  flex-flow: column;
  width: 100%;
  margin: 0 auto;
  background: ${props => props.theme.primaryColor};
  padding: 2rem;
  position: fixed;
  top: 0;
  max-height: 9rem;

  img {
    transition: all 0.3s;

    &:hover {
      transform: scale(1.025);
    }
  }
`;

export default HeaderStyles;
