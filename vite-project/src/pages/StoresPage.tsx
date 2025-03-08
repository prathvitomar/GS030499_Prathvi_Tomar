import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { ColDef, ModuleRegistry } from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../app/store";
import { ClientSideRowModelModule } from "ag-grid-community";
import { Store } from "../types/storeTypes";
import { addStore, removeStore, updateStore, reorderStores } from "../features/storeSlice";
import { v4 as uuidv4 } from "uuid";
import { Trash2 } from "lucide-react";

ModuleRegistry.registerModules([ClientSideRowModelModule]);

const Stores: React.FC = () => {
  const dispatch = useDispatch();
  const rowData = useSelector((state: RootState) => state.stores.stores);
  const [newStore, setNewStore] = useState({ label: "", city: "", state: "" });

  const onCellValueChanged = (event: any) => {
    const updatedStore = event.data as Store;
    dispatch(updateStore(updatedStore));
  };

  const handleAddStore = () => {
    if (!newStore.label || !newStore.city || !newStore.state) return;

    const newStoreData: Store = {
      seqNo: 1,
      id: uuidv4(),
      ...newStore,
    };

    const updatedStores = [newStoreData, ...rowData.map((store, index) => ({ ...store, seqNo: index + 2 }))];

    dispatch(reorderStores(updatedStores));
    setNewStore({ label: "", city: "", state: "" });
  };

  const handleRemoveStore = (id: string) => {
    const updatedStores = rowData.filter((store) => store.id !== id);
    const reorderedStores = updatedStores.map((store, index) => ({ ...store, seqNo: index + 1 }));
    dispatch(reorderStores(reorderedStores));
  };

  const onRowDragEnd = (event: any) => {
    const newOrder = event.api.getDisplayedRowAtIndex(event.overIndex)?.data;
    if (!newOrder) return;
    const updatedStores = [...rowData];
    const draggedStore = updatedStores.splice(event.node.rowIndex, 1)[0];
    updatedStores.splice(event.overIndex, 0, draggedStore);

    updatedStores.forEach((store, index) => {
      store.seqNo = index + 1;
    });

    dispatch(reorderStores(updatedStores));
  };

  const columnDefs: ColDef<Store>[] = [
    { field: "seqNo", headerName: "Seq No", width: 100 },
    { field: "label", headerName: "Store Name", editable: true },
    { field: "city", headerName: "City", editable: true },
    { field: "state", headerName: "State", editable: true },
    {
      headerName: "Actions",
      cellRenderer: (params: any) => (
        <button onClick={() => handleRemoveStore(params.data.id)} className="text-red-500 hover:text-red-700">
          <Trash2 size={18} />
        </button>
      ),
    },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Stores</h1>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Store Name"
          value={newStore.label}
          onChange={(e) => setNewStore({ ...newStore, label: e.target.value })}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="City"
          value={newStore.city}
          onChange={(e) => setNewStore({ ...newStore, city: e.target.value })}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="State"
          value={newStore.state}
          onChange={(e) => setNewStore({ ...newStore, state: e.target.value })}
          className="border p-2 rounded"
        />
        <button onClick={handleAddStore} className="bg-blue-500 text-white px-4 py-2 rounded">
          Add Store
        </button>
      </div>

      <div className="ag-theme-alpine" style={{ height: 500, width: "100%" }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          rowDragManaged={true}
          rowDragEntireRow={true}
          animateRows={true}
          onRowDragEnd={onRowDragEnd}
          onCellValueChanged={onCellValueChanged}
        />
      </div>
    </div>
  );
};

export default Stores;
