import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const getArticlesFromServer = createAsyncThunk('articles/getArticlesFromServer', async (url) => {
    return fetch(url)
    .then(res => res.json())
    .then(data => data)
});

export const removeArticlesFromServer = createAsyncThunk('articles/removeArticlesFromServer', async (url) => {
    return fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(data => data)
});

const slice = createSlice({
    name: "articles",
    initialState: [],
    reducers: {
        createArticle: (state, action) => {}
    },
    extraReducers: (builder) => {
        builder.addCase(getArticlesFromServer.fulfilled, (state, action) => action.payload)
        builder.addCase(removeArticlesFromServer.fulfilled, (state, action) => {
            const newState = state.filter(article => article._id !== action.payload.id)

            return newState
        })
    }
})

export default slice.reducer;