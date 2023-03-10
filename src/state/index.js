import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    _id: "63d3245310249c43ca38804a",
    firstName: "John",
    lastName: "Smith",
    email: "johnsmith@gmail.com",
    password: "$2b$10$.3F/Zx6uD4iGFEXkj8/Mbeohp8PITsJid7oynAybKq545XzggRJe.",
    picturePath: "p11.webp",
    friends: [],
    location: "Toronto, ON",
    occupation: "Developer",
    viewedProfile: 23,
    impressions: 5127,
    createdAt: "2023-01-27T01:09:39.640Z",
    updatedAt: "2023-02-15T03:00:07.134Z",
  },
  posts: [],
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZDMyNDUzMTAyNDljNDNjYTM4ODA0YSIsImlhdCI6MTY3NzAwMDkyMX0._mj26yjzg00FQ90IVK0Shi4t3_7NoKO4xIfgJ3qo-PU",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
    setFriends: (state, action) => {
      if (state.user) {
        state.user.friends = action.payload.friends;
      } else {
        console.error("user friends non-existent");
      }
    },
    setPosts: (state, action) => {
      state.posts = action.payload.posts;
    },
    setPost: (state, action) => {
      const updatedPosts = state.posts.map((post) => {
        if (post._id === action.payload.post._id) return action.payload.post;
        return post;
      });
      state.posts = updatedPosts;
    },
  },
});

export const { setMode, setLogin, setLogout, setFriends, setPosts, setPost } =
  authSlice.actions;
export default authSlice.reducer;
