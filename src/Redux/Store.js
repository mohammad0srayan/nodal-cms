import {configureStore} from '@reduxjs/toolkit'
import usersReducer from './Store/Users'
import coursesReducer from './Store/Courses'
import articlesReducer from './Store/Articles'

const store = configureStore({
    reducer: {
        users: usersReducer,
        courses: coursesReducer,
        articles: articlesReducer
    }
})


export default store;