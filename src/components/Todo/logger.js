function logger(reducer){
  return (prevState,action) =>{
    console.group(action.type)
    console.log("State cũ: ", prevState);
    console.log("Action: ", action);
    const newState = reducer(prevState,action)
    console.log("State được cập nhật: ", newState);
    console.groupEnd();
    return newState
  }
}
export default logger;