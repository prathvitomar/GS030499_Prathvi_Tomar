import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

interface Store {
  id: string;
  name: string;
}

const Chart: React.FC = () => {
  const stores = useSelector((state: RootState) => state.stores.stores);
  const skus = useSelector((state: RootState) => state.skus.skus);

  // Initialize with the first store object, not a string
  const [selectedStore, setSelectedStore] = useState<Store | null>(stores.length > 0 ? stores[0] : null);

  const handleStoreChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = e.target.value;
    const store = stores.find((s) => s.id === selectedId) || null;
    setSelectedStore(store);
  };

  const chartData = skus.map((sku) => {
    const salesUnits = Math.floor(Math.random() * 100); // Placeholder for actual sales data
    const salesDollars = salesUnits * sku.price;
    const gmDollars = salesDollars - salesUnits * sku.cost;
    const gmPercent = salesDollars ? (gmDollars / salesDollars) * 100 : 0;
    return {
      name: sku.name,
      gmDollars,
      gmPercent,
    };
  });

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Chart</h1>
      <label className="block mb-2">
        Select Store:
        <select
          className="ml-2 p-1 border rounded"
          value={selectedStore?.id || ""}
          onChange={handleStoreChange}
        >
          {stores.map((store) => (
            <option key={store.id} value={store.id}>
              {store.name}
            </option>
          ))}
        </select>
      </label>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <XAxis dataKey="name" />
          <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
          <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
          <Tooltip />
          <Legend />
          <Bar yAxisId="left" dataKey="gmDollars" fill="#8884d8" name="GM Dollars" />
          <Bar yAxisId="right" dataKey="gmPercent" fill="#82ca9d" name="GM %" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
