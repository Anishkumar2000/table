import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeTabel from "./Components/HomeTabel";
import Add_Emp from "./Components/Add_Emp";
import Up_Emp  from "./Components/Up_Emp";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeTabel />} />
          <Route path="/Add_Emp" element={<Add_Emp />} />
          <Route path="/Update_Emp" element={<Up_Emp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
