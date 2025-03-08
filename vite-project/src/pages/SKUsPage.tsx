import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { addSKU, updateSKU, removeSKU } from "../features/skuSlice";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { AgGridReact } from "ag-grid-react";
import { ColDef } from "ag-grid-community";
import { SKU } from "../types/skusTypes";
import { Trash2 } from "lucide-react";

const SKUs: React.FC = () => {
  const dispatch = useDispatch();
  const skus = useSelector((state: RootState) => state.skus.skus);

  const [newSKU, setNewSKU] = useState<SKU>({
    id: "",
    label: "",
    class: "",
    department: "",
    price: 0,
    cost: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewSKU({ ...newSKU, [e.target.name]: e.target.value });
  };

  const handleAddSKU = () => {
    if (!newSKU.id || !newSKU.label) return;

    dispatch(addSKU(newSKU));

    setNewSKU({
      id: "",
      label: "",
      class: "",
      department: "",
      price: 0,
      cost: 0,
    });
  };

  const handleCellEdit = (params: any) => {
    const updatedSKU = { ...params.data, [params.colDef.field]: params.value };
    dispatch(updateSKU(updatedSKU));
  };

  const handleRemoveSKU = (id: string) => {
    dispatch(removeSKU(id));
  };

  const columnDefs: ColDef<SKU>[] = [
    {
      headerName: "Remove",
      width: 100,
      cellRenderer: (params: any) => (
        <button
          onClick={() => handleRemoveSKU(params.data.id)}
          className="text-red-500 hover:text-red-700"
        >
          <Trash2 size={18} />
        </button>
      ),
    },
    { field: "id", headerName: "ID" },
    { field: "label", headerName: "Label", editable: true },
    { field: "class", headerName: "Class", editable: true },
    { field: "department", headerName: "Department", editable: true },
    {
      field: "price",
      headerName: "Price",
      editable: true,
      valueParser: (params) => Number(params.newValue) || 0,
    },
    {
      field: "cost",
      headerName: "Cost",
      editable: true,
      valueParser: (params) => Number(params.newValue) || 0,
    },
  ];

  return (
    <div className="flex flex-col h-screen p-4 space-y-4">
      <div className="bg-white p-4 rounded shadow-md">
        <h2 className="text-lg font-semibold mb-2">Add New SKU</h2>
        <div className="grid grid-cols-6 gap-2">
          <Input
            type="text"
            name="id"
            placeholder="ID"
            value={newSKU.id}
            onChange={handleChange}
            className="w-full border border-black p-2"
          />
          <Input
            type="text"
            name="label"
            placeholder="Label"
            value={newSKU.label}
            onChange={handleChange}
            className="w-full border border-black p-2"
          />
          <Input
            type="text"
            name="class"
            placeholder="Class"
            value={newSKU.class}
            onChange={handleChange}
            className="w-full border border-black p-2"
          />
          <Input
            type="text"
            name="department"
            placeholder="Department"
            value={newSKU.department}
            onChange={handleChange}
            className="w-full border border-black p-2"
          />
          <Input
            type="number"
            name="price"
            placeholder="Price"
            value={newSKU.price}
            onChange={handleChange}
            className="w-full border border-black p-2"
          />
          <Input
            type="number"
            name="cost"
            placeholder="Cost"
            value={newSKU.cost}
            onChange={handleChange}
            className="w-full border bordi er-black p-2"
          />
          <Button
            onClick={handleAddSKU}
            className="col-span-6 border border-black p-2"
          >
            Add SKU
          </Button>
        </div>
      </div>

      <div className="flex-1 overflow-auto">
        <div className="ag-theme-alpine w-full" style={{ height: "100%" }}>
          <AgGridReact
            rowData={skus}
            columnDefs={columnDefs}
            singleClickEdit={true}
            stopEditingWhenCellsLoseFocus={true}
            onCellValueChanged={handleCellEdit}
            domLayout="autoHeight"
          />
        </div>
      </div>
    </div>
  );
};

export default SKUs;
