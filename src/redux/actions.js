import { ADD_TODO, FILTER_ACTIVE, FILTER_COMPLETED, MARK_COMPLETE, REMOVE_TODO } from "./action-types";

export function addTodo(todo) {
    return {
        type: ADD_TODO,
        title: todo
    }
}

export function removeTodo(id) {
    return {
        type: REMOVE_TODO,
        id: id
    }
}

export function markComplete(id) {
    return {
        type: MARK_COMPLETE,
        id: id
    }
}

export function filterComplete(todos) {
    return {
        type: FILTER_COMPLETED,
        todos: todos
    }
}


export function filterActive(todos) {
    return {
        type: FILTER_ACTIVE,
        todos: todos
    }
}