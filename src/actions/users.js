const RECIEVE_USERS = 'RECIEVE_USERS';
const ADD_QUESTION = 'ADD_QUESTION';
const ADD_QUESTION_ANSWER = 'ADD_QUESTION_ANSWER';


const receiveUsers = (users) =>({
  type: RECIEVE_USERS,
  users
})

const addQuestion = (question) =>({
  type: ADD_QUESTION,
  question
})

const addQuestionAnswer = (response) =>({
  type: ADD_QUESTION_ANSWER,
  response
})

export {
  RECIEVE_USERS,
  ADD_QUESTION,
  ADD_QUESTION_ANSWER,
  receiveUsers,
  addQuestion,
  addQuestionAnswer
}