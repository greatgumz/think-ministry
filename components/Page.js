import { Component } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import Header from './Header';
import Meta from './Meta';
import WrapperStyles from '../styles/WrapperStyles';

const theme = {
  fontFamily: '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue',
  fontSize: '1.2rem',
  fontColor: '#444',
  primaryColor: '#1b88b0'
};

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
    text-rendering: optimizeLegibility;
    font-weight: 400;
  }

  *, *:before, *:after{
    box-sizing: inherit;
  }

  body {
    padding: 0;
    margin: 0;
    font-size: ${theme.fontSize};
    line-height: 1.5;
    font-family: ${theme.fontFamily};
  }

  a {
    text-decoration: none;
    color: ${theme.colorPrimary};

    &:hover {
      text-decoration: underline;
    }
  }
`;

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <>
            <Meta />
            <Header />
            <WrapperStyles>{this.props.children}</WrapperStyles>
          </>
        </>
      </ThemeProvider>
    );
  }
}

export default Page;
