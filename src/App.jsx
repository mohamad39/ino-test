import { Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import LeadForm from "./Pages/BusinessInfoForm";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/Form" element={<LeadForm />} />
      </Routes>
    </>
  );
}

export default App;
