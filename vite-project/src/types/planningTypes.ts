export interface PlanningData {
    storeId: string;
    skuId: string;
    week: string;
    salesUnits: number;
    salesDollars: number;
    costDollars: number;
    gmDollars: number;
    gmPercentage: number;
  }
  
export interface PlanningState {
    data: PlanningData[];
  }