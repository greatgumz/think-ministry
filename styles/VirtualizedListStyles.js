import styled from 'styled-components';

const VirtualizedListStyles = styled.div`
  overflow-y: auto;
  overflow-x: hidden;

  .virtualized {
    &--scroll-container {
      display: grid;
      grid-template-columns: repeat(1, 360px);
      grid-template-rows: repeat(4, 270px);
      justify-content: space-between;
      overflow-x: hidden;
      overflow-y: auto;
      width: 360px;
      max-width: 360px;
      height: ${props => Math.ceil(props.listLength / props.columns) * props.rowHeight + 'px'};
      max-height: ${props => Math.ceil(props.listLength / props.columns) * props.rowHeight + 'px'};
    }
  }

  @media (min-width: 720px) {
    .virtualized {
      &--scroll-container {
        grid-template-columns: repeat(2, 360px);
        width: 720px;
        max-width: 720px;
      }
    }
  }

  @media (min-width: 1080px) {
    .virtualized {
      &--scroll-container {
        grid-template-columns: repeat(3, 360px);
        width: ${props => props.containerWidth + 'px'};
        max-width: ${props => props.containerWidth + 'px'};
      }
    }
  }
`;

export default VirtualizedListStyles;
