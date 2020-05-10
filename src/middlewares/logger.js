const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.log('The Action : ', action.type);
  const returnVal = next(action);
  console.log('The State : ', store.getState());
  console.groupEnd();
  return returnVal;
}

export default logger;