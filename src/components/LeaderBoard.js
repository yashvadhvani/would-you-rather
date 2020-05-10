import React, { Component } from 'react'
import { connect } from 'react-redux'
import User from './User';

class LeaderBoard extends Component {
  render() {
    const { users } = this.props;
    return (
      <div>
      {
        Object.keys(users).map((id) => <User key={id} id={id} /> )
      }
    </div>
    )
  }
}

const mapStateToProps = ({users}) =>{
  return {
    users
  }
}

export default connect(mapStateToProps)(LeaderBoard);
