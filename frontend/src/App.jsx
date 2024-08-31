import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import SignupPage from "./SignupPage";
import Dashboard from "./Dashboard";
import Forgot from "./Forgot";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dash/*" element={<Dashboard />} />
        <Route path="/forgot" element={<Forgot />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;