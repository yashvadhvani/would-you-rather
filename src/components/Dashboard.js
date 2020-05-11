import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class Dashboard extends Component {
  render() {
    const { questions, user } = this.props;
    console.log('***********', questions)
    const { answered, unanswred } = questions.reduce((prev, question) => {
      if (Object.keys(user.answers).includes(question.id)) {
        prev.answered[question.id] = question;
        return prev;
      }
      prev.unanswred[question.id] = question;
      return prev;
    }, {
      answered: {},
      unanswred: {}
    })
    return (
      <div className="container">

        <ul className="nav nav-tabs">
          <li className="nav-blue active"><a data-toggle="tab" href="#unanswered">Unanswered Questions</a></li>
          <li className='nav-blue'><a data-toggle="tab" href="#answered">Answered Questions</a></li>
        </ul>

        <div className="tab-content">
          <div id="unanswered" className="tab-pane fade in active">
            {
              ((Object.keys(unanswred).length > 0)
                ? Object.keys(unanswred).map((id) => <Question key={id} id={id} type="unanswered" />)
                : <h3 className="center">You have answered all questions</h3>)
            }
          </div>
          <div id="answered" className="tab-pane fade">
            <div id="answered" className="tab-pane fade in active">
              {
                ((Object.keys(answered).length > 0)
                ? Object.keys(answered).map((id) => <Question key={id} id={id} type="answered" />)
                : <h3 className="center">You have not answered any question</h3>)
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ questions, users, authedUser }) => {
  return {
    questions: Object.values(questions).sort((a, b) => b.timestamp - a.timestamp),
    user: users[authedUser]
  }
}

export default connect(mapStateToProps)(Dashboard)