export interface SKU{
    id: string;
    label: string;
    class: string;
    department: string;
    price: number;
    cost: number;
}


export interface SKUState {
    skus: SKU[];
  }