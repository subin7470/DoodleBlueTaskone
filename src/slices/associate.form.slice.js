import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  associateFormList: [],
};
export const associatesFormSlice = createSlice({
  name: 'associatesForm',
  initialState,
  reducers: {
    updateAssociatesFormList: (state, action) => {
      state.associateFormList.push(action.payload);
    },
  },
});
export const {updateAssociatesFormList} = associatesFormSlice.actions;
export default associatesFormSlice.reducer;
