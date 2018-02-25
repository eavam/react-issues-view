import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import InputSearch from '../InputSearch';
import AutocompleteInputSearch from '../AutocompleteInputSearch';
import Select from '../Select';
import FormWrap from '../FormWrap';
import { searchIssues, setName, setRepo, autoComplite, changeShow } from '../../actions';

class MainForm extends Component {
  static propTypes = {
    username: PropTypes.string.isRequired,
    repo: PropTypes.string.isRequired,
    changeName: PropTypes.func,
    changeRepo: PropTypes.func,
    setAndSearch: PropTypes.func,
    handleSelect: PropTypes.func,
    autocomplite: PropTypes.arrayOf(PropTypes.string),
  };

  static defaultProps = {
    changeName: () => {},
    changeRepo: () => {},
    setAndSearch: () => {},
    handleSelect: () => {},
    autocomplite: [],
  };

  constructor(props) {
    super(props);
    this.state = {
      openAutocomplite: false,
    };
    this.focusInput = this.focusInput.bind(this);
    this.blurInput = this.blurInput.bind(this);
    this.disabledRepo = this.disabledRepo.bind(this);
  }

  focusInput() {
    this.setState({ openAutocomplite: true });
  }

  blurInput() {
    setTimeout(() => {
      this.setState({ openAutocomplite: false });
    }, 150);
  }

  disabledRepo() {
    return !this.props.username;
  }

  render() {
    return (
      <FormWrap>
        <InputSearch
          onChange={this.props.changeName}
          value={this.props.username}
          placeholder="User name"
          required
        />
        <AutocompleteInputSearch
          handleChangeInput={this.props.changeRepo}
          inputVal={this.props.repo}
          handleSearch={this.props.setAndSearch}
          autocompliteItems={this.props.autocomplite}
          openAutocomplite={this.state.openAutocomplite}
          onFocus={this.focusInput}
          onBlur={this.blurInput}
          disabled={this.disabledRepo()}
        />
        <div>
          <Select onChange={this.props.handleSelect}>
            <option value="5">Show by 5</option>
            <option value="15">Show by 15</option>
            <option value="30">Show by 30</option>
          </Select>
        </div>
      </FormWrap>
    );
  }
}

function mapStateToProps(state) {
  return {
    username: state.username,
    repo: state.repo,
    autocomplite: state.autocomplite,
  };
}

function mapDispathToProps(dispatch) {
  return {
    changeName(e) {
      dispatch(setName(e.target.value));
    },
    changeRepo(e) {
      dispatch(setRepo(e.target.value));
      dispatch(autoComplite(e.target.value));
    },
    setAndSearch(repo) {
      dispatch(setRepo(repo));
      dispatch(searchIssues());
    },
    handleSelect(e) {
      dispatch(changeShow(+e.target.value));
      dispatch(searchIssues());
    },
  };
}

export default connect(mapStateToProps, mapDispathToProps)(MainForm);
