import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

// Define a type for the slice state
interface IUserState {
    userName: string;
}

// Define the initial state using that type
const initialState: IUserState = {
    userName: "Firoz Khan",
}

export const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        changeUserName: (state, action: PayloadAction<string>) => {
            console.log(action)
            state.userName = action.payload
        },
    },
})

export const { changeUserName } = userSlice.actions
export default userSlice.reducer