import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} exact={true} />
    </Routes>
  );
}
export default App;
