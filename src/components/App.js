import React from 'react';
import NavBar from './NavBar';
import logo from '../../public/logo.png';

const App = React.createClass({
  render: function () {
    return (
      <div>
        <NavBar />
        {this.props.children}
      </div>
    );
  }
});

App.propTypes = {
  children: React.PropTypes.element.isRequired
};

export default App;
