import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { rootReducer } from 'src/reducers';

const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware({ serializableCheck: false })],
  devTools: true,
});

export type AppDispatch = typeof store.dispatch;
export default store;
