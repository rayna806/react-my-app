export const initialState = [
    {id: 1, text: "the first todo", done: false},
    {id: 2, text: "the second todo", done: false},
];

export const todoReducer = (state, action) => {
    switch(action.type) {
        case"LOAD_TODOS":
            return action.payload;
        case 'DONE':
            return state.map(todo =>
                todo.id === action.id ? {...todo, done: !todo.done} : todo
            );
        case 'ADD':
            return [
                ...state,
                action.payload
            ];
        case 'DELETE':
            return state.filter(todo => todo.id !== action.id);

        case "UPDATE_TODO":
            return state.map(todo =>
                todo.id === action.payload.id ? action.payload : todo
            );
        default:
            return state;
    }
};