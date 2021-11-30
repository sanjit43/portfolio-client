import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import About from "./Components/About/About";
import Home from './Components/Home/Home';
import Mywork from "./Components/MyWork/Mywork";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home></Home>} />
        </Routes>
        <Routes>
          <Route path='home' element={<Home></Home>} />
        </Routes>
        <Routes>
          <Route path='work' element={<Mywork></Mywork>} />
        </Routes>
        <Routes>
          <Route path='about' element={<About></About>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
