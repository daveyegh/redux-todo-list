import { ADD_TODO, FILTER_ACTIVE, FILTER_ALL, FILTER_COMPLETED, MARK_COMPLETE, REMOVE_TODO } from "./action-types";

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

export function markComplete(item) {
    return {
        type: MARK_COMPLETE,
        item: item
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

export function filterAll(todos) {
    return {
        type: FILTER_ALL,
        todos: todos
    }
}