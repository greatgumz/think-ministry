import { Component } from 'react';
import Items from './Items';
import MainStyles from '../styles/MainStyles';

export default class Main extends Component {
  state = {
    inputVal: 20,
    seconds: 20,
    isValid: true
  };

  handleChange = e => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: parseInt(value)
    });

    this.inputValidation(parseInt(value));
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ seconds: this.state.inputVal });
  };

  inputValidation = val => {
    if (val % 20) {
      this.setState({ isValid: false });
    } else {
      this.setState({ isValid: true });
    }
  };

  render() {
    return (
      <MainStyles>
        <form className="form--container" onSubmit={this.handleSubmit}>
          <div className="form--field">
            <label className="form--label" htmlFor="seconds">
              Seconds Iteration
            </label>
            <input
              className={`${this.state.isValid ? 'form--input' : 'form--input error'}`}
              type="number"
              name="inputVal"
              min="20"
              max="86400"
              step="20"
              defaultValue={this.state.inputVal}
              onBlur={this.handleChange}
            />
            <button className="form--btn" type="submit" disabled={!this.state.isValid}>
              Submit
            </button>
            {this.state.isValid ? '' : <div className="form--errors">Seconds Iteration must be multiple of 20</div>}
          </div>
        </form>
        <Items seconds={this.state.inputVal} />
      </MainStyles>
    );
  }
}
