import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

export const getUsersFromServer = createAsyncThunk('users/getUsersFromServer', async (url) => {
    return fetch(url)
        .then(res => res.json())
        .then(data => data)
})

export const removeUsersFromServer = createAsyncThunk('users/removeUsersFromServer', async (url) => {
    return fetch(url, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
        }
    })
    .then(res => res.json())
    .then(data => data)
})

const slice = createSlice({
    name: 'users',
    initialState: [],
    reducers: {
        createUser: (state, action) => {},
    },
    extraReducers: (builder) => {
        builder.addCase(getUsersFromServer.fulfilled, (state, action) => action.payload)
        builder.addCase(removeUsersFromServer.fulfilled, (state, action) => {
            const newState = state.filter(user => user._id !== action.payload.id)

            return newState
        })
    }
})

export default slice.reducer;
export const { removeUser } = slice.actions;