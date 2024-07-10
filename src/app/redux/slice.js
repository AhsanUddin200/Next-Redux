const { createSlice,nanoid } = require("@reduxjs/toolkit");

const initialState = {
    users : []

}

const Slice = createSlice({
    initialState,
    //Here Create We Action (that add new  user taken id and name)
    reducer : {
        addUser : (state,action)=>{
            const data = {
                id : nanoid(),
                name : action.name
            }
            state.users.push(data);
        }
    }
})

export const {addUser} = Slice.actions;
export default Slice.reducer;