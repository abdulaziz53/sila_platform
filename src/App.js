import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import MainRoutes from "./MainRoutes";
import NavigationLeft from "./Components/NavigationLeft/NavigationLeft";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <NavigationLeft />
        <MainRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
