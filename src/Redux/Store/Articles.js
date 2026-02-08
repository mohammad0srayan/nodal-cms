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

export const createArticleFromServer = createAsyncThunk('articles/createArticleFromServer', async ({url, title, category, views, desc }) => {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title,
            category,
            views,
            desc
        })
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
        builder.addCase(getArticlesFromServer.fulfilled, (state, action) => {
            return action.payload
        })
        builder.addCase(createArticleFromServer.fulfilled, (state, action) => {
            state.push(action.payload)
        })
        builder.addCase(removeArticlesFromServer.fulfilled, (state, action) => {
            return state.filter(article => article._id !== action.payload.id)
        })
    }
})

export default slice.reducer;