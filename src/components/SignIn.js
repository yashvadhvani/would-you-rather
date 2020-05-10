import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import { withRouter } from 'react-router-dom'

class SignIn extends Component {
  componentDidMount(){
    this.props.history.push('/');
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.dispatch(setAuthedUser(document.getElementById('user').value));
  }
  render() {
    const { users } = this.props;
    return (
      <div className="container-fluid">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header" style={{ textAlign: "center" }}>
              <h3> Welcome to Would you rather app </h3>
              <h5> Please sign in to continue </h5>

            </div>
            <div className="modal-body">
              <form className="form-horizontal" onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <div className="col-sm-12" style={{ textAlign: "center" }}>
                    <h3>Sign in</h3>
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-sm-12">
                    <select id='user' className="form-control">
                      {
                        Object.keys(users).map((id) => (<option key={id} value={id}>{users[id].name}</option>))
                      }
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <div className="col-sm-12">
                    <button type="submit" className="btn btn-primary btn-block btn-lg">Submit</button>
                  </div>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ users }) => {
  return {
    users
  }
}

export default withRouter(connect(mapStateToProps)(SignIn));