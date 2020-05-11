import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';

class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-inverse nav-blue">
        <div className="container-fluid">
          <div className="navbar-header">
            <NavLink className="navbar-brand" to="/" exact>WYR</NavLink>
          </div>
          <ul className="nav navbar-nav">
            <li><NavLink className="navbar-brand nav-blue" activeClassName='active' to="/" exact>Home</NavLink></li>
            <li><NavLink className="navbar-brand nav-blue" activeClassName='active' to="/new" exact>New Question</NavLink></li>
            <li><NavLink className="navbar-brand nav-blue" activeClassName='active' to="/leaderboard" exact>Leaderboard</NavLink></li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li><a className="navbar-brand nav-blue pointer" href='/'><span className="glyphicon glyphicon-user"></span> {this.props.name}</a></li>
            <li><a href="!#" className="navbar-brand nav-blue pointer" onClick={this.props.handleLogout}><span className="glyphicon glyphicon-log-in"></span> Logout</a></li>
          </ul>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = ({ authedUser, users }) => {
  return {
    name : users[authedUser].name
  };
}
export default connect(mapStateToProps)(Nav);
