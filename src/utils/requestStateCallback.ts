export type RequestState = {
  isLoading: boolean;
  isSuccess: boolean;
  isUpdate?: boolean;
};

export const onPending = (state: RequestState) => {
  state.isLoading = true;
  state.isSuccess = false;
};

export const onFulfilled = (state: RequestState) => {
  state.isLoading = false;
  state.isSuccess = true;
};

export const onRejected = (state: RequestState) => {
  state.isLoading = false;
  state.isSuccess = false;
};
