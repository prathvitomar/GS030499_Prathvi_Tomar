export interface Store {
    seqNo: number;
    id: string;
    label: string;
    city: string;
    state: string;
  }
  
  export interface StoreState {
    stores: Store[];
  }
  