import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { AgGridReact } from "ag-grid-react";
import { ColDef } from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { CellStyle } from "ag-grid-community";


const Planning: React.FC = () => {
  const stores = useSelector((state: RootState) => state.stores.stores);
  const skus = useSelector((state: RootState) => state.skus.skus);
  
  const [rowData, setRowData] = useState(
    stores.flatMap(store => 
      skus.map(sku => ({
        store: store.name,  // Store name instead of object
        sku: sku.name,
        price: sku.price,
        cost: sku.cost,
        salesUnits: 0,
      }))
    )
  );


  const columnDefs: ColDef[] = [
    { field: "store", headerName: "Store", sortable: true },
    { field: "sku", headerName: "SKU", sortable: true },
    {
      field: "salesUnits",
      headerName: "Sales Units",
      editable: true,
      valueSetter: (params) => {
        params.data.salesUnits = Number(params.newValue) || 0;
        params.data.salesDollars = params.data.salesUnits * params.data.price;
        params.data.gmDollars = params.data.salesDollars - params.data.salesUnits * params.data.cost;
        params.data.gmPercent = params.data.salesDollars ? (params.data.gmDollars / params.data.salesDollars) * 100 : 0;
        return true;
      },
    },
    {
      field: "salesDollars",
      headerName: "Sales Dollars",
      valueFormatter: (params) => `$${params.value.toFixed(2)}`,
    },
    {
      field: "gmDollars",
      headerName: "GM Dollars",
      valueFormatter: (params) => `$${params.value.toFixed(2)}`,
    },
    {
      field: "gmPercent",
      headerName: "GM %",
      valueFormatter: (params) => `${params.value.toFixed(2)}%`,
      cellStyle: (params): CellStyle => {
        const value = params.value as number;
        if (value >= 40) return { backgroundColor: "green", color: "white" };
        if (value >= 10) return { backgroundColor: "yellow" };
        if (value > 5) return { backgroundColor: "orange" };
        return { backgroundColor: "red", color: "white" };
      },
    },
  ];
  
  

  return (
    <div className="ag-theme-alpine h-screen p-4">
      <h1 className="text-xl font-bold mb-4">Planning</h1>
      <AgGridReact rowData={rowData} columnDefs={columnDefs} domLayout="autoHeight" />
    </div>
  );
};

export default Planning;
