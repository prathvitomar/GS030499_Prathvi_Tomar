# 📊 Data Viewer Progressive Web App  

🚀 **Live Demo:** [Click Here](https://gs-030499-prathvi-tomar-git-main-prathvitomars-projects.vercel.app/login)



## 📌 Overview  
This project is a **Data Viewer Progressive Web App** designed for **Store and SKU management**, **sales and margin planning**, and **interactive data visualization** using **AG-Grid and charts**.  

It enables **CRUD operations** for stores and SKUs, provides a **dynamic planning grid**, and features an **optional charting page** for analyzing Gross Margin (GM%).  

---

## ✨ Features  

### 🖥️ UI & Navigation  
- ✅ **Top Navigation Bar**: Displays the company logo and authentication menu (Sign In/Sign Out).  
- ✅ **Sidebar Navigation**: Provides quick access to different screens with icons and labels.  

### 🏪 Store Management  
- ✅ Add, update, remove, and reorder **stores** for efficient business location management.  

### 📦 SKU Management  
- ✅ Add, update, remove **SKUs** with **price and cost management**.  

### 📅 Planning Screen (AG-Grid)  
A dynamic **cross-join grid** with **Stores and SKUs** as rows and a **Calendar** (Weeks grouped by Months) as columns.  

#### 📝 **Editable Fields**  
- ✔️ **Sales Units** - Manually entered sales data.  

#### 📊 **Auto-Calculated Fields**  
- ✔️ **Sales Dollars** = `Sales Units * Price`  
- ✔️ **GM Dollars** = `Sales Dollars - (Sales Units * Cost)`  
- ✔️ **GM %** = `GM Dollars / Sales Dollars`  

#### 🎨 **Conditional Formatting for GM%**  
| GM % Range  | Color |
|-------------|-------|
| ≥ 40%       | 🟢 Green |
| 10% - 40%   | 🟡 Yellow |
| 5% - 10%    | 🟠 Orange |
| ≤ 5%        | 🔴 Red |

### 📈 Optional: Chart Page  
- 📊 **Dual Axis Bar Chart** displaying **GM Dollars** and **GM %** for a selected store.  
- ✔️ Aggregates GM% across SKUs for each store.  
- ✔️ Visualizes trends over time (**Weeks on X-Axis, GM values on Y-Axis**).  

---

## 🛠️ Tech Stack  

| **Technology**  | **Usage** |
|----------------|----------|
| **React.js** | Frontend UI |
| **TypeScript** | Type Safety |
| **Tailwind CSS** | Styling |
| **Redux Toolkit** | State Management |
| **AG-Grid** | Data Grid for Planning |
| **React Router** | Routing |
| **Charting Library** | Data Visualization |
| **LocalStorage & Redux Persist** | Authentication |
| **Vercel** | Deployment |

---

## 🔗 Setup & Installation  

1. **Clone the repository**  
   ```sh
   git clone <repo-url>
   cd <repo-folder>
