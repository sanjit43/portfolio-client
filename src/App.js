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
        <Home></Home>
      </BrowserRouter>

    </div>
  );
}

export default App;
