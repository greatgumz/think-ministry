import styled from 'styled-components';

const MainStyles = styled.div`
  .form {
    &--container {
      background: #fff;
      padding: 1rem;
      position: fixed;
      top: 60px;
      left: 0;
      width: 100%;
    }

    &--field {
      display: flex;
      align-items: center;
    }

    &--input {
      color: ${props => props.theme.fontColor};
      border: 1px solid #ccc;
      border-radius: 0.3rem 0 0 0.3rem;
      font-family: ${props => props.theme.fontFamily};
      height: 3rem;
      margin-left: 0.5rem;
      padding: 0.5rem;

      &.error {
        border: 1px solid red;
      }
    }

    &--btn {
      background: ${props => props.theme.primaryColor};
      border: 0;
      border-radius: 0 0.3rem 0.3rem 0;
      color: #fff;
      cursor: pointer;
      font-family: ${props => props.theme.fontFamily};
      height: 3rem;
      padding: 0.5rem 1rem;

      &[disabled] {
        opacity: 0.5;
        cursor: not-allowed;
      }
    }

    &--errors {
      color: red;
      margin-left: 1rem;

      &.hide {
        display: none;
      }
    }
  }
`;

export default MainStyles;
