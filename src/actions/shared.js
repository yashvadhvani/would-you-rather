
import { _getQuestions, _getUsers, _saveQuestion, _saveQuestionAnswer } from '../utils/_DATA'
import { recieveQuestions, saveQuestion, saveQuestionAnswer } from './questions'
import { receiveUsers, addQuestion, addQuestionAnswer } from './users'
import { showLoading, hideLoading } from 'react-redux-loading'


const handleInitialData = () => (dispatch) => {
  dispatch(showLoading())
  Promise.all([
    _getQuestions(),
    _getUsers(),
  ])
    .then(([questions, users]) => {
      dispatch(recieveQuestions(questions))
      dispatch(receiveUsers(users))
      dispatch(hideLoading())
    })
    .catch(() => {
      alert('Something went wrong!! Try again')
      dispatch(hideLoading())
    })
}

const handleSavingQuestion = (question) => (dispatch, getState) => {
  const { authedUser } = getState();
  dispatch(showLoading());
  return _saveQuestion({
    ...question,
    author: authedUser
  })
  .then((res)=> {
    dispatch(saveQuestion(res));
    dispatch(addQuestion({
      id: res.id,
      authedUser
    }))
    dispatch(hideLoading());
  })
  .catch(() =>{
    alert('Something went wrong !! Please try again  ')
  })
}

const handleSavingAnswer = (response) => (dispatch, getState) => {
  const { authedUser } = getState();
  dispatch(showLoading());
  return _saveQuestionAnswer({
    ...response,
    authedUser
  })
  .then(()=> {
    dispatch(saveQuestionAnswer(response));
    dispatch(addQuestionAnswer(response))
    dispatch(hideLoading());
  })
  .catch(() =>{
    alert('Something went wrong !! Please try again  ')
  })
}


export {
  handleInitialData,
  handleSavingQuestion,
  handleSavingAnswer
}