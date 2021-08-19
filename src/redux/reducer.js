import {
  ADD_TODO,
  FILTER_ACTIVE,
  FILTER_COMPLETED,
  MARK_COMPLETE,
  REMOVE_TODO,
} from "./action-types";

let initalState = {
  todos: JSON.parse(localStorage.getItem('todos')),
};


function reducer(state = initalState.todos, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: Date.now(),
          title: action.title,
          markedComplete: false,
        },
      ];
    case REMOVE_TODO:
      return [...state.filter((item) => item.id !== action.id)];
      break
    case MARK_COMPLETE:
      const newList = [...state];
      newList.map((item) => {
        if (item.id === action.id) {
          item.markedComplete = true;
          console.log(item.markedComplete);
        }
      });
      state = newList;
    // case FILTER_COMPLETED:
    //   const filteredArr = state.filter((item) => {
    //     return item.markedComplete === true;
    //   });
    //   console.log(filteredArr)
    //   state = filteredArr
    // case FILTER_ACTIVE:
    //     const activeArr = [...state].filter((item) => {
    //         return item.markedComplete;
    //     });
    //     state = activeArr
    default:
      return state;
  }
}

export default reducer;
