import React, { Component } from 'react'
import { connect } from 'react-redux'
import User from './User';

class LeaderBoard extends Component {
  render() {
    const { users } = this.props;
    const sortedUser = Object.values(users).sort((a, b) =>
      (Object.keys(b.answers).length + b.questions.length) - (Object.keys(a.answers).length + a.questions.length)
    )
    
    return (
      <div>
      {
        sortedUser.map((user) => <User key={user.id} id={user.id} /> )
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
