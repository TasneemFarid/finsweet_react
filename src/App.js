import BlogPage from "./pages/BlogPage";
import Home from "./pages/Home";
import "./style.css";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/blogpage" element={<BlogPage />}></Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
