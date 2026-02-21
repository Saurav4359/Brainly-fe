import Dashboard from "./pages/dashboard";
import { MainPage } from "./pages/MainPage";
import { Signin } from "./pages/Signin";
import { Signup } from "./pages/Signup";
import { PageNotFound } from "./pages/pageNotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./pages/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;