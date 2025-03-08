import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import {
  Bar,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
  ComposedChart,
} from "recharts";

import { chart } from "../data/chart";

const Chart: React.FC = () => {
  const stores = useSelector((state: RootState) => state.stores.stores);

  const [selectedStore, setSelectedStore] = useState(
    stores.length > 0 ? stores[0].id : ""
  );

  const handleStoreChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedStore(e.target.value);
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Gross Margin</h1>

      {/* Store Dropdown */}
      <label className="block mb-2">
        Select Store:
        <select
          className="ml-2 p-1 border rounded"
          value={selectedStore}
          onChange={handleStoreChange}
        >
          {stores.map((store) => (
            <option key={store.id} value={store.id}>
              {store.city}
            </option>
          ))}
        </select>
      </label>

      {/* Chart Container */}
      <ResponsiveContainer width="100%" height={400}>
        <ComposedChart
          data={chart}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <XAxis dataKey="Week" />
          <YAxis yAxisId="left" orientation="left" stroke="#4A90E2" />
          <YAxis
            yAxisId="right"
            orientation="right"
            stroke="#E26A42"
            tickFormatter={(value) => `${value.toFixed(0)}%`}
          />
          <Tooltip />
          <Legend />

          <Bar
            yAxisId="left"
            dataKey="GM Dollars"
            fill="#4A90E2"
            name="GM Dollars"
          />

          <Line
            yAxisId="right"
            type="monotone"
            dataKey="GM %"
            stroke="#E26A42"
            strokeWidth={2}
            dot={{ r: 3 }}
            activeDot={{ r: 5 }}
            name="GM %"
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
