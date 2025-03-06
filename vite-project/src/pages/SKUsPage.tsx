import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { addSKU, updateSKU, removeSKU } from "../features/skuSlice";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";

const SKUs: React.FC = () => {
  const dispatch = useDispatch();
  const skus = useSelector((state: RootState) => state.skus.skus);
  const [newSKU, setNewSKU] = useState("");
  const [price, setPrice] = useState("");
  const [cost, setCost] = useState("");

  const handleAddSKU = () => {
    if (newSKU.trim() && price.trim() && cost.trim()) {
      dispatch(
        addSKU({
          id: crypto.randomUUID(), // ✅ Fix: Add unique ID
          name: newSKU,
          price: parseFloat(price),
          cost: parseFloat(cost),
        })
      );
      setNewSKU("");
      setPrice("");
      setCost("");
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">SKUs</h1>
      <div className="flex gap-2 mb-4">
        <Input value={newSKU} onChange={(e) => setNewSKU(e.target.value)} placeholder="SKU Name" />
        <Input value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" />
        <Input value={cost} onChange={(e) => setCost(e.target.value)} placeholder="Cost" />
        <Button onClick={handleAddSKU}>Add SKU</Button>
      </div>
      <ul>
        {skus.map((sku) => (
          <li key={sku.id} className="flex justify-between p-2 border-b">
            {sku.name} - Price: ${sku.price} - Cost: ${sku.cost}
            <Button onClick={() => dispatch(removeSKU(sku.id))}>Delete</Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SKUs;
