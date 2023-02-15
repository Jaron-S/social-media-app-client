import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: "light",
    user: {
        _id: '63d3245310249c43ca38804a',
        firstName: 'John',
        lastName: 'Smith',
        email: 'johnsmith@gmail.com',
        password: '$2b$10$.3F/Zx6uD4iGFEXkj8/Mbeohp8PITsJid7oynAybKq545XzggRJe.',
        picturePath: 'p4.jpeg',
        friends: [
          {
            _id: '63cae259ccea636a4d97d0ba',
            firstName: 'Carly',
            lastName: 'Vowel',
            occupation: 'Nurse',
            location: 'Chicago, IL',
            picturePath: 'p8.jpeg'
          },
          {
            _id: '63cae259ccea636a4d97d0b5',
            firstName: 'Steve',
            lastName: 'Ralph',
            occupation: 'Degenerate',
            location: 'New York, CA',
            picturePath: 'p3.jpeg'
          },
          {
            _id: '63cae259ccea636a4d97d0b9',
            firstName: 'Harvey',
            lastName: 'Dunn',
            occupation: 'Journalist',
            location: 'Los Angeles, CA',
            picturePath: 'p7.jpeg'
          }
        ],
        location: 'Toronto, ON',
        occupation: 'Developer',
        viewedProfile: 23,
        impressions: 5127,
        createdAt: '2023-01-27T01:09:39.640Z',
        updatedAt: '2023-02-13T23:27:51.355Z',
        __v: 23
      },
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZDMyNDUzMTAyNDljNDNjYTM4ODA0YSIsImlhdCI6MTY3NjM5MjgxMn0.7dAcBwdpombdc-5r37ZbfExg68d9zKa3BcJ0liw2GmQ',
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

export const { setMode, setLogin, setLogout, setFriends, setPosts, setPost } = authSlice.actions;
export default authSlice.reducer;