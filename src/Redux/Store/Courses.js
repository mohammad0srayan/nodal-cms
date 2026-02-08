import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const getCoursesFromServer = createAsyncThunk('courses/getCoursesFromServer', async (url) => {
    return fetch(url)
        .then(res => res.json())
        .then(data => data)
});

export const removeCourseFromServer = createAsyncThunk('courses/removeCourseFromServer', async (url) => {
    return fetch(url)
        .then(res => res.json())
        .then(data => data)
})

export const disCountAllCoursesFromServer = createAsyncThunk('courses/disCountAllCoursesFromServer', async ({url, discount }) => {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            discount
        })
    })
        .then(res => res.json())
        .then(data => data)
})

export const categoryCoursesFromServer = createAsyncThunk('courses/categoryCoursesFromServer', async ({url, category }) => {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            category
        })
    })
        .then(res => res.json())
        .then(data => data)
})

export const createCourseFromServer = createAsyncThunk('courses/createCourseFromServer', async ({url, title, price, category, registersCount, discount, desc }) => {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            title,
            price,
            category,
            registersCount,
            discount,
            desc
        })
    })
        .then(res => res.json())
        .then(data => data)
})

const slice = createSlice({
    name: "courses",
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCoursesFromServer.fulfilled, (state, action) => {
            return action.payload
        })
        builder.addCase(createCourseFromServer.fulfilled, (state, action) => {
            state.push(action.payload)
        })
        builder.addCase(removeCourseFromServer.fulfilled, (state, action) => {
            return state.filter(course => course._id !== action.payload.id)
        })
        builder.addCase(disCountAllCoursesFromServer.fulfilled, (state, action) => {
            state.push(action.payload)
        })
        builder.addCase(categoryCoursesFromServer.fulfilled, (state, action) => {
            state.push(action.payload)
        })
    }
})

export default slice.reducer;