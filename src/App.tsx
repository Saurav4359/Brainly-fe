import Dashboard from "./pages/dashboard";
import { MainPage } from "./pages/MainPage";
import { Signin } from "./pages/Signin";
import { Signup } from "./pages/Signup";
import { PageNotFound } from "./pages/pageNotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
 
function App() {
     const token = localStorage.getItem("token");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<PageNotFound data={false}/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
       <Route path="/dashboard" element={ token?  <Dashboard /> :<PageNotFound  data={true}/> } />  
      </Routes>
    </BrowserRouter>
  );
}

export default App;
