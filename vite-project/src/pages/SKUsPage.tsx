import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { addSKU, updateSKU, removeSKU } from "../features/skuSlice";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { AgGridReact } from "ag-grid-react";
import { ColDef } from "ag-grid-community";
import { SKU } from "../types/skusTypes";

const SKUs: React.FC = () => {
  const skus = useSelector((state: RootState) => state.skus.skus);
  const columnDefs: ColDef<SKU>[] = [
    { field: "id", headerName: "ID" },
    { field: "label", headerName: "Label" },
    { field: "class", headerName: "Class" },
    { field: "department", headerName: "Department" },
    { field: "price", headerName: "Price" },
    { field: "cost", headerName: "Cost" },
  ];

  return (
    <div className="ag-theme-alpine" style={{ height: 500, width: "100%"}}>
      <AgGridReact rowData={skus} columnDefs={columnDefs} />
    </div>
  );
};

export default SKUs;
