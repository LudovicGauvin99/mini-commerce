import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Menu } from "./composants/Menu";
import { PanierProvider } from "./context/PanierContext";
import { ProfilProvider } from "./context/ProfilContext";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <PanierProvider>
        <ProfilProvider>
          <Menu></Menu>
          <Outlet />
        </ProfilProvider>
      </PanierProvider>
    </div>
  );
}

export default App;
