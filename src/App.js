import "./App.css";
import NavigationBar from "./Componants/Navigation/NavigationBar";
import Contant from "./Componants/Pages/PageContants/Contant";
import Sidebar from "./Componants/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      {/* <NavigationBar /> */}
      <Sidebar/>
      <Contant/>
    </div>
  );
}

export default App;
