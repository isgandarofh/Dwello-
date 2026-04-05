import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type servicesContentArrType = {
    id: number,
    img: string,
    title: string,
    subtitle: string
}

type initialStateType = {
    servicesContentArr: servicesContentArrType[]
}

const initialState: initialStateType = {
    servicesContentArr: []
}

const servicesSlice = createSlice({
    name: 'services',
    initialState,
    reducers: {
        setServicesContent(state, action: PayloadAction<servicesContentArrType[]>) {
            state.servicesContentArr = action.payload
        }
    }
})

export const { setServicesContent } = servicesSlice.actions
export default servicesSlice.reducer
