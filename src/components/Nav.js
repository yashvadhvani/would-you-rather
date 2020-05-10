import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Nav extends Component {
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
        </div>
      </nav>
    )
  }
}
