import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../app/store";
import { updatePlanningData } from "../features/planningSlice";
import { AgGridReact } from "ag-grid-react";
import { ColDef, CellValueChangedEvent } from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "./styles.css";

const Planning: React.FC = () => {
  const dispatch = useDispatch();
  const rowData = useSelector((state: RootState) => state.planning.data);

  const columnDefs: ColDef[] = [
    { field: "storeId", headerName: "Store", rowGroup: true },
    { field: "skuId", headerName: "SKU", rowGroup: true },
    { field: "week", headerName: "Week", sortable: true },
    {
      field: "salesUnits",
      headerName: "Sales Units",
      editable: true,
      valueSetter: (params) => {
        const newValue = Number(params.newValue) || 0;
        params.data.salesUnits = newValue;

        params.data.salesDollars = newValue * params.data.price;
        params.data.gmDollars = params.data.salesDollars - newValue * params.data.costDollars;
        params.data.gmPercentage = params.data.salesDollars
          ? (params.data.gmDollars / params.data.salesDollars) * 100
          : 0;

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
      field: "gmPercentage",
      headerName: "GM %",
      valueFormatter: (params) => `${params.value.toFixed(2)}%`,
      cellClassRules: {
        "gm-green": (params) => params.value >= 40,
        "gm-yellow": (params) => params.value >= 10 && params.value < 40,
        "gm-orange": (params) => params.value > 5 && params.value < 10,
        "gm-red": (params) => params.value <= 5,
      },
      cellStyle: (params) => {
        if (params.value >= 40) return { backgroundColor: "#4caf50", color: "white" };
        if (params.value >= 10) return { backgroundColor: "#ffeb3b", color: "black" };
        if (params.value > 5) return { backgroundColor: "#ff9800", color: "black" };
        return { backgroundColor: "#f44336", color: "white" };
      },
    }
    
    
  ];

  const onCellValueChanged = useCallback(
    (event: CellValueChangedEvent) => {
      dispatch(updatePlanningData(event.data));
      event.api.refreshCells({ force: true });
    },
    [dispatch]
  );

  return (
    <div className="ag-theme-alpine h-screen p-4">
      <h1 className="text-xl font-bold mb-4">Planning</h1>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        domLayout="autoHeight"
        onCellValueChanged={onCellValueChanged}
      />
    </div>
  );
};

export default Planning;