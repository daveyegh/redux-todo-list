import {
  ADD_TODO,
  FILTER_ACTIVE,
  FILTER_ALL,
  FILTER_COMPLETED,
  MARK_COMPLETE,
  REMOVE_TODO,
} from "./action-types";
import { markComplete } from "./actions";

let initalState = {
  todos: JSON.parse(localStorage.getItem("todos")) || [],
  filteredTodos: JSON.parse(localStorage.getItem("todos")) || [],
};

function reducer(state = initalState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: Date.now(),
            title: action.title,
            markedComplete: false,
          },
        ],
        filteredTodos: [
          ...state.filteredTodos,
          {
            id: Date.now(),
            title: action.title,
            markedComplete: false,
          },
        ],
      };
    case REMOVE_TODO:
      console.log(state.todos);
      const removedArr = [...state.todos].filter(
        (item) => item.id !== action.id
      );
      return {
        ...state,
        todos: [...removedArr],
        filteredTodos: [...removedArr],
      };
    case MARK_COMPLETE:
      const markedComplete = [...state.todos];
      markedComplete.forEach((item) =>
        item.id === action.item.id ? (item.markedComplete = true) : null
      );
      return {
        ...state,
        todos: [...markedComplete],
        filteredTodos: [...markedComplete],
      };
      break;
    case FILTER_COMPLETED:
      const filteredArr = [...state.todos].filter((item) => {
        return item.markedComplete === true;
      });
      console.log(state.todos)
      console.log(filteredArr);
      return {
        ...state,
        filteredTodos: [...filteredArr],
      };
    case FILTER_ACTIVE:
      const activeArr = [...state.todos].filter((item) => {
        return item.markedComplete !== true;
      });
      return {
          ...state,
          filteredTodos: [...activeArr]
      }
      break;
    case FILTER_ALL:
      const allArr = [...state.todos];
      console.log(allArr)
      return {
          ...state,
          filteredTodos: [...allArr]
      }
      break;
    default:
      return state;
  }
}

export default reducer;
