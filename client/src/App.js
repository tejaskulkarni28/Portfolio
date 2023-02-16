import BackgroundLayout from "./components/BackgroundLayout/BackgroundLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BackgroundPage from "./pages/BackgroundPage/BackgroundPage";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/portfolio" element={<BackgroundLayout/>} />
        <Route path="/projects" element={<BackgroundPage/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
