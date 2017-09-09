import React, {Component} from 'react';
import classnames from 'classnames';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import saveGames from '../actions/saveGames';
import {Redirect} from 'react-router-dom';

class GameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      cover: "",
      errors: {},
      isLoading: false,
      done: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);

  }

  handleChange(e){
    if (!!this.state.errors[e.target.name]) {
      let errors = Object.assign({}, this.state.errors);//clone errors from state
      delete errors[e.target.name]; //after this validate massage will gone
      this.setState({
        [e.target.name]: e.target.value,
        errors
      });
    } else {
        this.setState({
          [e.target.name]: e.target.value
        });
    }
  }

  handleOnSubmit(e) {
    e.preventDefault();
    let errors = {};
    if (this.state.title === '') {
      errors.title = "Can`t be empty";
    }
    if (this.state.cover === '') {
      errors.cover = "Can`t be empty";
    }
    this.setState({errors});
    const isValid = Object.keys(errors).length === 0;

    if (isValid) {
      const {title, cover} = this.state;
      this.setState({isLoading: true});
      this.props.saveGames({title, cover})
        .then(
            (res) => {this.setState({done: true})},
            (err) => err.response.json()
            .then(({errors}) => this.setState({
              errors, isLoading: false
            }))
      );
    }
  }

  render() {
    const form = <form className={classnames("ui", "form", {loading: this.state.isLoading})} onSubmit={this.handleOnSubmit}>
      <h1>Add New Game</h1>
      {!!this.state.errors.global && <div className="ui negative message"><p>{this.state.errors.global}</p></div>}
      <div className={classnames("field", {error: !!this.state.errors.title})}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <span>{this.state.errors.title}</span>
      </div>
      <div className={classnames("field", {error: !!this.state.errors.cover})}>
        <label htmlFor="cover">Cover URL</label>
        <input
          id="cover"
          name="cover"
          value={this.state.cover}
          onChange={this.handleChange}
        />
        <span>{this.state.errors.cover}</span>
      </div>
      <div className="field">
        {this.state.cover !== '' && <img src={this.state.cover} alt="cover" className="ui small bordered image" />}
      </div>
      <div className="field">
        <button className="ui primary button">Save</button>
      </div>
    </form>;

    return (
      <div>
        {this.state.done ? <Redirect to="/games" /> : form}
      </div>
    );
  }
}

GameForm.propTypes = {
  saveGames: PropTypes.func.isRequired
}

export default connect(null, {saveGames})(GameForm);
