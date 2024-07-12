const { createSlice,nanoid } = require("@reduxjs/toolkit");

const initialState = {
    users : []

}

const Slice = createSlice({
    name:"addUserSlice",
    initialState,
    //Here Create We Action (that add new  user taken id and name)
    reducers : {
        addUser : (state,action)=>{
            console.log(action)
            const data = {
                id : nanoid(),
                name : action.payload
            }
            state.users.push(data);
        }
    }
})

export const {addUser} = Slice.actions;
export default Slice.reducer;