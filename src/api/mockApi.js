import axios from "axios";

export const api = axios.create({
    baseURL: "https://68c7ac935d8d9f5147328860.mockapi.io/",
    headers: {"Content-Type": "application/json"},
    timeout: 10_000
});

// 获取所有 todos
export function getTodos() {
    return api.get("/todos").then(res => res.data);
}

// 获取单个 todo
export function getTodoById(id) {
    return api.get(`/todos/${id}`).then(res => res.data);
}

// 新增 todo
export function addTodo(todo) {
    return api.post("/todos", todo).then(res => res.data);
}

// 更新 todo
export function updateTodo(id, todo) {
    return api.put(`/todos/${id}`, todo).then(res => res.data);
}

// 删除 todo
export function deleteTodo(id) {
    return api.delete(`/todos/${id}`).then(res => res.data);
}
