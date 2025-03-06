import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PlanningData {
  storeId: string;
  skuId: string;
  week: string;
  salesUnits: number;
  salesDollars: number;
  gmDollars: number;
  gmPercentage: number;
}

interface PlanningState {
  data: PlanningData[];
}

const initialState: PlanningState = {
  data: [],
};

const planningSlice = createSlice({
  name: "planning",
  initialState,
  reducers: {
    updatePlanningData: (state, action: PayloadAction<PlanningData>) => {
      const index = state.data.findIndex(
        item => item.storeId === action.payload.storeId && item.skuId === action.payload.skuId && item.week === action.payload.week
      );
      if (index !== -1) {
        state.data[index] = action.payload;
      } else {
        state.data.push(action.payload);
      }
    },
  },
});

export const { updatePlanningData } = planningSlice.actions;
export default planningSlice.reducer;
