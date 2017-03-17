import React from 'react';
import NavBar from './NavBar';
import logo from '../../public/logo.png';

const App = React.createClass({
  render: function () {
    return (
      <div>
        <header className="header">
          <div className="header-title">
            <img className="image" src={logo}/>
            <h3 className="header-text">News</h3>
          </div>
        </header>
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
