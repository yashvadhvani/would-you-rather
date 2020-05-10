import { RECIEVE_USERS, ADD_QUESTION, ADD_QUESTION_ANSWER } from '../actions/users'

const users = (state = {}, action) => {
  switch (action.type) {
    case RECIEVE_USERS:
      return {
        ...action.users
      };
    case ADD_QUESTION: {

      const { id, authedUser } = action.question;
      const user = {
        ...state[authedUser]
      }
      user.questions.push(id);
      return {
        ...state,
        [user.id]: user,
      }
    }
    case ADD_QUESTION_ANSWER: {
      const user = { ...state[action.response.authedUser] }
      user.answers[action.response.qid] = action.response.answer;
      return {
        ...state,
        [user.id]: user
      }
    }

    default:
      return state;
  }
}

export default users;