import { Component } from 'react';
import PropTypes from 'prop-types';
import VirtualizedListStyles from '../styles/VirtualizedListStyles';

class VirtualizedList extends Component {
  state = {
    virtualizedListItems: [],
    paddingTop: 0
  };

  componentDidMount() {
    const { outerHeight } = window;
    const { rowHeight, columns } = this.props;
    const startIndex = 0;
    const endIndex = (outerHeight / rowHeight) * columns;
    this.setState({ virtualizedListItems: this.props.children.slice(startIndex, endIndex) });
    window.addEventListener('scroll', this.handleScroll);
  }

  getSnapshotBeforeUpdate(prevProps) {
    if (prevProps.children !== this.props.children) {
      return this.props.children;
    } else {
      return null;
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot !== null) {
      const { outerHeight } = window;
      const { rowHeight, columns } = this.props;
      const startIndex = 0;
      const endIndex = (outerHeight / rowHeight) * columns;
      this.setState({ virtualizedListItems: this.props.children.slice(startIndex, endIndex) });
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const { outerHeight, scrollY } = window;
    const { rowHeight, columns, children } = this.props;

    const numberOfVirtualizedChildren = (outerHeight / rowHeight) * columns;
    const startIndex = (scrollY / rowHeight) * columns;
    const endIndex = startIndex + numberOfVirtualizedChildren;

    this.setState({ paddingTop: scrollY });
    this.setState({ virtualizedListItems: children.slice(startIndex, endIndex) });
  };

  render() {
    return (
      <VirtualizedListStyles {...this.props} id="virtualized-list">
        <div className="virtualized--scroll-container" style={{ paddingTop: this.state.paddingTop }}>
          {this.state.virtualizedListItems}
        </div>
      </VirtualizedListStyles>
    );
  }
}

VirtualizedList.propTypes = {
  containerWidth: PropTypes.number.isRequired,
  rowHeight: PropTypes.number.isRequired,
  columns: PropTypes.number.isRequired,
  listLength: PropTypes.number.isRequired
};

VirtualizedList.defaultProps = {
  containerWidth: 1080,
  rowHeight: 240,
  columns: 3
};

export default VirtualizedList;
