import styled from 'styled-components';

const HeaderStyles = styled.header`
  display: flex;
  flex-flow: column;
  width: 100%;
  margin: 0 auto;
  background: ${props => props.theme.primaryColor};
  padding: 2rem 1rem;
  position: fixed;
  top: 0;
  height: 6rem;

  img {
    transition: all 0.3s;

    &:hover {
      filter: invert(1);
    }
  }
`;

export default HeaderStyles;
