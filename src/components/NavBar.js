import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllTopics } from '../actions/actions';
import NavLink from './NavLink';
import logo from '../../public/logo.png';

class NavBar extends Component {
  componentDidMount() {
    this.props.getTopics();
  }
  render() {
    return (
      <nav className="header">
        <div id="sr-header-area">
          <div className="width-clip">
            <div className="mySubreddits">
              <span>MY SUBREDDITS</span>
            </div>
            <div className="sr-list">
              <ul className="flat-list sr-bar">
                <li>All</li>
                  <span className="seperator">-</span>
                <li>Funny</li>
                  <span className="seperator">-</span>
                <li>Random</li>
              </ul>
              <span className="seperator">&nbsp;|&nbsp;</span>
                <ul className="flat-list sr-bar">
                <li>All</li>
                  <span className="seperator">-</span>
                <li>Funny</li>
                  <span className="seperator">-</span>
                <li>Random</li>
                  <span className="seperator">-</span>
                <li>Random</li>
                  <span className="seperator">-</span>
                <li>Random</li>
                  <span className="seperator">-</span>
                <li>Random</li>
                  <span className="seperator">-</span>
                <li>Random</li>
                  <span className="seperator">-</span>
                <li>Random</li>
                  <span className="seperator">-</span>
                <li>Random</li>
                  <span className="seperator">-</span>
                <li>Random</li>
                  <span className="seperator">-</span>
                <li>Random</li>
                  <span className="seperator">-</span>
                <li>Random</li>
                  <span className="seperator">-</span>
                <li>Random</li>
                  <span className="seperator">-</span>
                <li>Random</li>
                
              </ul>

            </div>
          </div>
        </div>
        <div className="header-bottom-left">
          <img className="northcoders-image" src={logo} />
          <h3 className="news-text">News</h3>
          <ul className="tabmenu">
            {this.generateTopics(this.props.topics)}
          </ul>
        </div>
        <div className="header-bottom-right">
          <span className="user">Want to join? Log in or sign up in seconds.</span>
        </div>
      </nav>
    );
  }
  generateTopics(topics) {
    return [{ title: 'all-topics' }].concat(topics).map((topic, i) => {
      topic.title = topic.title.toLowerCase();
      return (
        <li className="nav-item"
          key={i}
          value={topic.title}>
          <NavLink to={`/topics/${topic.title}`}>
            {topic.title}
          </NavLink>
        </li>
      );
    });
  }
}

NavBar.propTypes = {
  topics: React.PropTypes.array.isRequired,
  getTopics: React.PropTypes.func.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    getTopics: () => {
      dispatch(fetchAllTopics());
    }
  };
}

function mapStateToProps(state) {
  return {
    topics: state.topics.data
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);