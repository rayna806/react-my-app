import { api } from './api/mockApi'

export function useTodoService() {
    const loadTodos = () => {
        return api.get("/todos").then(res => res.data);
    }
    const addTodo = (todo) => {
        return api.post("/todos", todo).then(res => res.data);
    }
    const updateTodo = (id, todo) => {
        return api.put(`/todos/${id}`, todo).then(res => res.data);
    }
    const deleteTodo = (id) => {
        return api.delete(`/todos/${id}`).then(res => res.data);
    }
    const getTodoById = (id) => {
        return api.get(`/todos/${id}`).then(res => res.data);
    }

    return {
        loadTodos,
        addTodo,
        updateTodo,
        deleteTodo,
        getTodoById
    }


}
