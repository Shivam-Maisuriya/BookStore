import Course from "./components/Course";
import Home from "./home/Home";
import './index.css'
import { Routes, Route} from "react-router-dom";

function App() {

  return (
    <>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Course />} />
       </Routes>
    </>
  )
}

export default App
