import React from "react";
import { AgGridReact } from "ag-grid-react";
import { ColDef, ModuleRegistry } from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { ClientSideRowModelModule } from "ag-grid-community";
import { Store } from "../types/storeTypes"; 

// Register required module
ModuleRegistry.registerModules([ClientSideRowModelModule]);

const Stores: React.FC = () => {
  const rowData = useSelector((state: RootState) => state.stores.stores);

  const columnDefs: ColDef<Store>[] = [
    { field: "seqNo", headerName: "Seq No" },
    { field: "id", headerName: "ID" },
    { field: "label", headerName: "Store Name" },
    { field: "city", headerName: "City" },
    { field: "state", headerName: "State" },
  ];

  return (
    <div className="ag-theme-alpine" style={{ height: 500, width: "100%"}}>
      <AgGridReact rowData={rowData} columnDefs={columnDefs} />
    </div>
  );
};

export default Stores;
