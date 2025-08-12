import { createSlice } from "@reduxjs/toolkit";
import { formInitialState } from "./formInitialState";

const customerFormSlice = createSlice({
  name: "customerForm",
  initialState,
  reducers: {
    updateStepData: (state, action) => {
      const { stepName, formData } = action.payload;
      state.data[stepName] = { ...state.data[stepName], ...formData };
    },
    setErrors: (state, action) => {
      state.errors = action.payload;
    },
    nextStep: (state) => {
      state.step += 1;
    },
    prevStep: (state) => {
      state.step -= 1;
    },
    resetForm: () => initialState,
  },
});

export const { updateStepData, setErrors, nextStep, prevStep, resetForm } =
  customerFormSlice.actions;
export default customerFormSlice.reducer;
