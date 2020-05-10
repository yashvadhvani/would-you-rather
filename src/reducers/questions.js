import { RECIEVE_QUESTIONS, SAVE_QUESTION, SAVE_QUESTION_ANSWER } from '../actions/questions'

const questions = (state = {}, action) => {
  switch (action.type) {
    case RECIEVE_QUESTIONS:
      return {
        ...action.questions
      };
    case SAVE_QUESTION: {
      return {
        ...state,
        [action.question.id]: action.question
      }
    }
    case SAVE_QUESTION_ANSWER: {
      const question = {
        ...state[action.response.qid]
      }
      question[action.response.answer].votes.push(action.response.authedUser)
      return {
        ...state,
        [action.response.qid]: question
      }
    }
    default:
      return state;
  }
}

export default questions;