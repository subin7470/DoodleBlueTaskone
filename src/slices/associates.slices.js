import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  associatesList: [],
  pageDetails: null,
};
export const associatesSlice = createSlice({
  name: 'associates',
  initialState,
  reducers: {
    updatePageDetails: (state, action) => {
      state.pageDetails = action.payload;
    },
    getAssociatesList: (state, action) => {},
    updateAssociatesListFromAPI: (state, action) => {
      state.associatesList = state.associatesList.concat(action.payload);
    },
    updateAssociateListwithForm: (state, action) => {
      state.associatesList.push(action.payload);
    },
  },
});
export const {
  getAssociatesList,
  updateAssociatesListFromAPI,
  updatePageDetails,
  updateAssociateListwithForm,
} = associatesSlice.actions;
export default associatesSlice.reducer;
