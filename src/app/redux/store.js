const { configureStore } = require("@reduxjs/toolkit");
import usersReducer from './slice'
import todosReducer from './todoSlice'
export const store = configureStore({
    reducer : {
        usersData : usersReducer,
        todosData : todosReducer
    }

})