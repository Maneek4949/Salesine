import Home from "./Components/Home";
import "./App.css"
import Menu from "./Components/Menu";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Calls from "./Components/Calls";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";



function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
          <Navbar />
            <Routes>
              <Route path="/">
                <Route index element={<Home />} />
                <Route path="/calls" element={<Calls type="calls" />} />
                <Route path="/login" element={<SignIn/>} />
                <Route path="/signup" element={<SignUp/>} />
              </Route>
            </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
