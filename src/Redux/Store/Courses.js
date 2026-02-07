import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

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

const slice = createSlice({
    name: "courses",
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCoursesFromServer.fulfilled, (state, action) => action.payload)
        builder.addCase(removeCourseFromServer.fulfilled, (state, action) => {
            const newState = state.filter(course => course._id !== action.payload.id)

            return newState
        })
    }
})

export default slice.reducer;