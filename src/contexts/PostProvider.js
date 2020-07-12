import createProvider from './createProvider';

import { INDEX_POSTS, STORE_POST, UPDATE_POST, DESTROY_POST } from './types';

import jsonServer from '../apis/jsonServer';

const reducer = (state, action) => {
  switch (action.type) {
    case INDEX_POSTS:
      return action.payload;
    case STORE_POST:
      return [...state, action.payload];
    case UPDATE_POST:
      return state.map(post =>
        post.id === action.payload.id ? action.payload : post
      );
    case DESTROY_POST:
      return state.filter(post => post.id !== action.payload);
    default:
      return state;
  }
};

const actions = {
  indexPosts(dispatch) {
    return async () => {
      const { data } = await jsonServer.get('/posts');

      dispatch({ type: INDEX_POSTS, payload: data });
    };
  },
  storePost(dispatch) {
    return async (post, callback) => {
      const { data } = await jsonServer.post('/posts', post);

      dispatch({ type: STORE_POST, payload: data });

      if (callback) callback();
    };
  },
  updatePost(dispatch) {
    return async ({ body, id, title }, callback) => {
      const { data } = await jsonServer.put(`/posts/${id}`, { body, title });

      dispatch({ type: UPDATE_POST, payload: data });

      if (callback) callback();
    };
  },
  destroyPost(dispatch) {
    return async id => {
      await jsonServer.delete(`/posts/${id}`);

      dispatch({ type: DESTROY_POST, payload: id });
    };
  }
};

export const { Context: PostContext, Provider: PostProvider } = createProvider(
  [],
  reducer,
  actions
);
