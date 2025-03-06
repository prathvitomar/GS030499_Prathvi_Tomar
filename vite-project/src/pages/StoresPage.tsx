// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "../store";
// import { addStore, updateStore, removeStore } from "../features/storeSlice";
// import { Button} from "../components/ui/Button";
// import { Input } from "../components/ui/Input";

// const Stores: React.FC = () => {
//   const dispatch = useDispatch();
//   const stores = useSelector((state: RootState) => state.stores.stores);
//   const [newStore, setNewStore] = useState("");

//   const handleAddStore = () => {
//     if (newStore.trim()) {
//       dispatch(addStore(newStore));
//       setNewStore("");
//     }
//   };

//   return (
//     <div className="p-4">
//       <h1 className="text-xl font-bold mb-4">Stores</h1>
//       <div className="flex gap-2 mb-4">
//         <Input value={newStore} onChange={(e) => setNewStore(e.target.value)} placeholder="Store Name" />
//         <Button onClick={handleAddStore}>Add Store</Button>
//       </div>
//       <ul>
//         {stores.map((store, index) => (
//           <li key={index} className="flex justify-between p-2 border-b">
//             {store}
//             <Button onClick={() => dispatch(deleteStore(store))}>Delete</Button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Stores;



import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { addStore, updateStore, removeStore } from "../features/storeSlice";
import { Button } from "../components/ui/Button"; // Check this import!
import { Input } from "../components/ui/Input"; // Check this import!
import { v4 as uuidv4 } from "uuid"; // For unique store IDs

const Stores: React.FC = () => {
  const dispatch = useDispatch();
  const stores = useSelector((state: RootState) => state.stores.stores);
  const [newStore, setNewStore] = useState("");

  const handleAddStore = () => {
    if (newStore.trim()) {
      dispatch(addStore({ id: uuidv4(), name: newStore })); // ✅ Fix: Provide an object
      setNewStore("");
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Stores</h1>
      <div className="flex gap-2 mb-4">
        <Input 
          value={newStore} 
          onChange={(e) => setNewStore(e.target.value)} 
          placeholder="Store Name" 
        />
        <Button onClick={handleAddStore}>Add Store</Button>
      </div>
      <ul>
        {stores.map((store) => (
          <li key={store.id} className="flex justify-between p-2 border-b">
            {store.name}
            <Button onClick={() => dispatch(removeStore(store.id))}>Delete</Button> 
            {/* ✅ Fix: Call `removeStore` instead of `deleteStore` */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Stores;
