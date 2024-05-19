import { Outlet } from "react-router-dom";
import "./App.css";
import Sidebar from "./Componants/Sidebar/Sidebar";
import Footer from "./Componants/Pages/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
