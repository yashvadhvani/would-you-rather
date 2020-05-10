const RECIEVE_QUESTIONS = 'RECIEVE_QUESTIONS';
const SAVE_QUESTION = 'SAVE_QUESTION';
const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER';

const recieveQuestions = (questions) =>({
  type: RECIEVE_QUESTIONS,
  questions
})

const saveQuestion = (question) =>({
  type: SAVE_QUESTION,
  question
})

const saveQuestionAnswer = (response) =>({
  type: SAVE_QUESTION_ANSWER,
  response
})

export {  
  recieveQuestions,
  saveQuestion,
  saveQuestionAnswer,
  RECIEVE_QUESTIONS,
  SAVE_QUESTION,
  SAVE_QUESTION_ANSWER
}