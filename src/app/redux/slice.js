const {
  createSlice,
  nanoid,
  current,
  createAsyncThunk,
} = require("@reduxjs/toolkit");

const initialState = {
    usersAPIData : [],
  users: JSON.parse(localStorage.getItem("users"))
    ? JSON.parse(localStorage.getItem("users"))
    : [],
};

//Here We are calling an API
export const fetchApiUsers = createAsyncThunk("fetchApiUsers", async () => {
    console.log("action")
    const result = await fetch("https://jsonplaceholder.typicode.com/users");
    return result.json();
});

const Slice = createSlice({
  name: "addUserSlice",
  initialState,
  //Here Create We Action Add (that add new  user taken id and name)
  reducers: {
    addUser: (state, action) => {
      console.log(action);
      const data = {
        id: nanoid(),
        name: action.payload,
      };

      state.users.push(data);
      //Here We Are Store Data in local storage
      let userData = JSON.stringify(current(state.users));
      localStorage.setItem("users", userData);
      console.log(current(state.users));
    },
    //Here We Create an action of remove user
    removeUser: (state, action) => {
      console.log(action);
      const data = state.users.filter((item) => {
        return item.id !== action.payload;
      });

      state.users = data;
      let userData = JSON.stringify(data);
      localStorage.removeItem("users", userData);
    },
  },

  extraReducers: (builder) => {
    
    builder.addCase(fetchApiUsers.fulfilled, (state, action) => {
        console.log("reducer",action);
      (state.isloading = false), (state.usersAPIData = action.payload);
    });
  },
});

export const { addUser, removeUser } = Slice.actions;
export default Slice.reducer;
