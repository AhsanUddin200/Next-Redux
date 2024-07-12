const { createSlice,nanoid } = require("@reduxjs/toolkit");

const initialState = {
    users : []

}

const Slice = createSlice({
    name:"addUserSlice",
    initialState,
    //Here Create We Action Add (that add new  user taken id and name)
    reducers : {
        addUser : (state,action)=>{
            console.log(action)
            const data = {
                id : nanoid(),
                name : action.payload
            }
            state.users.push(data);
        },
        //Here We Create an action of remove user
        removeUser : (state,action)=>{
            console.log(action);
            const data = state.users.filter((item)=>{
                return item.id !== action.payload
        })

        state.users = data;

        }
    }
})

export const {addUser,removeUser} = Slice.actions;
export default Slice.reducer;