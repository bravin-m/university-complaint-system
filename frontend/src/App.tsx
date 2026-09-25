import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./pages/login";
import StudentPortal from "./pages/studentportal";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/login" element={<Login />} />

        <Route path="/student" element={<StudentPortal />} />

        <Route
          path="/"
          element={<Navigate to="/student" replace />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;