import { createSlice } from '@reduxjs/toolkit'
import { posts } from './posts'

const gallerySlice = createSlice({
  name: 'gallery',
  initialState: {posts},
  reducers: {
    addPost: (state, action) => {
      state.posts = [action.payload, ...state.posts]
    }
  }
})

//Destructing of the gallerySlice
const { actions: galleryActions, reducer: galleryReducer } = gallerySlice;
export { galleryActions, galleryReducer }