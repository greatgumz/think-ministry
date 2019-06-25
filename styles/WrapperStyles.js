import styled from 'styled-components';

const WrapperStyles = styled.div`
  background: transparent;
  color: ${props => props.theme.fontColor};
  margin: 60px auto 0;
  max-width: 360px;
  padding-top: 50px;

  @media (min-width: 720px) {
    max-width: 720px;
  }

  @media (min-width: 1080px) {
    max-width: 1080px;
  }
`;

export default WrapperStyles;
