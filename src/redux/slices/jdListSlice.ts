import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import { AppThunk, RootState } from '../store';
import { JdDetails } from '../../types';

interface JdListState {
  jdList: JdDetails[];
  loading: boolean;
  error: string | null;
}

const initialState: JdListState = {
  jdList: [],
  loading: false,
  error: null,
};

const jdListSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {
    fetchJdListRequest(state) {
      state.loading = true;
      state.error = null;
    },
    fetchJdListSuccess(state, action: PayloadAction<JdDetails[]>) {
      state.jdList = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchJdListFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchJdListRequest, fetchJdListSuccess, fetchJdListFailure } = jdListSlice.actions;

export default jdListSlice.reducer;

export const selectJdList = (state: RootState) => state.jdList;
export const selectLoading = (state: RootState) => state.jdList.loading;
export const selectError = (state: RootState) => state.jdList.error;

export const fetchJdList = (): AppThunk => async (dispatch) => {
  dispatch(fetchJdListRequest());
  try {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const body = JSON.stringify({
      limit: 10,
      offset: 0,
    });

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body,
    };

    const response = await fetch(import.meta.env.VITE_API_ENDPOINT, requestOptions);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    dispatch(fetchJdListSuccess(data.jdList));
  } catch (error) {
    dispatch(fetchJdListFailure(error.message));
  }
};
