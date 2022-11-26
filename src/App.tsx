import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./page/Home/Home";
import { LayoutContainer } from "./StyleComponents/Layout_StyleComponents";

function App() {
  return (
    <>
      <NavBar />
      <LayoutContainer>
        <Home />
      </LayoutContainer>
    </>
  );
}

export default App;
