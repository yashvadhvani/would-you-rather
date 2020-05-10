import React, { Component } from 'react'
import { connect } from 'react-redux'

class User extends Component {
  getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  render() {
    const { user } = this.props;
    console.log(this.getRandomColor())
    return (
      <div className="container-fluid">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h3> {user.name} </h3>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-sm-3 vcenter">
                  <img className="avatar" src={`${user.avatarURL}`} alt="Cinque Terre" />
                </div>
                <div className="col-sm-6">
                  <div className="row">&nbsp;</div>
                  <div className="row">&nbsp;</div>

                  <div className="row">
                    <div className="col-sm-10">
                      Answered Question
                    </div>
                    <div className="col-sm-2">{Object.keys(user.answers).length}</div>
                    <hr />
                  </div>
                  <div className="row">
                    <div className="col-sm-10">
                      Created Question
                    </div>
                    <div className="col-sm-2">{user.questions.length}</div>
                    <hr />
                  </div>

                </div>
                <div className="col-sm-3">
                    <div className="row" style={{textAlign: 'center '}}> <h3>Score</h3></div>
                    <div className="row" style={{margin: '8%'}}> <div className="circle"> {Object.keys(user.answers).length + user.questions.length}</div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ users }, { id }) => {
  return {
    user: users[id]
  }
}

export default connect(mapStateToProps)(User);
