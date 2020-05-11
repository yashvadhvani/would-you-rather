import React, { Component } from 'react';
import { connect } from 'react-redux';
import YourVote from '../YourVote.png'
import { withRouter } from 'react-router-dom';


class Results extends Component {
  componentDidMount = () => {
    setTimeout(() => {
      this.props.history.push('/')
    }, 5000);
  }
  calculateProgress(total, portion) {
    return (portion / total * 100).toFixed(2);
  }
  render() {
    const { user, question } = this.props;
    const totalVotes = question.optionOne.votes.length + question.optionTwo.votes.length;
    const answerOnePercentage = this.calculateProgress(totalVotes, question.optionOne.votes.length);
    const answerTwoPercentage = this.calculateProgress(totalVotes, question.optionTwo.votes.length);
    const answer = user.answers[question.id];
    return (
      <div className="container-fluid">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h3> {user.name} asked </h3>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-sm-3 vcenter">
                  <img className="avatar" src={`${user.avatarURL}`} alt="Cinque Terre" />
                </div>
                <div className="col-sm-9">
                  <div className="row">&nbsp;</div>
                  <div className="row">&nbsp;</div>

                  <div className="row">
                    <div className="container-fluid">
                      <h4>{question.optionOne.text}</h4>
                      {answer === "optionOne" && <img style={{ position: "absolute", height: "40px", width: "40px", marginLeft: "375px", marginTop: "-50px" }} src={YourVote} alt="Logo" />}

                      <div className="progress" style={{ height: "32px" }}>
                        {answerOnePercentage > 0 ?
                          <div style={{ width: `${answerOnePercentage}%` }} className="progress-bar">{answerOnePercentage}%</div> :
                          <div style={{ width: `100%`, backgroundColor: "transparent", color: '#000' }} className="progress-bar">{answerOnePercentage}%</div>}
                      </div>
                        <h5 className="center">{question.optionOne.votes.length} out of {(question.optionOne.votes.length + question.optionTwo.votes.length)}</h5>
                    </div>
                    <hr />
                  </div>
                  <div className="row">
                    <div className="container-fluid">
                      <h4>{question.optionTwo.text}</h4>
                      {answer === "optionTwo" && <img style={{ position: "absolute", height: "40px", width: "40px", marginLeft: "375px", marginTop: "-50px" }} src={YourVote} alt="Logo" />}
                      <div className="progress" style={{ height: "32px" }}>
                        {answerTwoPercentage > 0 ?
                          <div style={{ width: `${answerTwoPercentage}%` }} className="progress-bar">{answerTwoPercentage}%</div> :
                          <div style={{ width: `100%`, backgroundColor: "transparent", color: '#000' }} className="progress-bar">{answerTwoPercentage}%</div>}
                      </div>
                      <h5 className="center">{question.optionTwo.votes.length} out of {(question.optionOne.votes.length + question.optionTwo.votes.length)}</h5>
                    </div>
                    <hr />
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

export default withRouter(connect(mapStateToProps)(Results));