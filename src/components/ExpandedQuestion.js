import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleSavingAnswer } from '../actions/shared';
import { withRouter } from 'react-router-dom';


class ExpandedQuestion extends Component {
  handleClick = (answer) => {
    this.props.dispatch(handleSavingAnswer({
      answer,
      authedUser: this.props.authedUser,
      qid: this.props.question.id
    }))
      .then(() => {
        this.props.history.push(`/view/${this.props.question.id}`)
      })
  }
  handleOneClick = () => {
    this.handleClick('optionOne')
  }
  handleTwoClick = () => {
    this.handleClick('optionTwo')
  }
  render() {
    const { question, user } = this.props;
    return (
      <div className="container-fluid">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h3> {user.name} asks </h3>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-sm-3 vcenter">
                  <img className="avatar" src={`${user.avatarURL}`} alt="Cinque Terre" />
                </div>
                <div className="col-sm-9">

                  <h3>Would You Rather </h3>
                  <div className="col-xs-3 col-xs-offset-5">
                    <div id="loadbar" style={{ display: "none" }}>
                      <div className="blockG" id="rotateG_01"></div>
                      <div className="blockG" id="rotateG_02"></div>
                      <div className="blockG" id="rotateG_03"></div>
                      <div className="blockG" id="rotateG_04"></div>
                      <div className="blockG" id="rotateG_05"></div>
                      <div className="blockG" id="rotateG_06"></div>
                      <div className="blockG" id="rotateG_07"></div>
                      <div className="blockG" id="rotateG_08"></div>
                    </div>
                  </div>

                  <div className="quiz" id="quiz" data-toggle="buttons">

                    <label onClick={this.handleOneClick} className="element-animation1 btn btn-lg btn-primary btn-block">
                      <span className="btn-label">
                        <i className="glyphicon glyphicon-chevron-right"></i>
                      </span>
                      <input type="radio" name="q_answer" value="1" /> {question.optionOne.text}
                    </label>
                    <label onClick={this.handleTwoClick} className="element-animation2 btn btn-lg btn-primary btn-block">
                      <span className="btn-label">
                        <i className="glyphicon glyphicon-chevron-right"></i>
                      </span>
                      <input type="radio" name="q_answer" value="2" />{question.optionTwo.text}
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = ({ questions, users, authedUser }, props) => {
  const { id } = props.match.params;
  return {
    question: questions[id],
    user: users[authedUser],
    authedUser,
  }
}

export default withRouter(connect(mapStateToProps)(ExpandedQuestion));


