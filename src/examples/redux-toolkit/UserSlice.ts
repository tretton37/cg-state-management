import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetUsers, IUser, GetUserById } from "../../api/user-api";

interface userSliceState {
  users: {
    items: IUser[];
    loading: boolean;
  };
}

const initialState: userSliceState = {
  users: {
    items: [],
    loading: false,
  },
};

export const getUsers = createAsyncThunk("users/getAll", GetUsers);
export const getUsersById = createAsyncThunk(
  "users/getById",
  async (id: number) => await GetUserById(id)
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Get users
    builder.addCase(getUsers.pending, (state, action) => {
      console.log("loading...");
      state.users.loading = true;
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.users.items = action.payload;
      state.users.loading = false;
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      console.log("FAIL");
      state.users.loading = false;
    });

    // Get single user
    builder.addCase(getUsersById.pending, (state, action) => {
      console.log("loading...");
      state.users.loading = true;
    });
    builder.addCase(getUsersById.fulfilled, (state, action) => {
      const { id } = action.payload;
      const index = state.users.items.findIndex(
        (user: IUser) => user.id === id
      );
      if (index > -1) {
        state.users.items.push(action.payload);
      } else {
        state.users.items[index] = action.payload;
      }
      state.users.loading = false;
    });
    builder.addCase(getUsersById.rejected, (state, action) => {
      console.log("FAIL");
      state.users.loading = false;
    });
  },
});

export const { reducer } = userSlice;
export default userSlice;
