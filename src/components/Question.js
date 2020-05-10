import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

class Question extends Component {
  handleClick = (e ,id, type) =>{
    e.preventDefault()
    this.props.history.push(
      `/${type === 'answered' ? 'view' : 'question'}/${id}/` 
    );
  }
  render() {
    const { question, user, type } = this.props;
    // console.log(this.props)
    return (
      <div className="container-fluid question">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4> {user.name} asks </h4>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-sm-3 vcenter">
                  <img className="avatar" src={`${user.avatarURL}`} alt="Cinque Terre" />
                </div>
                <div className="col-sm-9">
                  <h3>Would you rather</h3>
                  <p className='question'> {question.optionOne.text}</p>
                  <button type="button" className="bttn btn-primary" onClick={(e) => { this.handleClick(e, question.id, type) }}>
                    View Poll
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = ({ questions, users }, { id, type }) => {
  return {
    question: questions[id],
    user: users[questions[id].author],
    type
  }
}

export default withRouter(connect(mapStateToProps)(Question))