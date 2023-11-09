import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TeamHome } from "./TeamHome";
import { TeamBuilding } from "./TeamBuilding";
import { TeamDetail } from "./TeamDetail";
import { Navbar } from "./Navbar";

export function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<TeamHome />}></Route>
          <Route path="/:id" element={<TeamDetail />}></Route>
          <Route path="/team-building" element={<TeamBuilding />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
