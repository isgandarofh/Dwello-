import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type residenceContentType = {
    id: number,
    img: string,
    location : string,
    room : string,
    ft : string,
    price : string
}

type initialStateType = {
    residenceContent: residenceContentType[]
}

const initialState: initialStateType = {
    residenceContent: []
}


const residenceSlice = createSlice({
    name: "residence",
    initialState,
    reducers: {
        setResidenceContent(state, action : PayloadAction<residenceContentType[]>){
            state.residenceContent = action.payload
        }
    }
})

export const {setResidenceContent} = residenceSlice.actions
export default residenceSlice.reducer