import React,{Component} from 'react';
import {connect} from 'react-redux';
import {fetchAllTopics} from '../actions/actions';
import NavLink from './NavLink';

class NavBar extends Component {
  componentDidMount () {
    this.props.getTopics(); 
  }
  render () {
    return (
      <nav className="nav has-shadow">
        <ul className="nav-center">
          {this.generateTopics(this.props.topics)}
        </ul>
      </nav>
    );
  }
  generateTopics (topics) {
    return [{title: 'all topics'}].concat(topics).map((topic, i) => {
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

function mapDispatchToProps (dispatch) {
  return {
    getTopics: () => {
      dispatch(fetchAllTopics());
    }
  };
}

function mapStateToProps (state) {
  return {
    topics: state.topics.data
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);