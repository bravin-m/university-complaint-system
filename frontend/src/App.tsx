import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import StudentPortal from "./pages/studentportal";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/student" element={<StudentPortal />} />

        <Route
          path="*"
          element={<Navigate to="/student" replace />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;