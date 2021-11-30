import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Home from './Components/Home/Home';
import Mywork from "./Components/MyWork/Mywork";
import Thanks from "./Components/ThanksPage/Thanks";

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
        <Routes>
          <Route path='contact' element={<Contact></Contact>} />
        </Routes>
        <Routes>
          <Route path='thanks' element={<Thanks></Thanks>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
