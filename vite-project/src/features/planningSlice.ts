// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { planning } from "../data/planning";
// import { PlanningData, PlanningState } from "../types/planningTypes";

// const initialState: PlanningState = {
//   data: planning, 
// };

// const planningSlice = createSlice({
//   name: "planning",
//   initialState,
//   reducers: {
//     updatePlanningData: (state, action: PayloadAction<PlanningData>) => {
//       const index = state.data.findIndex(
//         (item) =>
//           item.storeId === action.payload.storeId &&
//           item.skuId === action.payload.skuId &&
//           item.week === action.payload.week
//       );

//       if (index !== -1) {
//         const newSalesUnits = action.payload.salesUnits;
//         const pricePerUnit = state.data[index].salesDollars / (state.data[index].salesUnits || 1);
//         const costPerUnit = state.data[index].costDollars;

//         state.data[index] = {
//           ...action.payload,
//           salesDollars: newSalesUnits * pricePerUnit,
//           gmDollars: newSalesUnits * (pricePerUnit - costPerUnit),
//           gmPercentage:
//             newSalesUnits * (pricePerUnit - costPerUnit) / (newSalesUnits * pricePerUnit) * 100 || 0,
//         };
//       }
//     },
//   },
// });

// export const { updatePlanningData } = planningSlice.actions;
// export default planningSlice.reducer;




import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { planning } from "../data/planning";
import { PlanningData, PlanningState } from "../types/planningTypes";

const initialState: PlanningState = {
  data: planning,
};

const planningSlice = createSlice({
  name: "planning",
  initialState,
  reducers: {
    updatePlanningData: (state, action: PayloadAction<PlanningData>) => {
      const index = state.data.findIndex(
        (item) =>
          item.storeId === action.payload.storeId &&
          item.skuId === action.payload.skuId &&
          item.week === action.payload.week
      );

      if (index !== -1) {
        const newSalesUnits = action.payload.salesUnits;
        const pricePerUnit = state.data[index].salesDollars / (state.data[index].salesUnits || 1);
        const costPerUnit = state.data[index].costDollars;

        state.data[index] = {
          ...action.payload,
          salesDollars: newSalesUnits * pricePerUnit,
          gmDollars: newSalesUnits * (pricePerUnit - costPerUnit),
          gmPercentage:
            newSalesUnits * (pricePerUnit - costPerUnit) / (newSalesUnits * pricePerUnit) * 100 || 0,
        };
      }
    },
  },
});

export const { updatePlanningData } = planningSlice.actions;
export default planningSlice.reducer;
