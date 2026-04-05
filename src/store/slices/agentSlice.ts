import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type agentCardContentType = {
    id: number,
    image: string,
    photo: string,
    name: string,
    city: string,
    rating: string,
    comment: string
}


type initialStateType = {
    agentCardContent: agentCardContentType[]
}

const initialState: initialStateType = {
    agentCardContent: []
}

const agentSlice = createSlice({
    name: "agent",
    initialState,
    reducers: {
        setAgentCardContent(state, action: PayloadAction<agentCardContentType[]>) {
            state.agentCardContent = action.payload
        }
    }
})

export const { setAgentCardContent } = agentSlice.actions

export default agentSlice.reducer