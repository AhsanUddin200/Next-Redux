const { createSlice,nanoid,current } = require("@reduxjs/toolkit");

const initialState = {
    users : JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")) : []

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
//Here We Are Store Data in local storage
            let userData = JSON.stringify(current(state.users))
            localStorage.setItem("users",userData);
            console.log(current(state.users))
        },
        //Here We Create an action of remove user
        removeUser : (state,action)=>{
            console.log(action);
            const data = state.users.filter((item)=>{
                return item.id !== action.payload
        })

        state.users = data;
        let userData = JSON.stringify((state.users))
            localStorage.removeItem("users",userData);
         

        }
    }
})

export const {addUser,removeUser} = Slice.actions;
export default Slice.reducer;