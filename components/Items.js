import { Component } from 'react';
import PropTypes from 'prop-types';
import VirtualizedList from './VirtualizedList';

class Items extends Component {
  setThumbnails = seconds => {
    const FIRST_THUMBNAIL = 1500348260;
    const LAST_THUMBNAIL = 1503031520;
    const thumbnailsArr = [];
    for (let i = FIRST_THUMBNAIL; i <= LAST_THUMBNAIL; i += seconds) {
      thumbnailsArr.push(i);
    }
    return thumbnailsArr;
  };

  state = {
    thumbnails: this.setThumbnails(this.props.seconds)
  };

  componentDidMount() {
    this.setState({ thumbnails: this.setThumbnails(this.props.seconds) });
  }

  getSnapshotBeforeUpdate(prevProps) {
    if (prevProps.seconds !== this.props.seconds) {
      return this.props.seconds;
    } else {
      return null;
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot !== null) {
      this.setState({ thumbnails: this.setThumbnails(snapshot) });
    }
  }

  componentWillUnmount() {
    this.setState({ thumbnails: [] });
  }

  render() {
    return (
      <VirtualizedList listLength={this.state.thumbnails.length}>
        {this.state.thumbnails.map(el => (
          <img key={el} src={`https://hiring.verkada.com/thumbs/${el}.jpg`} style={{ width: 360 }} />
        ))}
      </VirtualizedList>
    );
  }
}

Items.propTypes = {
  seconds: PropTypes.number.isRequired
};

export default Items;
