import React from 'react';
import NavBar from './NavBar';

const App = React.createClass({
  render: function () {
    return (
      <div>
        <header className="header">
          <div className="header-title">
            <img className="image" src="logo.png"/>
            <h3 className="header-text">News</h3>
          </div>
        </header>
        <NavBar />
        {this.props.children}
      </div>
    );
  }
});

export default App;
